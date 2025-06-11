"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Heading from '@/components/common/Heading';
import TextLabel from '@/components/common/TextLabel';
import SubText from '@/components/common/SubText';
import SubHeading from '@/components/common/SubHeading';

// Add FacilityCard component
const FacilityCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-green-100 rounded-[20px] p-8 cursor-pointer group h-full w-full border-2 border-black flex flex-col justify-between relative overflow-hidden transform-gpu backface-hidden"
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
        <div className="text-4xl mb-4 transition-colors duration-700 group-hover:text-white" role="img" aria-label={title}>
          {icon}
        </div>
        <SubHeading
          text={title}
          color="black"
          className="mb-2 transition-colors duration-700 group-hover:text-white"
        />
        <SubText
          text={description}
          color="black"
          size="small"
          className="transition-colors duration-700 group-hover:text-white"
        />
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

export default function About() {
  return (
    <main className="min-h-screen bg-black" role="main">
      <header className="relative h-screen flex items-center justify-center overflow-hidden" role="banner">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/ilahiya-college.jpg"
            alt="Ilahiya College Campus - A panoramic view of our educational institution"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Green Overlay with 45-degree cut */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-green-700 clip-hero" />
        </div>
        
        <div className="container mx-auto px-4 text-center text-black relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <TextLabel
              text="About Our Institution"
              color="white"
              variant="tag"
              className="bg-white/20 px-4 py-2 rounded-full inline-block"
            />
          </motion.div>
          <h1 className="sr-only">About Ilahiya College - Legacy of Excellence in Education</h1>
          <Heading
            text={<>Discover Our<br />Legacy of Excellence</>}
            color="gradient"
            delay={0.2}
          />
          <SubText
            text="A journey of educational excellence since 2005, shaping minds and building futures."
            color="light"
            size="large"
            className="mb-8"
            delay={0.4}
            maxWidth="600px"
          />
        </div>
      </header>

      {/* History Section with Timeline */}
      <section 
        className="py-24 bg-gradient-to-b from-green-800 via-green-700 to-green-600" 
        aria-labelledby="history-section"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 id="history-section" className="sr-only">Our History and Journey</h2>
            <Heading
              text="Our Journey"
              color="white"
              className="mb-4"
            />
            <SubHeading
              text="Growing Stronger Together"
              color="white"
              className="mb-6 w-full"
            />
            <SubText
              text="From humble beginnings to becoming a premier institution"
              color="white"
              size="medium"
              className="max-w-2xl mx-auto"
            />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20"></div>
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-black via-black to-transparent"
                initial={{ height: "0%" }}
                whileInView={{ height: "100%" }}
                viewport={{ 
                  once: true,
                  amount: "all",
                  margin: "0px 0px -50% 0px"
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Timeline Items */}
              <TimelineItem 
                year="2005"
                title="Foundation"
                description="Started with three courses in a rented building at Koyilandy town"
                isLeft={true}
              />
              <TimelineItem 
                year="2006"
                title="New Campus"
                description="Shifted to permanent campus at Cheliya, near Chengottukavu"
                isLeft={false}
              />
              <TimelineItem 
                year="Present"
                title="Growth & Excellence"
                description="Emerged as one of the premier institutions in Koyilandy"
                isLeft={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section 
        className="py-24 bg-gray-100" 
        aria-labelledby="mission-vision-section"
      >
        <div className="container mx-auto px-4">
          <h2 id="mission-vision-section" className="sr-only">Our Mission and Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <article className="bg-white p-12 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <SubHeading
                text="Our Mission"
                color="green"
                className="mb-4"
              />
              <ul className="space-y-4 text-gray-900" role="list">
                {[
                  "Provide quality education to backward areas",
                  "Empower students with knowledge and skills",
                  "Foster academic excellence",
                  "Promote inclusive education"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-3">•</span>
                    <SubText
                      text={item}
                      color="black"
                      size="medium"
                    />
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-black p-12 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <SubHeading
                text="Our Vision"
                color="green"
                className="mb-4"
              />
              <ul className="space-y-4" role="list">
                {[
                  "Be a premier educational institution",
                  "Create opportunities for future generations",
                  "Foster academic excellence",
                  "Develop responsible citizens"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-3">•</span>
                    <SubText
                      text={item}
                      color="light"
                      size="medium"
                    />
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section 
        className="py-24 bg-green-100" 
        aria-labelledby="facilities-section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="facilities-section" className="sr-only">Our Facilities</h2>
            <Heading
              text="Our Facilities"
              className="mb-4"
            />
            <SubText
              text="Modern facilities designed to enhance your learning experience"
              color="black"
              className="max-w-2xl mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              // First row (items 0-2)
              ...([
                {
                  title: "Modern Library",
                  icon: "📚",
                  description: "Well-maintained library with extensive collection"
                },
                {
                  title: "Science Labs",
                  icon: "🔬",
                  description: "State-of-the-art laboratories for practical learning"
                },
                {
                  title: "Computer Lab",
                  icon: "💻",
                  description: "Modern computer facilities with latest software"
                }
              ].map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ x: "100%", opacity: 0 }}
                  whileInView={{ 
                    x: 0, 
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: index * 0.2
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <FacilityCard
                    icon={facility.icon}
                    title={facility.title}
                    description={facility.description}
                  />
                </motion.div>
              ))),
              // Second row (items 3-5)
              ...([
                {
                  title: "Sports Complex",
                  icon: "🏃",
                  description: "Comprehensive sports and fitness facilities"
                },
                {
                  title: "Smart Classrooms",
                  icon: "🎓",
                  description: "Technology-enabled learning spaces"
                },
                {
                  title: "Cultural Center",
                  icon: "🎭",
                  description: "Space for artistic and cultural activities"
                }
              ].map((facility, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ 
                    x: 0, 
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: index * 0.2
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <FacilityCard
                    icon={facility.icon}
                    title={facility.title}
                    description={facility.description}
                  />
                </motion.div>
              )))
            ]}
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section 
        className="py-24 bg-[#F5F5F5]" 
        aria-labelledby="management-section"
      >
        <div className="container mx-auto px-4">
          <motion.article 
            className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-lg"
            initial={{ 
              y: 100,
              opacity: 0
            }}
            whileInView={{ 
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
                duration: 1
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 id="management-section" className="sr-only">Our Management</h2>
            <TextLabel
              text="Management"
              color="green"
              variant="default"
              className="text-center mb-4"
            />
            <Heading
              text="Leadership & Vision"
              color="black"
              className="text-center mb-8"
            />
            <div className="prose prose-lg max-w-none">
              <p className="mb-6">
                Ilahiya Arts and Science college is run by the Al Huda Islamic Cultural Establishment and Ainul
                Huda Orphanage Committee, Kappad near Kozhikode. The management has more than a dozen
                educational Institutions to its credit, of which Ilahiya college is the flagship.
              </p>
              <p className="mb-6">
                The two gentlemen at the helm of affairs of this group of institutions are Mr P.K.K Bava, a former PWD Minister of
                Kerala and Mr M Ahamed Koya Haji, an enterprising business man of Kappad.
              </p>
              <p>
                At present Dr K Muhammad Basheer, former HOD Chemistry, Farooq college, Calicut is headed
                as the Principal of Ilahiya Arts and science college by eminent and well experienced staff.
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}

// Timeline Item Component
const TimelineItem = ({ year, title, description, isLeft }: { 
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}) => {
  return (
    <div className={`flex justify-between items-center w-full mb-16 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`w-5/12 ${isLeft ? 'text-right' : 'text-left'}`}>
        <motion.div 
          className={`p-8 rounded-3xl shadow-lg ${isLeft ? 'mr-8' : 'ml-8'}`}
          initial={{ 
            scale: 0.95,
            backgroundColor: "#ffffff",
          }}
          whileInView={{ 
            scale: 1,
            backgroundColor: "#000000",
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span 
            className="text-green-600 text-xl font-bold block"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ 
              y: 0, 
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
          >
            {year}
          </motion.span>
          <motion.h3 
            className="text-2xl font-bold mt-2 mb-4"
            initial={{ 
              y: 20, 
              opacity: 0,
              color: "#000000"
            }}
            whileInView={{ 
              y: 0, 
              opacity: 1,
              color: "#ffffff",
              transition: {
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h3>
          <motion.p 
            initial={{ 
              y: 20, 
              opacity: 0,
              color: "#4B5563"
            }}
            whileInView={{ 
              y: 0, 
              opacity: 1,
              color: "#ffffff",
              transition: {
                duration: 0.5,
                delay: 0.4,
                ease: "easeOut"
              }
            }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
      <div className="w-2/12 flex justify-center">
        <motion.div 
          className="w-4 h-4 bg-green-300 rounded-full"
          initial={{ scale: 0.5, opacity: 0.2 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut"
          }}
        />
      </div>
      <div className="w-5/12"></div>
    </div>
  );
}; 