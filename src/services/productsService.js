import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';


const supabase = createClient('https://lmysveosqckpbyuldiym.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxteXN2ZW9zcWNrcGJ5dWxkaXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4MTMxNTksImV4cCI6MjA4MDM4OTE1OX0.z1i_Fi7uCXnX3cml7RbTHR6RxIrxVY947iOCTi80fQY');

export async function getProducts() {
  const { data } = await supabase.from('products').select('*');
  return data;
}

export async function updateProductColumn(productId, column, value) {
  await supabase
    .from('products')
    .update({ [column]: value })
    .eq('id', productId);
}

