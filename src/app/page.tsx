 'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGraduationCap, FaUsers, FaChalkboardTeacher, FaBook, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import ScrollReveal from '@/components/ScrollReveal';
import HoverAnimation from '@/components/HoverAnimation';
import LoadingAnimation from '@/components/LoadingAnimation';
import Navbar from '@/components/Navbar';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import { useRouter } from 'next/navigation';

const CountUp = ({ end, duration = 2 }: { end : number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
        setHasAnimated(true);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView, hasAnimated]);

  return <span ref={ref}>{count}</span>;
};

const stats = [
  { number: 1000, label: 'Students', icon: <FaUsers className="text-4xl text-primary" /> },
  { number: 50, label: 'Faculty', icon: <FaChalkboardTeacher className="text-4xl text-primary" /> },
  { number: 7, label: 'Programs', icon: <FaGraduationCap className="text-4xl text-primary" /> },
  { number: 18, label: 'Years of Excellence', icon: <FaBook className="text-4xl text-primary" /> },
];

const courses = [
  { name: 'BA English Literature', type: 'UG' },
  { name: 'BCom Computer Application', type: 'UG' },
  { name: 'BCom Finance', type: 'UG' },
  { name: 'BCA', type: 'UG' },
  { name: 'BBA Marketing', type: 'UG' },
  { name: 'BA Sociology', type: 'UG' },
  { name: 'BSc Psychology', type: 'UG' },
];

const featuredEvents = [
  {
    date: 'OCT 20, 2024',
    category: 'Seminar',
    title: 'International Conference on Environmental Studies',
    description: 'Join us for a groundbreaking conference on environmental sustainability and climate action.'
  },
  {
    date: 'NOV 15, 2024',
    category: 'Cultural',
    title: 'Annual Arts Festival',
    description: 'Experience the vibrant cultural diversity through performances, exhibitions, and workshops.'
  },
  {
    date: 'DEC 01, 2024',
    category: 'Academic',
    title: 'Research Symposium',
    description: 'Showcase of innovative research projects by our faculty and students.'
  }
];

const galleryImages = [
  { src: '/images/mock/college.jpg', title: 'Campus View', description: 'Our beautiful campus surrounded by nature' },
  { src: '/images/mock/library.jpg', title: 'Library', description: 'Modern library with extensive collection' },
  { src: '/images/mock/classroom.jpg', title: 'Modern Classrooms', description: 'Well-equipped smart classrooms' },
  { src: '/images/mock/convocation.webp', title: 'Convocation', description: 'Celebrating student achievements' }
];

const programsByType = {
  'Computer & Commerce': [
    {
      title: "BCA - Bachelor of Computer Applications",
      description: "Three-year program focusing on computer applications and software development. Learn programming and latest technologies for IT careers.",
      department: "Computer"
    },
    {
      title: "BCom Finance",
      description: "Comprehensive program in financial management, accounting, and business economics for banking and finance careers.",
      department: "Commerce"
    },
    {
      title: "BCom Computer Application",
      description: "Blend of commerce education and computer applications for modern business environment.",
      department: "Commerce"
    }
  ],
  'Arts & Management': [
    {
      title: "BA English Language & Literature",
      description: "Study classic and contemporary literature while developing critical thinking and communication skills in this three-year program.",
      department: "English"
    },
    {
      title: "BBA - Bachelor of Business Administration",
      description: "Learn management principles, marketing, and entrepreneurship for today's dynamic business world.",
      department: "Management"
    },
    {
      title: "BA Sociology",
      description: "Study human society and social behavior. Prepare for careers in social services and research.",
      department: "Sociology"
    }
  ]
};

const ProgramCard = ({ title, type, description, department }: { title: string; type: string; description: string; department: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const courseId = title.split(' ')[0];
    router.push(`/programmes#${courseId}`);
  };

  return (
    <motion.div 
      className="bg-green-100 rounded-[20px] p-12 cursor-pointer group h-[350px] w-full border-2 border-black flex flex-col justify-between relative overflow-hidden transform-gpu backface-hidden"
      style={{
        transformStyle: "preserve-3d",
      }}
      initial={{ scale: 1, y: 0 }}
      whileHover={{ 
        scale: 1.02,
        y: -10,
        transition: { 
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1]
        }
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <h3 className="text-[1.75rem] font-extralight text-black mb-4 transition-colors duration-700 group-hover:text-white leading-tight tracking-tight">
          {title}
        </h3>
      </div>
      <div className="flex items-center justify-between mt-8 relative z-10">
        <span className="border-2 border-black rounded-full px-6 py-2 text-sm font-light tracking-wider uppercase text-black transition-all duration-700 group-hover:text-white group-hover:border-white">/{department}</span>
        <motion.div 
          className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-black transition-all duration-700 group-hover:border-white cursor-pointer"
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.4 }
          }}
          onClick={handleArrowClick}
        >
          <FaArrowRight className="text-black group-hover:text-white transition-colors duration-700" />
        </motion.div>
      </div>
      <motion.div
        className="absolute inset-0 bg-black rounded-full"
        initial={{ 
          scale: 0,
          x: "50%",
          y: "50%",
          opacity: 0
        }}
        animate={{ 
          scale: isHovered ? 10 : 0,
          opacity: isHovered ? 1 : 0,
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
        style={{
          transformOrigin: "center center"
        }}
      />
    </motion.div>
  );
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showImageAnimation, setShowImageAnimation] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const galleryRef = useRef(null);
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<number, boolean>>(
    galleryImages.reduce((acc, _, index) => ({ ...acc, [index]: true }), {})
  );
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [imageScales, setImageScales] = useState<Record<number, number>>({});
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bookAnimation = require('/public/images/book.json');
  const [selectedProgram, setSelectedProgram] = useState<'Computer & Commerce' | 'Arts & Management'>('Computer & Commerce');

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress as a value between 0 and 1
      const scrollProgress = scrolled / (docHeight - windowHeight);
      setScrollY(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Verify image paths and types
    galleryImages.forEach((img, index) => {
      const image = new window.Image();
      image.src = img.src;
      image.onload = () => {
        console.log(`Pre-loaded image ${index}:`, img.src);
        setImageLoadingStates(prev => ({ ...prev, [index]: false }));
      };
      image.onerror = () => {
        console.error(`Failed to pre-load image ${index}:`, img.src);
        setImageErrors(prev => ({ ...prev, [index]: true }));
        setImageLoadingStates(prev => ({ ...prev, [index]: false }));
      };
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowImageAnimation(true);
      }, 100);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const options = {
      threshold: Array.from({ length: 100 }, (_, i) => i / 100)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLDivElement;
        const index = imageRefs.current.findIndex(ref => ref === target);
        if (index !== -1) {
          const scale = 1 + (entry.intersectionRatio * 0.3);
          setImageScales(prev => ({
            ...prev,
            [index]: scale
          }));
        }
      });
    }, options);

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = (index: number) => {
    console.log(`Image ${index} loaded successfully:`, galleryImages[index].src);
    setImageLoadingStates(prev => ({ ...prev, [index]: false }));
    setImageErrors(prev => ({ ...prev, [index]: false }));
  };

  const handleImageError = (index: number) => {
    console.error(`Error loading image ${index}:`, galleryImages[index].src);
    setImageLoadingStates(prev => ({ ...prev, [index]: false }));
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <>
      {isLoading && <LoadingAnimation />}
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
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
          <div className="absolute inset-0 flex">
            {/* Left Content */}
            <div className="w-[45%] relative z-10 flex items-center pl-12 pr-16">
              <div className="text-white">
                <motion.span
                  className="inline-block text-sm font-light uppercase tracking-wider mb-4 bg-white/20 px-4 py-2 rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Welcome to Ilahiya College
                </motion.span>
                <motion.h1 
                  className="text-[5rem] font-extralight mb-6 leading-[1.1] hero-text bg-gradient-to-r from-green-50 to-white bg-clip-text text-transparent tracking-[-0.02em] uppercase"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Empowering Minds,<br />
                  Shaping Futures
                </motion.h1>
                <motion.p 
                  className="text-xl font-light mb-8 text-green-50/90 max-w-lg hero-text leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Join a community dedicated to academic excellence, innovation, and personal growth. Discover your potential at Ilahiya College.
                </motion.p>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link 
                    href="/admission"
                    className="bg-white text-green-700 px-8 py-4 rounded-lg font-light hover:bg-white/90 transition-colors inline-flex items-center gap-2 shadow-lg tracking-wide uppercase text-sm"
                  >
                    Apply Now <FaArrowRight />
                  </Link>
                  <Link 
                    href="/academics"
                    className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-lg font-light hover:bg-white/20 transition-colors border border-white/20 tracking-wide uppercase text-sm"
                  >
                    Explore Programs
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <Navbar />
        </section>

        {/* Gallery Section */}
        <section 
          ref={galleryRef}
          className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-green-700 flex items-center py-20 relative overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="lg:col-start-2">
                <motion.div
                  initial={{ 
                    opacity: 0,
                    y: 100,
                    scale: 0.95
                  }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 1.8,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                >
                  <motion.h2 
                    className="text-[4.5rem] font-light text-white mb-4 tracking-[-0.02em] leading-[1.1] mr-[10cm]"
                  >
                    EDUCATION IS NOT
                    <br />
                    PREPARATION FOR LIFE;
                    <br />
                    EDUCATION IS LIFE
                    <br />
                    ITSELF
                  </motion.h2>
                </motion.div>
              </div>
              <div className="lg:col-start-1 lg:row-start-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2 }}
                  className="w-full max-w-[500px] mx-auto"
                >
                  <Lottie 
                    animationData={bookAnimation} 
                    loop={true}
                    className="w-full h-full"
                  />
                </motion.div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`${index === 0 ? 'col-span-2' : 'col-span-1'}`}
                  initial={{ 
                    opacity: 0,
                    x: image.title === 'Modern Classrooms' ? -200 : 
                       image.title === 'Library' ? 200 : 0,
                    scale: image.title === 'Modern Classrooms' || image.title === 'Library' ? 1 : 0.95
                  }}
                  whileInView={{ 
                    opacity: 1,
                    x: 0,
                    scale: 1
                  }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.3,
                    ease: [0.25, 0.1, 0.25, 1],
                    opacity: {
                      duration: 1.5,
                      ease: [0.25, 0.1, 0.25, 1]
                    },
                    scale: {
                      duration: 1.5,
                      ease: [0.25, 0.1, 0.25, 1]
                    }
                  }}
                >
                  <motion.div 
                    ref={el => {
                      imageRefs.current[index] = el;
                    }}
                    className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transform-gpu"
                  >
                    <div 
                      className="absolute inset-0 transform-gpu will-change-transform"
                      style={{
                        transform: `scale(${imageScales[index] || 1})`,
                        transition: 'transform 0.2s ease-out'
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover"
                        onError={(e) => setImageErrors(prev => ({ ...prev, [index]: true }))}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-white font-bold text-2xl mb-2">{image.title}</h3>
                        <p className="text-white/90 text-lg">{image.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="flex-1">
          {/* Programs Section */}
          <section id="programs" className="py-24 bg-green-100">
            <div className="container mx-auto px-4">
              {/* Academic Programs Header */}
              <div className="flex justify-center mb-8">
                <div className="max-w-7xl w-full">
                  <ScrollReveal>
                    <h2 className="text-[4.5rem] font-extralight text-black mb-3 tracking-[-0.02em] leading-[1.1] uppercase">
                      ACADEMIC PROGRAMS
                    </h2>
                    <p className="text-black/70 mb-8 text-lg font-light leading-relaxed max-w-[600px]">
                      Explore University's 10+ courses across various specialisations that provoke intellectual and intuitive learning among students.
                    </p>
                  </ScrollReveal>
                </div>
              </div>

              {/* Program Type Navigation */}
              <div className="flex justify-center mb-16">
                <div className="max-w-7xl w-full">
                  <div className="flex justify-between items-start gap-8">
                    <button 
                      onClick={() => setSelectedProgram('Computer & Commerce')}
                      className={`transition-colors text-left ${selectedProgram === 'Computer & Commerce' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <div className="text-[2rem] font-extralight mb-2 leading-none tracking-tight">/Computer & Commerce</div>
                      <div className="text-sm font-light text-gray-500 tracking-wide uppercase">Department</div>
                    </button>
                    <button 
                      onClick={() => setSelectedProgram('Arts & Management')}
                      className={`transition-colors text-left ${selectedProgram === 'Arts & Management' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <div className="text-[2rem] font-extralight mb-2 leading-none tracking-tight">/Arts & Management</div>
                      <div className="text-sm font-light text-gray-500 tracking-wide uppercase">Department</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Program Cards */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedProgram}
                  className="grid gap-12 mx-auto md:grid-cols-3 max-w-7xl"
                  initial={{ rotateY: -90, opacity: 0, transformOrigin: "left" }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                    opacity: { duration: 0.3 }
                  }}
                >
                  {programsByType[selectedProgram].map((dept, index) => (
                    <ScrollReveal key={index} delay={index * 0.2}>
                      <motion.div 
                        className="w-full flex justify-center"
                        initial={{ rotateY: -90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      >
                        <div className="w-[350px] perspective-1000">
                          <ProgramCard 
                            title={dept.title}
                            type={selectedProgram}
                            description={dept.description}
                            department={dept.department}
                          />
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <h2 className="text-[4.5rem] font-extralight text-center text-white mb-8 tracking-[-0.02em] uppercase leading-[1.1]">
                  About Our College
                </h2>
                <div className="max-w-4xl mx-auto text-center text-white">
                  <p className="mb-6 text-lg font-light leading-relaxed">
                    Established in 2005, Ilahiya Arts and Science College is a self-financing minority institution 
                    located in the serene surroundings of Cheliya, near Chengottukavu. Our campus provides an 
                    ideal environment for academic pursuits, situated on the west bank of a tributary of Korapuzha.
                  </p>
                  <div className="flex justify-center gap-4">
                    <Link 
                      href="/about" 
                      className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-light hover:bg-green-500 transition duration-300 tracking-wide uppercase text-sm"
                    >
                      Learn More
                    </Link>
                    <Link 
                      href="/iqac" 
                      className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg font-light hover:bg-green-50 transition duration-300 tracking-wide uppercase text-sm"
                    >
                      Visit IQAC
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {stats.map((stat, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <motion.div 
                      className="text-center p-8 bg-white rounded-xl shadow-lg hover-lift flex flex-col items-center justify-center h-[200px] relative overflow-hidden group w-full"
                      whileHover={{ y: -5 }}
                    >
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="mb-4 relative z-10"
                      >
                        <div className="text-green-700 transform transition-transform group-hover:scale-110 duration-300">
                          {stat.icon}
                        </div>
                      </motion.div>
                      <motion.h3 className="text-5xl font-extralight text-gray-800 mb-2 relative z-10 tracking-tight">
                        <CountUp end={stat.number} />
                        {typeof stat.number === 'number' ? 
                          <span className="text-green-700">+</span> 
                        : ''}
                      </motion.h3>
                      <motion.p className="text-gray-600 font-light text-lg relative z-10 tracking-wide uppercase">
                        {stat.label}
                      </motion.p>
                      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Events */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <h2 className="text-[4.5rem] font-extralight text-center text-gray-800 mb-12 tracking-[-0.02em] uppercase leading-[1.1]">
                  Recent and Upcoming Events
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-8">
                {featuredEvents.map((event, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <HoverAnimation>
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-[320px] flex flex-col">
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-4">
                            <motion.div 
                              className="text-sm text-green-800 font-light tracking-wide"
                              whileHover={{ scale: 1.05 }}
                            >
                              {event.date}
                            </motion.div>
                            <motion.div 
                              className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-light tracking-wide uppercase"
                              whileHover={{ backgroundColor: "#dcfce7" }}
                            >
                              {event.category}
                            </motion.div>
                          </div>
                          <h3 className="text-[1.75rem] font-extralight text-gray-800 mb-3 line-clamp-2 tracking-tight">{event.title}</h3>
                          <p className="text-gray-600 flex-1 line-clamp-3 font-light leading-relaxed">{event.description}</p>
                          <motion.div
                            className="mt-4"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Link href="/events" className="text-green-800 hover:text-green-600 font-light tracking-wide uppercase text-sm inline-flex items-center">
                              Learn More <span className="ml-1">→</span>
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </HoverAnimation>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          {/* News Section */}
          <section className="py-20 bg-green-950">
            <div className="container mx-auto px-4">
              <ScrollReveal>
                <h2 className="text-[4.5rem] font-extralight text-center text-white mb-12 tracking-[-0.02em] uppercase leading-[1.1]">
                  News & Articles
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((_, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <HoverAnimation scale={1.03}>
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <motion.div 
                          className="h-48 bg-gray-200"
                          whileHover={{
                            backgroundColor: "#f3f4f6",
                            transition: { duration: 0.3 }
                          }}
                        />
                        <div className="p-6">
                          <h3 className="text-[1.75rem] font-extralight text-gray-800 mb-2 tracking-tight">
                            {index === 0 && "New Research Center Inauguration"}
                            {index === 1 && "Student Achievement Awards"}
                            {index === 2 && "Community Outreach Program"}
                          </h3>
                          <p className="text-gray-600 font-light leading-relaxed">
                            {index === 0 && "State-of-the-art research facility opens its doors to students and faculty..."}
                            {index === 1 && "Our students continue to excel in national and international competitions..."}
                            {index === 2 && "Making a difference in our local community through education and service..."}
                          </p>
                        </div>
                      </div>
                    </HoverAnimation>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          
        </div>
      </div>
    </>
  );
} 