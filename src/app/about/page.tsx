"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, Variants, useScroll, useTransform, useInView } from 'framer-motion';

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerChildren: Variants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeInScale: Variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const fadeInLeft: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeIn: Variants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  const listItemVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i
      }
    })
  };

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

      <motion.div 
        className="container mx-auto px-4 py-12 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Hero Section */}
        <ScrollReveal>
          <motion.div 
            className="relative h-[400px] mb-12 rounded-2xl overflow-hidden"
            variants={fadeInUp}
          >
            <Image
              src="/images/ilahiya-college.jpg"
              alt="College Campus"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-950/70 flex items-center justify-center">
              <motion.h1 
                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center"
                variants={fadeInScale}
              >
                About Ilahiya Arts and Science College
              </motion.h1>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* History Section */}
        <ScrollReveal>
          <motion.section 
            className="mb-16 bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:bg-white transition-colors duration-300"
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
              variants={fadeInLeft}
            >
              Our History
            </motion.h2>
            <motion.div 
              className="prose prose-lg max-w-none"
              variants={fadeIn}
            >
              <p className="mb-4 text-gray-700">
                Ilahiya Arts and Science college, Cheliya, Koyilandy, affiliated to the University of Calicut and
                recognised by the Govt of Kerala, is a self financing minority institution. The college started
                functioning on 16 July 2005 in a rented building at Koyilandy town with three courses, BA
                English Literature, BSc Physics and B Com Computer Application.
              </p>
              <p className="mb-4 text-gray-700">
                It was subsequently shifted to its permanent campus at Cheliya, a serene and picturesque spot near Chengottukavu. 
                The site is an ideal one under idyllic surroundings with congenial atmosphere for academic pursuits, the
                place is ideally suited for the growth and development of a higher centre of learning located on
                the west bank of a tributory of Korapuzha, far from the madding crowd, mind numbing
                commotion and confusion of the nearby Koyilandy town, in the sylvan setting of a typical
                country side.
              </p>
              <p className="mb-4 text-gray-700">
                The mangroves, the shrubs, the flowers and the lush green around add to the beauty
                of the landscape of the new premises. In the present educational scenario, Ilahiya college has the potential 
                and stature to be one of the premier institutions in and around Koyilandy.
              </p>
            </motion.div>
          </motion.section>
        </ScrollReveal>

        {/* Mission & Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ScrollReveal>
            <motion.section 
              className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:bg-white transition-colors duration-300"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-3xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
                variants={fadeInLeft}
              >
                Our Mission
              </motion.h2>
              <motion.div 
                className="prose prose-lg"
                variants={fadeIn}
              >
                <ul className="list-disc pl-6 text-gray-700">
                  <motion.li variants={listItemVariants} custom={0}>To provide quality education to the educationally and economically backward areas</motion.li>
                  <motion.li variants={listItemVariants} custom={1}>To empower students with knowledge and skills for their professional growth</motion.li>
                  <motion.li variants={listItemVariants} custom={2}>To foster academic excellence through innovative teaching methods</motion.li>
                  <motion.li variants={listItemVariants} custom={3}>To promote inclusive education and cultural diversity</motion.li>
                </ul>
              </motion.div>
            </motion.section>
          </ScrollReveal>

          <ScrollReveal>
            <motion.section 
              className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:bg-white transition-colors duration-300"
              variants={fadeInUp}
            >
              <motion.h2 
                className="text-3xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
                variants={fadeInLeft}
              >
                Our Vision
              </motion.h2>
              <motion.div 
                className="prose prose-lg"
                variants={fadeIn}
              >
                <ul className="list-disc pl-6 text-gray-700">
                  <motion.li variants={listItemVariants} custom={0}>To be one of the premier educational institutions in the region</motion.li>
                  <motion.li variants={listItemVariants} custom={1}>To create opportunities for the coming generation</motion.li>
                  <motion.li variants={listItemVariants} custom={2}>To foster academic excellence and personal growth</motion.li>
                  <motion.li variants={listItemVariants} custom={3}>To develop responsible citizens with strong ethical values</motion.li>
                </ul>
              </motion.div>
            </motion.section>
          </ScrollReveal>
        </div>

        {/* Management Section */}
        <ScrollReveal>
          <motion.section 
            className="mb-16 bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:bg-white transition-colors duration-300"
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
              variants={fadeInLeft}
            >
              Management
            </motion.h2>
            <motion.div 
              className="prose prose-lg max-w-none"
              variants={fadeIn}
            >
              <p className="mb-4 text-gray-700">
                Ilahiya Arts and Science college is run by the Al Huda Islamic Cultural Establishment and Ainul
                Huda Orphanage Committee, Kappad near Kozhikode. The management has more than a dozen
                educational Institutions to its credit, of which Ilahiya college is the flagship.
              </p>
              <p className="mb-4 text-gray-700">
                The two gentlemen at the helm of affairs of this group of institutions are Mr P.K.K Bava, a former PWD Minister of
                Kerala and Mr M Ahamed Koya Haji, an enterprising business man of Kappad. A host of others
                are there to support them in this noble mission.
              </p>
              <p className="text-gray-700">
                At present Dr K Muhammad Basheer, former HOD Chemistry, Farooq college, Calicut is headed
                as the Principal of Ilahiya Arts and science college by eminent and well experienced staff.
              </p>
            </motion.div>
          </motion.section>
        </ScrollReveal>

        {/* Facilities & Activities Section */}
        <ScrollReveal>
          <motion.section 
            className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:bg-white transition-colors duration-300"
            variants={fadeInUp}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
              variants={fadeInLeft}
            >
              Facilities & Activities
            </motion.h2>
            <motion.div 
              className="prose prose-lg max-w-none"
              variants={fadeIn}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <motion.h3 
                    className="text-xl font-semibold mb-4 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
                    variants={fadeInLeft}
                  >
                    Key Facilities
                  </motion.h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    {['Well-maintained Library', 'Well-equipped Science Lab', 'Modern Computer Lab', 'Spacious Classrooms', 'Sports Facilities'].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={listItemVariants}
                        custom={index}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <motion.h3 
                    className="text-xl font-semibold mb-4 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
                    variants={fadeInLeft}
                  >
                    Student Activities
                  </motion.h3>
                  <ul className="list-disc pl-6 text-gray-700">
                    {['National Service Scheme (NSS)', 'Women\'s Cell', 'ED Club', 'Cultural Activities', 'Sports Events'].map((item, index) => (
                      <motion.li 
                        key={index}
                        variants={listItemVariants}
                        custom={index}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </ScrollReveal>
      </motion.div>
    </main>
  );
} 