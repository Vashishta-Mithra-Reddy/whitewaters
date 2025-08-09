import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import Link from "next/link";

export default function GalleryThingy() {
    return (
        <section className="py-20 md:pb-40 pb-20 w-full overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-20 text-center">Gallery</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-20 text-center">
           Some of the moments we have managed to capture.
      </p>
      <InfiniteSlider speedOnHover={40} gap={28} className="rounded-xl">
        {[
          {
            src: 'https://qhjoterajxzitvienqos.supabase.co/storage/v1/object/public/photos/gallery/10.avif',
            alt: 'Gyatso guiding Neha from Banglore in our home Eddy',
            url: '/services/beginner-kayaking-course',
            location: 'Beginner Kayaking Course',
          },
          {
            src: 'https://qhjoterajxzitvienqos.supabase.co/storage/v1/object/public/photos/gallery/11.avif',
            alt: 'Mandakini  Raft  Descent',
            url: '/services/mandakini-rafting-tilwara-rudraprayag',
            location: 'Tilwara to Rudraprayag',
          },
          {
            src: 'https://qhjoterajxzitvienqos.supabase.co/storage/v1/object/public/photos/gallery/1.avif',
            alt: 'The entrance to The Valley of Flowers in May.  You can see Vishnu Ganga flowing under the ice.  Mesmerizing!',
            url: '/services/valley-of-flowers',
            location: 'Uttarakhand',
          },
          {
            src: 'https://qhjoterajxzitvienqos.supabase.co/storage/v1/object/public/photos/gallery/2.avif',
            alt: 'Valley Of Flowers',
            url: '/services/valley-of-flowers',
            location: 'Uttarakhand',
          },
          {
            src: 'https://qhjoterajxzitvienqos.supabase.co/storage/v1/object/public/photos/gallery/12.avif',
            alt: 'Kaudgy To Shivnandi - Family Walk',
            url: '/services/kaudgy-to-shivanandi-family-walk',
            location: 'Kaudgi village',
          },
          {
            src: 'https://qhjoterajxzitvienqos.supabase.co/storage/v1/object/public/photos/gallery/3.avif',
            alt: 'Bedni Bugyal',
            url: '/services/bedni-bugyal',
            location: 'Garhwal Himalayas',
          },
          {
            src: 'https://qhjoterajxzitvienqos.supabase.co/storage/v1/object/public/photos/gallery/5.avif',
            alt: 'Kuari Pass',
            url: '/services/kuari-pass',
            location: 'Garhwal Himalayas',
          },
          {
            src: 'https://qhjoterajxzitvienqos.supabase.co/storage/v1/object/public/photos/gallery/9.avif',
            alt: 'Kuari Pass Trek',
            url: '/services/kuari-pass',
            location: 'Garhwal Himalayas',
          },
          {
            src: 'https://qhjoterajxzitvienqos.supabase.co/storage/v1/object/public/photos/gallery/7.avif',
            alt: 'Shalabh, Maya, Arjun and one Babaji they met on the way',
            url: '/services/rudranath-kalpeshwar',
            location: 'Kalpeshwar',
          },
          {
            src: 'https://qhjoterajxzitvienqos.supabase.co/storage/v1/object/public/photos/gallery/8.avif',
            alt: 'Junar Gali a point higher then Roopkund',
            url: '/services/roopkund-lake',
            location: 'Roopkund',
          },
        ].map(({ src, alt, url, location }) => (
          <Link href={url} key={alt}>
          <div className="relative group w-[320px] aspect-square rounded-xl overflow-hidden">
            <img src={src} alt={alt} className="w-full h-full object-cover rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 backdrop-blur-sm to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            <span className="absolute bottom-6 left-4 text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 animate-in fade-in text-balance">
              {alt}<br></br><span className="text-lg text-white/70">{location}</span>
            </span>
          </div>
          </Link>
        ))}
      </InfiniteSlider>
      </section>
    );

}