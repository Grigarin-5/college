"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categories = [
  {
    id: 'env',
    title: 'Environmental Day',
    description: 'Celebrating our commitment to environmental conservation',
    imageCount: 3,
    extension: 'jpg'
  },
  {
    id: 'clean',
    title: 'Beach Clean Up Drive',
    description: 'Making our beaches cleaner, one step at a time',
    imageCount: 5,
    extension: 'jpeg'
  },
  {
    id: 'sports',
    title: 'Sports Day',
    description: 'Celebrating athletic excellence and team spirit',
    imageCount: 3,
    extension: 'jpg'
  },
  {
    id: 'union',
    title: 'College Union Day',
    description: 'Showcasing student leadership and unity',
    imageCount: 1,
    extension: 'jpeg'
  },
  {
    id: 'NAAC',
    title: 'NAAC Visit',
    description: 'Moments from our NAAC accreditation journey',
    imageCount: 3,
    extension: 'jpg'
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.1
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.32, 0.72, 0, 1] // Custom easing for smooth motion
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.8,
      ease: [0.32, 0.72, 0, 1]
    }
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ImageCarousel = ({ category, imageCount, extension }: { category: string, imageCount: number, extension: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [error, setError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-10%" });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (!isHovered && imageCount > 1) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % imageCount);
      }, 5000); // Changed to 5 seconds for better viewing experience
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [imageCount, isHovered]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + imageCount) % imageCount);
  };

  const handleImageError = () => {
    setError(true);
  };

  return (
    <motion.div 
      ref={ref}
      className="relative w-full h-[400px] group rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm
        before:absolute before:inset-0 before:-z-10 before:bg-black/5 before:backdrop-blur-[2px]
        after:absolute after:inset-0 after:-z-20 after:bg-gradient-to-b after:from-black/5 after:to-transparent
        hover:shadow-[0_20px_40px_rgb(0,0,0,0.2)] transition-shadow duration-500"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        boxShadow: "0 8px 30px rgba(0,0,0,0.12)"
      } : { 
        opacity: 0, 
        y: 50,
        boxShadow: "0 0 0 rgba(0,0,0,0)"
      }}
      transition={{ 
        duration: 0.5,
        ease: [0.1, 0.4, 0, 1],
        delay: 0.1
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            {!error ? (
              <div className="relative w-full h-full">
                <Image
                  src={`/images/gallery/${category}/${currentIndex + 1}.${extension}`}
                  alt={`Gallery image ${currentIndex + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                  onError={handleImageError}
                  priority={currentIndex === 0}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-500">Image not available</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      {imageCount > 1 && (
        <>
          <motion.button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 z-10
              shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300"
            whileHover={{ 
              scale: 1.2,
              backgroundColor: "rgba(255, 255, 255, 0.95)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
          >
            <FaChevronLeft className="text-gray-800 text-xl" />
          </motion.button>
          <motion.button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 z-10
              shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300"
            whileHover={{ 
              scale: 1.2,
              backgroundColor: "rgba(255, 255, 255, 0.95)"
            }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
          >
            <FaChevronRight className="text-gray-800 text-xl" />
          </motion.button>
        </>
      )}

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-3 z-10">
        {Array.from({ length: imageCount }).map((_, index) => (
          <motion.button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.15)] ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.2, boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17
            }}
          />
        ))}
      </div>

      {/* Image Counter */}
      <motion.div 
        className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-white text-sm
          shadow-[0_4px_12px_rgba(0,0,0,0.15)] backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {currentIndex + 1} / {imageCount}
      </motion.div>
    </motion.div>
  );
};

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <main className="min-h-screen relative" ref={containerRef}>
      {/* Background Image with Parallax */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/ilahiya-college.jpg"
          alt="College Background"
          fill
          className="object-cover"
          priority
        />
        <motion.div 
          className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm"
          style={{ opacity }}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1 
          className="text-5xl font-bold text-center text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Gallery
        </motion.h1>

        <div className="space-y-32">
          {categories.map((category, index) => (
            <motion.section
              key={category.id}
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-10%" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="max-w-5xl mx-auto">
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <motion.h2 
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {category.title}
                  </motion.h2>
                  <motion.p 
                    className="text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-10%" }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                  >
                    {category.description}
                  </motion.p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ImageCarousel 
                    category={category.id} 
                    imageCount={category.imageCount}
                    extension={category.extension}
                  />
                </motion.div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
} 