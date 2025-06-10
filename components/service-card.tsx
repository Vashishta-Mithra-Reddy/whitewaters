'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/lib/supabase/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={service.images?.[0] || '/placeholder-adventure.jpg'}
          alt={service.name}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-2 right-2 capitalize">
          {service.difficulty_level}
        </Badge>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{service.name}</CardTitle>
            <CardDescription className="capitalize text-blue-600">
              {service.category}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">
              ₹{service.price}
            </div>
            <div className="text-sm text-muted-foreground">per person</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {service.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {service.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            Max {service.max_participants}
          </div>
        </div>
        <Button asChild className="w-full" size={"sm"}>
          <Link href={`/services/${service.slug}`}>
            View Details & Book
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}