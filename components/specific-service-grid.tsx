'use client';

import { ServiceCard } from './service-card';
import { Service } from '@/lib/supabase/services';

export function SpecificServiceGrid({services}:{services:Service[]}) {
  return (
    <div className="space-y-6 md:px-6 px-2">
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {services.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No services found in this category.</p>
        </div>
      )}
    </div>
  );
}
