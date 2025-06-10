import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import TextLabel from '@/components/common/TextLabel';
import SubText from '@/components/common/SubText';
import Navbar from '@/components/Navbar';

export default function FirstSection() {
  const [showImageAnimation, setShowImageAnimation] = useState(false);

  useEffect(() => {
    // Add a small delay before showing the image animation
    const timer = setTimeout(() => {
      setShowImageAnimation(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className={`absolute inset-0 hero-image-container ${showImageAnimation ? 'animate' : ''}`}>
        <Image
          src="/images/ilahiya-college.jpeg"
          alt="Campus"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Green Overlay with 45-degree cut */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-green-700 clip-hero" />
      </div>
      
      {/* Content Area */}
      <div className="relative z-10 h-full flex items-center">
        {/* Left Content */}
        <div className="w-[45%] relative z-10 flex items-center px-5 md:px-[90px]">
          <div className="hero-text-animate">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <TextLabel
                text="Welcome to Ilahiya College"
                color="white"
                variant="tag"
                className="bg-white/20 px-4 py-2 rounded-full inline-block"
              />
            </motion.div>
            <Heading
              text={<>Empowering Minds,<br />Shaping Futures</>}
              color="gradient"
              delay={0.2}
            />
            <SubText
              text="Join a community dedicated to academic excellence, innovation, and personal growth. Discover your potential at Ilahiya College."
              color="light"
              size="large"
              className="mb-8"
              delay={0.4}
              maxWidth="500px"
            />
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="primary"
                href="/admission"
                icon={FaArrowRight({ className: "w-4 h-4" })}
              >
                <TextLabel
                  text={<span className="hidden md:inline">Apply Now</span>}
                  color="green"
                  variant="button"
                />
                <TextLabel
                  text={<span className="inline md:hidden">Apply</span>}
                  color="green"
                  variant="button"
                />
              </Button>
              <Button
                variant="secondary"
                href="/academics"
              >
                <TextLabel
                  text={<span className="hidden md:inline">Explore Programs</span>}
                  color="white"
                  variant="button"
                />
                <TextLabel
                  text={<span className="inline md:hidden">Explore</span>}
                  color="white"
                  variant="button"
                />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </section>
  );
} 