"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import ScrollAnimation from '@/components/animations/ScrollAnimation';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
  aspectRatio: 'portrait' | 'landscape' | 'square';
}

// Function to format image title
const formatImageTitle = (filename: string): string => {
  // Remove file extension and replace dashes/underscores with spaces
  const baseName = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
  
  // Remove date patterns and clean up the title
  return baseName
    .replace(/IMG[-\s]?\d{8}[-\s]?WA\d+/i, "") // Remove WhatsApp image patterns
    .replace(/NSS\s+\d{4}-\d{4}\s+\d+/i, "NSS") // Clean NSS patterns
    .replace(/\d+/g, "") // Remove remaining numbers
    .trim()
    .replace(/^\s*$/, "College Event") // Default title if empty
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

// Gallery images data
const galleryImages: GalleryImage[] = [
  {
    id: "ilahiya",
    src: "/images/gallery/all/Ilahiya.jpg",
    title: "Ilahiya College",
    description: "Main campus view",
    width: 2,
    height: 1,
    aspectRatio: 'landscape'
  },
  {
    id: "nss-2023",
    src: "/images/gallery/all/NSS  2023-2025 20250524_174031.jpg",
    title: "NSS Activities",
    description: "National Service Scheme event",
    width: 1,
    height: 1,
    aspectRatio: 'square'
  },
  {
    id: "ram06021",
    src: "/images/gallery/all/RAM06021.JPG",
    title: "Campus Life",
    description: "Student activities on campus",
    width: 2,
    height: 2,
    aspectRatio: 'landscape'
  },
  {
    id: "img-8198",
    src: "/images/gallery/all/IMG_8198.JPG",
    title: "College Event",
    description: "Special gathering at college",
    width: 1,
    height: 2,
    aspectRatio: 'portrait'
  },
  // Add all WhatsApp images with dynamic sizing
  ...([
    'IMG-20240830-WA0025.jpg',
    'IMG-20250524-WA0109.jpg',
    'IMG-20250524-WA0033.jpg',
    'IMG-20250524-WA0093.jpg',
    'IMG-20250524-WA0101.jpg',
    'IMG-20250524-WA0091.jpg',
    'IMG-20250524-WA0020.jpg',
    'IMG-20250524-WA0022.jpg',
    'IMG-20250524-WA0040.jpg',
    'IMG-20250521-WA0000.jpg',
    'IMG-20240926-WA0041.jpg',
    'IMG-20241221-WA0066.jpg',
    'IMG-20231004-WA0015.jpg',
    'IMG-20240101-WA0322.jpg',
    'IMG-20240102-WA0014.jpg',
    'IMG-20240203-WA0188.jpg',
  ].map((filename, index) => ({
    id: filename.replace('.jpg', '').toLowerCase(),
    src: `/images/gallery/all/${filename}`,
    title: formatImageTitle(filename),
    description: "College memories and events",
    width: Math.random() > 0.7 ? 2 : 1, // 30% chance of being wide
    height: Math.random() > 0.8 ? 2 : 1, // 20% chance of being tall
    aspectRatio: Math.random() > 0.5 ? 'landscape' as const : 'portrait' as const
  })))
];

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0, 1]
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0, 1]
    }
  }
};

const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    }
  }
};

const scatterVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.5,
    y: 0
  },
  scatter: (custom: { x: number; y: number; delay: number }) => ({
    opacity: 1,
    scale: 1,
    x: custom.x,
    y: custom.y,
    transition: {
      duration: 1.2,
      delay: custom.delay,
      ease: [0.25, 1, 0.5, 1]
    }
  }),
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function Gallery() {
  const [isScattered, setIsScattered] = useState(true);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    // After initial scatter, settle the images into grid
    const timer = setTimeout(() => {
      setIsScattered(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Function to generate random scatter positions
  const getScatterPosition = (index: number) => {
    const radius = Math.min(window.innerWidth, window.innerHeight) * 0.3;
    const angle = (index / galleryImages.length) * Math.PI * 2;
    return {
      x: Math.cos(angle) * radius * (Math.random() + 0.5),
      y: Math.sin(angle) * radius * (Math.random() + 0.5),
      delay: index * 0.05
    };
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[1800px] mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Gallery</h1>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl">
            Explore our collection of memorable moments and achievements captured through the lens
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="wait">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                custom={getScatterPosition(index)}
                variants={scatterVariants}
                initial="initial"
                animate={isScattered ? "scatter" : "visible"}
                className="relative"
              >
                <motion.div
                  whileHover="hover"
                  className="relative group"
                  onHoverStart={() => setHoveredImage(image.id)}
                  onHoverEnd={() => setHoveredImage(null)}
                >
                  <div className={`relative w-full rounded-2xl overflow-hidden
                    ${image.aspectRatio === 'portrait' ? 'pb-[140%]' : 'pb-[75%]'}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className={`object-cover transition-all duration-700
                        ${image.aspectRatio === 'portrait' ? 'object-top' : 'object-center'}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <motion.div 
                      variants={overlayVariants}
                      initial="hidden"
                      animate={hoveredImage === image.id ? "visible" : "hidden"}
                      className="absolute inset-0 bg-black/20 transition-opacity"
                    />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 space-y-2"
                  >
                    <h3 className="text-lg font-medium text-gray-900">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.description}</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
} 