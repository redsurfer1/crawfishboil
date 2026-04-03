/*
  # Fix RSVP Security Policy

  1. Changes
    - Drop the existing "Anyone can submit RSVP" policy that has WITH CHECK (true)
    - Create a more restrictive policy that validates the data being inserted
    - Ensure name, email, and phone are provided and number_of_guests is reasonable
    - Add rate limiting considerations through validation

  2. Security Improvements
    - Validate that required fields are not empty
    - Ensure number_of_guests is between 1 and 20 (reasonable limit)
    - Ensure email format is valid
    - Prevent abuse while still allowing public RSVPs
*/

DROP POLICY IF EXISTS "Anyone can submit RSVP" ON rsvps;

CREATE POLICY "Public can submit valid RSVP"
  ON rsvps
  FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL 
    AND name != '' 
    AND length(name) <= 100
    AND email IS NOT NULL 
    AND email != '' 
    AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
    AND length(email) <= 254
    AND phone IS NOT NULL 
    AND phone != ''
    AND length(phone) <= 20
    AND number_of_guests >= 1 
    AND number_of_guests <= 20
  );
