const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://bgnizrkmaphaxzcmfmba.supabase.co';
const supabaseKey = 'ENTER YOUR KEY HERE';

const supabase = createClient(supabaseUrl, supabaseKey);

async function fixSchema() {
  try {
    // Test if columns exist by querying the profiles table
    const { data, error } = await supabase
      .from('profiles')
      .select('accepted_terms, accepted_privacy, terms_accepted_at, privacy_accepted_at')
      .limit(1);
    
    if (error) {
      console.error('Schema issue detected:', error.message);
      
      // Try to reload schema via SQL
      const { error: reloadError } = await supabase.rpc('exec_sql', {
        sql: "NOTIFY pgrst, 'reload schema';"
      });
      
      if (reloadError) {
        console.log('Could not reload schema via RPC, columns may need manual refresh');
      } else {
        console.log('Schema reload triggered successfully');
      }
    } else {
      console.log('Schema is working correctly');
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

fixSchema();
