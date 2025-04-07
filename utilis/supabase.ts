import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://civzizggiurcnmqwalvu.supabase.co";
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpdnppemdnaXVyY25tcXdhbHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNjMwNzQsImV4cCI6MjA1ODYzOTA3NH0.iV3OWA4N7oghuNUqnwj7HpNrgPhE79aMEpGx1_YaERw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true, 
    persistSession: true,
    detectSessionInUrl: false,
  },
});