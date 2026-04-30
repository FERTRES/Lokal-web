// SUPABASE CONFIGURATION
// Thornex Digital Entity - MorvithSERV

const SUPABASE_CONFIG = {
    url: 'https://wefmaebbauooxrtngsuh.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlZm1hZWJiYXVvb3hydG5nc3VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NTM4NTgsImV4cCI6MjA5MzAyOTg1OH0._MgdSdBtbwqWRetLW_G4O2VcGUGY0oRGKVpSyrA8uAg'
};

// CATATAN: Lo harus ganti anonKey dengan key asli dari Supabase project lo
// Ambil di Project Settings > API > Project API keys

// Initialize Supabase
const supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
