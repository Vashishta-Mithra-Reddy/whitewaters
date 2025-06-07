'use client';

import { Calendar } from 'lucide-react';
import Image from 'next/image';

type Service = {
  id: string;
  name: string;
  slug: string;
  category: string;
  duration: string;
  images: string[];
};

// Client Component for ServiceImage with error handling
function ServiceImage({ service, className }: { service: Service; className?: string }) {
  const imageUrl = service.images?.[0];
  
  if (!imageUrl) {
    return (
      <div className={`bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center ${className}`}>
        <Calendar className="h-8 w-8 text-white" />
      </div>
    );
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    const parent = target.parentElement;
    if (parent) {
      parent.innerHTML = `
        <div class="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
          <svg class="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
        </div>
      `;
    }
  };

  return (
    <div className={`relative rounded-lg overflow-hidden ${className}`}>
      <Image
        src={imageUrl}
        alt={service.name || 'Service image'}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-200"
        onError={handleImageError}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
    </div>
  );
}

export default ServiceImage;