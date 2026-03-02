import { createClient } from '@supabase/supabase-js';

// Hardcoding public keys to ensure successful Netlify deployments regardless of environment variables
const supabaseUrl = 'https://qakkayfzwkfggidyjxhf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFha2theWZ6d2tmZ2dpZHlqeGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc4NzEyMzEsImV4cCI6MjA4MzQ0NzIzMX0.swHHIqyDPmWTJ-FFrR4m3QfWf6__5f4zcQflYMsom5c';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
