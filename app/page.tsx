import createLink from '@/utils/createLink';
import { createClient } from '@/utils/supabase/server';

export default async function Index() {
  const supabase = createClient();
  const { data: links } = await supabase.from('links').select();

  const handleCreateLink = async () => {
    'use server';
    try {
      const data = await createLink();
      console.log('Link created:', data);
    } catch (error) {
      console.error('Error creating link:', error);
    }
  };

  return (
    <>
      <form action={handleCreateLink}>
        <button>add link</button>
      </form>

      <pre>{JSON.stringify(links, null, 2)}</pre>
    </>
  );
}
