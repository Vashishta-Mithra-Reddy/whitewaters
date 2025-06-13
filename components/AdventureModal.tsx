"use client";
import React, { useState } from 'react';
import { ArrowRight, X, Waves, Ship, Mountain, Trees, MountainSnow, Grid3X3 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';

const AdventureModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();


  const adventures = [
    {
      title: "Kayaking",
      description: "Paddle through serene waters",
      icon: Waves,
      href: "/kayaking",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      title: "Rafting", 
      description: "Thrilling whitewater adventures",
      icon: Ship,
      href: "/rafting",
      gradient: "from-blue-600 to-blue-400"
    },
    {
      title: "Hiking",
      description: "Discover scenic mountain trails",
      icon: Trees,
      href: "/hiking", 
      gradient: "from-green-500 to-emerald-400"
    },
    {
      title: "Trekking",
      description: "Epic multi-day expeditions",
      icon: Mountain,
      href: "/trekking",
      gradient: "from-amber-500 to-orange-400"
    },
    {
      title: "Pilgrimage",
      description: "Spiritual journey experiences",
      icon: MountainSnow,
      href: "/pilgrimage",
      gradient: "from-purple-500 to-pink-400"
    }
  ];

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Original Button */}
      <Button 
        size="lg" 
        onClick={openModal}
      >
        Explore Adventures <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-background rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[95vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300 px-2 py-2">
            {/* Header */}
            <div className="flex items-center justify-between p-6 ">
              <div>
                <h2 className="text-2xl font-bold text-foreground text-start">Choose Your Adventure</h2>
                <p className="text-foreground/50 mt-1">Discover your perfect outdoor experience</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 items-start justify-start"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Adventure Cards Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {adventures.map((adventure) => {
                  const Icon = adventure.icon;
                  return (
                    <div
                      key={adventure.title}
                      className="group relative overflow-hidden rounded-xl bg-gradient-to-br hover:bg-foreground/10 p-4 md:p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-dashed hover:border-transparent"
                      onClick={() => {
                        router.push(adventure.href);
                        closeModal();
                      }}
                    >
                      <div className="flex items-center md:items-start justify-center md:justify-between mb-4 mt-4 md:mt-0">
                        <div className="p-2 bg-foreground/20 backdrop-blur-sm rounded-lg">
                          <Icon className="h-6 w-6 text-foreground" />
                        </div>
                        <ArrowRight className="h-4 w-4 hidden md:flex text-foreground/70 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                      <h3 className="text-base md:text-xl font-semibold text-foreground mb-2">{adventure.title}</h3>
                      <p className="text-foreground/80 text-sm hidden md:flex">{adventure.description}</p>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>

              {/* Services Option */}
              <div className="pt-4">
                <div
                  className="group flex items-center justify-between p-4 bg-background/50 hover:bg-foreground/10 rounded-xl cursor-pointer transition-all duration-200 px-6 border-2 border-dashed hover:border-transparent"
                  onClick={() => {
                    router.push('/services');
                    closeModal();
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-foreground/20 group-hover:bg-foreground/30 rounded-lg transition-colors duration-200">
                      <Grid3X3 className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-start font-semibold text-foreground">All Services</h3>
                      <p className="text-sm text-foreground/50">Quick booking for all adventures</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-foreground/50 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdventureModal;