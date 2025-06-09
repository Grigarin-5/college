 'use client'
import React, { useState, useRef } from 'react';
import FirstSection from '@/components/sections/FirstSection';
import SecondSection from '@/components/sections/SecondSection';
import ThirdSection from '@/components/sections/ThirdSection';
import FourthSection from '@/components/sections/FourthSection';
import FifthSection from '@/components/sections/FifthSection';
import LoadingAnimation from '@/components/animations/LoadingAnimation';
import bookAnimation from '../../public/images/book.json';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const galleryRef = useRef(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [imageScales, setImageScales] = useState<Record<number, number>>({});
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<number, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (index: number) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: false }));
    setImageErrors(prev => ({ ...prev, [index]: false }));
  };

  const handleImageError = (index: number) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: false }));
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      {isLoading && <LoadingAnimation />}
      <div className="flex flex-col min-h-screen">
        <FirstSection />
        
        <SecondSection 
          galleryRef={galleryRef}
          imageRefs={imageRefs}
          imageScales={imageScales}
          bookAnimation={bookAnimation}
          imageLoadingStates={imageLoadingStates}
          imageErrors={imageErrors}
          handleImageLoad={handleImageLoad}
          handleImageError={handleImageError}
        />

        <ThirdSection />
        
        <FourthSection />
        
        <FifthSection />
      </div>
    </>
  );
} 
