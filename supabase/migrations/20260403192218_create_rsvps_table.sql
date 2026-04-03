/*
  # Create RSVPs Table

  1. New Tables
    - `rsvps`
      - `id` (uuid, primary key) - Unique identifier for each RSVP
      - `name` (text) - Guest's full name
      - `email` (text) - Guest's email address
      - `phone` (text) - Guest's phone number
      - `number_of_guests` (integer) - Number of people attending
      - `created_at` (timestamptz) - Timestamp when RSVP was submitted

  2. Security
    - Enable RLS on `rsvps` table
    - Add policy for public INSERT access (anyone can RSVP)
    - Add policy for authenticated users to view all RSVPs (for hosts to manage)
*/

CREATE TABLE IF NOT EXISTS rsvps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  number_of_guests integer NOT NULL DEFAULT 1,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit RSVP"
  ON rsvps
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view RSVPs"
  ON rsvps
  FOR SELECT
  TO authenticated
  USING (true);
