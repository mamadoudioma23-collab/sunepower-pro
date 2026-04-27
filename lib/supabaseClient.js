import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  "https://zkpzctyhxsnwtaeaevre.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcHpjdHloeHNud3RhZWFldnJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMDk3MzYsImV4cCI6MjA5Mjg4NTczNn0.5T2AezrfVbZwAm9NPzPmhR5Mv-nLbS_1eEMOKljOTQg"
)
