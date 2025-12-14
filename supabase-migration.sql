-- Supabase Migration: Create waitlist_signups table
-- Run this SQL in your Supabase SQL Editor

-- Create the waitlist_signups table
create table if not exists waitlist_signups (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  role text,
  source text default 'landing',
  created_at timestamp with time zone default now()
);

-- Create an index on email for faster lookups
create index if not exists idx_waitlist_signups_email on waitlist_signups(email);

-- Create an index on created_at for sorting/filtering
create index if not exists idx_waitlist_signups_created_at on waitlist_signups(created_at desc);

-- Enable Row Level Security (RLS) - optional but recommended
alter table waitlist_signups enable row level security;

-- Create a policy that allows inserts from anyone (for the landing page)
-- Adjust this based on your security requirements
create policy "Allow public inserts" on waitlist_signups
  for insert
  with check (true);

-- Optional: Create a policy for authenticated users to read their own data
-- Uncomment if you want users to view their own signups
-- create policy "Users can view own signups" on waitlist_signups
--   for select
--   using (auth.uid()::text = id::text);

