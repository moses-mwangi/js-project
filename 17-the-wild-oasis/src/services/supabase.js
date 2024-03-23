import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zkzmhaybhgrxkqzwrpkc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inprem1oYXliaGdyeGtxendycGtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MzY2MTksImV4cCI6MjAyNTIxMjYxOX0.wRQ_tqdfjflueOh_U2BHLE78-MUFPahdQF7hS6pvoCQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
