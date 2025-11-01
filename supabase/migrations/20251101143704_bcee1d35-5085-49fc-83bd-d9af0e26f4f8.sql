-- Create admin role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table for proper role management
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable Row Level Security
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check admin status
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  );
$$;

-- Drop the existing overpermissive policy
DROP POLICY IF EXISTS "Only authenticated users can view submissions" ON public.contact_submissions;

-- Create admin-only read policy for contact submissions
CREATE POLICY "Only admins can view submissions"
ON public.contact_submissions
FOR SELECT
USING (public.is_admin());

-- Prevent all updates to submissions (they should be immutable)
CREATE POLICY "No updates allowed on submissions"
ON public.contact_submissions
FOR UPDATE
USING (false);

-- Allow only admins to delete submissions if needed
CREATE POLICY "Only admins can delete submissions"
ON public.contact_submissions
FOR DELETE
USING (public.is_admin());

-- RLS policies for user_roles table (only admins can manage roles)
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
USING (public.is_admin());

CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
WITH CHECK (public.is_admin());

CREATE POLICY "Admins can update roles"
ON public.user_roles
FOR UPDATE
USING (public.is_admin());

CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
USING (public.is_admin());