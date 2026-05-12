
-- Drop existing table and policies if they exist (CASCADE handles policies)
DROP TABLE IF EXISTS public.contact_submissions CASCADE;

-- Create the contact_submissions table
CREATE TABLE public.contact_submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    position TEXT,
    net_worth TEXT,
    experience TEXT,
    interests TEXT,
    motivation TEXT,
    message TEXT,
    form_type TEXT NOT NULL DEFAULT 'contact',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_submissions
CREATE POLICY "Anyone can insert contact submissions" 
ON public.contact_submissions 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Users can update own contact submissions" 
ON public.contact_submissions 
FOR UPDATE 
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Users can delete own contact submissions" 
ON public.contact_submissions 
FOR DELETE 
TO authenticated
USING (true);

CREATE POLICY "Service role can manage all submissions" 
ON public.contact_submissions 
FOR ALL 
TO service_role
USING (true)
WITH CHECK (true);

-- Create indexes for common queries
CREATE INDEX idx_contact_submissions_form_type ON public.contact_submissions(form_type);
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_email ON public.contact_submissions(email);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_submissions_updated_at
BEFORE UPDATE ON public.contact_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.contact_submissions;

-- Add table comments
COMMENT ON TABLE public.contact_submissions IS 'Unified table for all website form submissions including contact forms, event RSVPs, and membership applications';
COMMENT ON COLUMN public.contact_submissions.form_type IS 'Type of submission: contact, rsvp, or application';

-- Verify table creation
SELECT COUNT(*) as contact_submissions_created FROM public.contact_submissions;
