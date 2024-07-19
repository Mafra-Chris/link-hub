"use server"
import { createClient } from '@/utils/supabase/server';

const supabase = createClient();

export default async function createLink() {

  const { data, error } = await supabase
  .from('links')
  .insert([
    { title: 'testesupabase', url: 'google.com' },
  ])
  .select()
          

  if (error) {
    console.error('Error creating link:', error);
    throw new Error('Error creating link');
  }
  return data;
}