
-- Drop overly permissive RLS policy (service_role bypasses RLS anyway)
DROP POLICY IF EXISTS "Service role can manage all submissions" ON public.contact_submissions;

-- Switch has_role to SECURITY INVOKER. Authenticated users can read their own
-- user_roles rows via existing RLS, so has_role(auth.uid(), ...) still works.
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY INVOKER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Revoke EXECUTE from anon; keep authenticated so RLS policies can call it
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;
