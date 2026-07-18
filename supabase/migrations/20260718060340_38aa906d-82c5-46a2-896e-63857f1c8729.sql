
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON public.contact_submissions;

CREATE POLICY "Anyone can insert contact submissions"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL
  AND length(trim(name)) > 0
  AND email IS NOT NULL
  AND length(trim(email)) > 0
  AND length(name) <= 200
  AND length(email) <= 320
);
