/*
  # Set up Storage for Portfolio Images

  1. Storage Setup
    - Create 'portfolio' bucket for storing profile images
    - Enable public access for images
    
  2. Security
    - Allow public read access to portfolio images
    - Allow authenticated users to upload images
*/

BEGIN;

-- Create the portfolio bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio', 'portfolio', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to view images
CREATE POLICY "Public Access to Portfolio Images"
ON storage.objects FOR SELECT
USING (bucket_id = 'portfolio');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload portfolio images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'portfolio' AND auth.role() = 'authenticated');

COMMIT;