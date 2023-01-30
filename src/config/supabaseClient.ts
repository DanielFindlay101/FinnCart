import { createClient } from "@supabase/supabase-js"


const supabaseUrl = 'https://ivudpxsjullsygjuzwjb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2dWRweHNqdWxsc3lnanV6d2piIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUwNzY0MzYsImV4cCI6MTk5MDY1MjQzNn0.SGxCgver6PEiwiZ9-dh81frBZG5Zvw9fj_VTdMIkhzY'

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;