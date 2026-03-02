-- Run this in your Supabase SQL Editor to create the table and initial data

CREATE TABLE IF NOT EXISTS public.site_content (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  page_section text UNIQUE NOT NULL,
  content jsonb NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Create policies (For this demo, we'll allow public read and update, 
-- but in production you would restrict update to authenticated admins)
CREATE POLICY "Enable read access for all users" ON public.site_content
    FOR SELECT USING (true);

CREATE POLICY "Enable update access for all users" ON public.site_content
    FOR UPDATE USING (true);
    
CREATE POLICY "Enable insert access for all users" ON public.site_content
    FOR INSERT WITH CHECK (true);

-- Insert initial default data
INSERT INTO public.site_content (page_section, content) VALUES
('hero', '{"title": "Welcome to the Place of", "subtitle": "Your Inheritance", "description": "Raising generations to fulfill their God-given purpose through the word of God and the power of the Holy Spirit."}'::jsonb),
('ministries', '{"title": "Our Ministries", "subtitle": "Impactful arms of the ministry designed to reach the world with the gospel.", "items": [{"title": "Rhapsody of Realities", "description": "The world''s number one daily devotional, bringing the richness of God''s Word to billions in every known language.", "image": "https://picsum.photos/600/800?random=1"}, {"title": "Healing School", "description": "Taking divine healing to the nations. Experience the miraculous power of God that restores hope and life.", "image": "https://picsum.photos/600/800?random=2"}, {"title": "LoveWorld USA", "description": "Broadcasting the glory of God to the nations through cutting-edge television ministry.", "image": "https://picsum.photos/600/800?random=3"}]}'::jsonb)
ON CONFLICT (page_section) DO NOTHING;
