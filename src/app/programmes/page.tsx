'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProgramsPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [showHighlight, setShowHighlight] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        // First, ensure we're at the top of the page
        window.scrollTo(0, 0);
        
        // Add a brief delay to show the page title and initial content
        setTimeout(() => {
          const element = document.getElementById(hash.slice(1));
          if (element) {
            // Start the scroll animation
            element.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'center' 
            });
            
            // Add highlight effect after scrolling
            setTimeout(() => {
              setShowHighlight(true);
              element.classList.add('highlight-section');
              setTimeout(() => {
                element.classList.remove('highlight-section');
                setShowHighlight(false);
              }, 2000);
            }, 1000); // Wait for scroll to complete
          }
        }, 1500); // Initial delay to show page
      }
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      const style = document.createElement('style');
      style.textContent = `
        @keyframes highlightPulse {
          0% { 
            background-color: rgba(255, 255, 255, 0.8);
            transform: scale(1);
          }
          50% { 
            background-color: rgba(220, 252, 231, 0.95);
            transform: scale(1.02);
          }
          100% { 
            background-color: rgba(255, 255, 255, 0.8);
            transform: scale(1);
          }
        }
        .highlight-section {
          animation: highlightPulse 2s ease-in-out;
          position: relative;
        }
        .highlight-section::after {
          content: '';
          position: absolute;
          inset: -1px;
          border: 2px solid #16a34a;
          border-radius: 8px;
          opacity: 0;
          animation: borderPulse 2s ease-in-out;
        }
        @keyframes borderPulse {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [isClient]);

  const programs = [
    {
      department: 'Dept. of Commerce',
      courses: [
        {
          name: 'BCom Finance',
          minor: 'Entrepreneurship',
          duration: '8 Semester',
          eligibility: 'Plus Two in any Group'
        },
        {
          name: 'BCom Computer Application',
          minor: 'Digital Marketing',
          duration: '8 Semester',
          eligibility: 'Plus Two in any Group'
        }
      ]
    },
    {
      department: 'Dept. of English',
      courses: [
        {
          name: 'BA English Language & Literature',
          minor: [
            'English for Content Creation',
            'English at workspace',
            'Teaching skills in English'
          ],
          duration: '8 Semester',
          eligibility: 'Plus Two in any Group'
        }
      ]
    },
    {
      department: 'Dept. of Computer Application',
      courses: [
        {
          name: 'BCA',
          minor: null,
          duration: '8 Semester',
          eligibility: 'Plus two Science or plus two any stream with mathematics, computer application or computer science as an optional paper'
        }
      ]
    },
    {
      department: 'Dept. of Management',
      courses: [
        {
          name: 'BBA',
          minor: null,
          duration: '8 Semester',
          eligibility: 'Plus Two in any Group'
        }
      ]
    },
    {
      department: 'Dept. of Sociology',
      courses: [
        {
          name: 'BA Sociology',
          minor: [
            'Sociology of mass media',
            'Sociology of political science'
          ],
          duration: '8 Semester',
          eligibility: 'Plus Two in any Group'
        }
      ]
    },
    {
      department: 'Dept. Of Science',
      courses: [
        {
          name: 'BSc Psychology',
          minor: 'Foundation of Behaviour',
          duration: '8 Semester',
          eligibility: 'Plus two Science or plus two any stream with psychology as an optional paper'
        }
      ]
    }
  ];

  const fadeInUp = {
    initial: {
      y: 80,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.33, 1, 0.68, 1]  // Custom easing for smoother motion
      }
    }
  };

  const fadeIn = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    initial: {
      x: -60,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  const slideInRight = {
    initial: {
      x: 60,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/ilahiya-college.jpg"
          alt="College Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            variants={slideInLeft}
          >
            Our Academic Programs
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            variants={slideInRight}
          >
            Explore our diverse range of academic programs designed to shape future leaders
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="space-y-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.1 }}
        >
          {programs.map((dept, index) => (
            <motion.div 
              key={index} 
              id={dept.department.replace(/\s+/g, '-')}
              className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:bg-white/90 transition-colors duration-300"
              variants={fadeInUp}
            >
              <motion.div 
                className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-4"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.8 }}
              >
                <h2 className="text-2xl font-semibold">{dept.department}</h2>
              </motion.div>
              
              <div className="p-6">
                {dept.courses.map((course, courseIndex) => (
                  <motion.div 
                    key={courseIndex} 
                    id={course.name.split(' ')[0]}
                    className="mb-8 last:mb-0"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <motion.h3 
                      className="text-xl font-bold mb-4 bg-gradient-to-r from-black to-gray-800 text-transparent bg-clip-text"
                      variants={slideInLeft}
                    >
                      {course.name}
                    </motion.h3>
                    <motion.div 
                      className="grid md:grid-cols-2 gap-4"
                      variants={staggerContainer}
                    >
                      <motion.div 
                        variants={slideInLeft}
                        className="space-y-4"
                      >
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Minor Offered</h4>
                          {Array.isArray(course.minor) ? (
                            <ul className="list-disc list-inside text-gray-900">
                              {course.minor.map((minor, minorIndex) => (
                                <motion.li 
                                  key={minorIndex}
                                  variants={fadeIn}
                                  custom={minorIndex}
                                  className="mb-1"
                                >
                                  {minor}
                                </motion.li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-900">{course.minor || 'Not applicable'}</p>
                          )}
                        </div>
                      </motion.div>
                      <motion.div 
                        variants={slideInRight}
                        className="space-y-4"
                      >
                        <div>
                          <h4 className="font-semibold text-green-700 mb-1">Duration</h4>
                          <p className="text-gray-900">{course.duration}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-1">Eligibility</h4>
                          <p className="text-gray-900">{course.eligibility}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default ProgramsPage; 