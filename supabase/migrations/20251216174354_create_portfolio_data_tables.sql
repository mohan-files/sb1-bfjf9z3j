/*
  # Create Portfolio Data Tables

  1. New Tables
    - `portfolio_profile`: Store profile information
      - `id` (uuid, primary key)
      - `name` (text)
      - `title` (text)
      - `bio` (text)
      - `image_url` (text)
      - `updated_at` (timestamp)
    
    - `contact_messages`: Store contact form submissions
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Public read access to profile data
    - Public insert for contact messages
*/

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'portfolio_profile') THEN
    CREATE TABLE portfolio_profile (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name text NOT NULL,
      title text NOT NULL,
      bio text,
      image_url text,
      updated_at timestamptz DEFAULT now()
    );

    ALTER TABLE portfolio_profile ENABLE ROW LEVEL SECURITY;

    CREATE POLICY "Public can view profile"
      ON portfolio_profile FOR SELECT
      USING (true);

    CREATE POLICY "Anyone can update profile"
      ON portfolio_profile FOR UPDATE
      USING (true)
      WITH CHECK (true);

    INSERT INTO portfolio_profile (name, title, bio, image_url)
    VALUES ('Mohan Sai Bakkamunthala', 'Software Engineer | Graduate Engineer Trainee at Coforge', 'Passionate developer from India', '/images/img-20250413-wa0003.jpg');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'contact_messages') THEN
    CREATE TABLE contact_messages (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      name text NOT NULL,
      email text NOT NULL,
      message text NOT NULL,
      created_at timestamptz DEFAULT now()
    );

    ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

    CREATE POLICY "Public can insert messages"
      ON contact_messages FOR INSERT
      WITH CHECK (true);

    CREATE POLICY "Public can view messages"
      ON contact_messages FOR SELECT
      USING (true);
  END IF;
END $$;