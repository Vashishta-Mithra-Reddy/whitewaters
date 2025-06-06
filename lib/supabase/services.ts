import { createClient } from "./server";

export type Service = {
  id: string;
  slug: string; 
  name: string;
  description: string | null;
  category: 'kayaking' | 'rafting' | 'expedition';
  duration: string ;
  difficulty_level: 'beginner' | 'intermediate' | 'advanced';
  max_participants: number;
  price: number;
  images: string[] | null;
  included_items: string[] | null;
  requirements: string[];
  available_dates: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export async function getServices(): Promise<Service[] | null> {
  const supabase = createClient();

  const { data, error } = await (await supabase)
   .from('services')
   .select('*')
   .eq('is_active',true);

  if (error) {
    console.error('Error fetching services:', error.message);
    return null;
  }

  return data as Service[];
}

export async function getService({ slug }: { slug: string }): Promise<Service | null> {
  const supabase = createClient();

  const { data, error } = await (await supabase)
    .from('services')
    .select('*')
    .eq('slug', slug)
    .eq('is_active',true)
    .single(); 

  if (error) {
    console.error('Error fetching service:', error.message);
    return null;
  }

  return data as Service;
}

export async function getServicesByCategory({category}:{category:string}):Promise<Service[] | null>{
    const supabase = createClient();
    const { data, error } = await (await supabase)
    .from('services')
    .select('*')
    .eq('is_active',true)
    .eq('category',category)

    if(error){
        console.error('Error fetching services:', error.message);
        return null;
    }

    return data as Service[];
}