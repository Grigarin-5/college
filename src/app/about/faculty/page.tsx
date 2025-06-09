'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FacultyPage = () => {
  const administration = [
    {
      role: 'Principal',
      name: 'Dr. Muhammad Basheer K',
      qualifications: 'MSc Chemistry, MPhil, PhD'
    },
    {
      role: 'Vice Principal',
      name: 'Linsa T M',
      qualifications: 'MCom, BEd, SET, NET'
    }
  ];

  const departments = [
    {
      name: 'Dept. of Commerce',
      faculty: [
        { name: 'Linsa T M', qualifications: 'MCom, BEd, SET, NET', role: 'HOD' },
        { name: 'Ajisha A K', qualifications: 'MCom', role: 'Assistant Professor' },
        { name: 'Shaheena V P', qualifications: 'MCom', role: 'Assistant Professor' },
        { name: 'Sandhya P', qualifications: 'MCom', role: 'Assistant Professor' },
        { name: 'Athul Chandra C M', qualifications: 'MCom, BEd, NET', role: 'Assistant Professor' },
        { name: 'Rishana Febim', qualifications: 'MCom, BEd', role: 'Assistant Professor' }
      ]
    },
    {
      name: 'Dept. of Management Studies',
      faculty: [
        { name: 'Anjali T K', qualifications: 'MCom, MBA(HR), BEd', role: 'HOD' },
        { name: 'Kavyasree M', qualifications: 'MCom, NET', role: 'Assistant Professor' },
        { name: 'Thajna M', qualifications: 'MBA', role: 'Assistant Professor' }
      ]
    },
    {
      name: 'Dept. of English',
      faculty: [
        { name: 'Vinod K K', qualifications: 'MA English, BEd, SET', role: 'HOD' },
        { name: 'Dhanya K', qualifications: 'MA English, BEd, SET', role: 'Assistant Professor' },
        { name: 'AFEEFA K M', qualifications: 'MA English, BEd, SET', role: 'Assistant Professor' },
        { name: 'Najuma A K S', qualifications: 'MA English, BEd, SET', role: 'Assistant Professor' },
        { name: 'Rafa Salam Odakkal', qualifications: 'MA English, NET', role: 'Assistant Professor' }
      ]
    },
    {
      name: 'Dept. of Computer Application',
      faculty: [
        { name: 'Vijila S P', qualifications: 'MCA, MA', role: 'HOD' },
        { name: 'Surjina P', qualifications: 'MSc Computer Science, BTech(CS)', role: 'Assistant Professor' },
        { name: 'Shabina K', qualifications: 'MSc Computer Science, MPhil, NET, BLISc.', role: 'Assistant Professor' }
      ]
    },
    {
      name: 'Dept. of Sociology',
      faculty: [
        { name: 'Ansil P', qualifications: 'MA Sociology, BEd', role: 'HOD' }
      ]
    },
    {
      name: 'Dept. of Languages',
      faculty: [
        { name: 'Deepthi V P', qualifications: 'MA Malayalam, NET', role: 'Assistant Professor' },
        { name: 'Afsana M A', qualifications: 'MA Hindi, BEd', role: 'Assistant Professor' }
      ]
    }
  ];

  const nonTeachingStaff = [
    { name: 'Balakrishnan V', role: 'Librarian' },
    { name: 'Shahanas', role: 'Accountant' },
    { name: 'Ansila K T K', role: 'Clerk' },
    { name: 'Majeed C K', role: 'Office Assistant' },
    { name: 'Sumathi', role: 'Office Assistant' }
  ];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1]  // Custom easing curve for smoother motion
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerAnimation = {
    initial: {
      y: -40,
      opacity: 0
    },
    animate: {
      y: 0,
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
        staggerChildren: 0.2
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

      <div className="container mx-auto px-4 py-6 sm:py-12 relative z-10">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-6 sm:mb-12"
          variants={headerAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.8 }}
        >
          Our Faculty & Staff
        </motion.h1>

        {/* Administration Section */}
        <section className="mb-6 sm:mb-12">
          <motion.h2 
            className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6 bg-black/30 p-3 rounded"
            variants={headerAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
          >
            Administration
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
          >
            {administration.map((admin, index) => (
              <motion.div 
                key={index} 
                className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 hover:bg-white/95 transition-colors duration-300"
                variants={fadeInUp}
              >
                <motion.div variants={fadeIn}>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">{admin.role}</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-900 mt-2">{admin.name}</p>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">{admin.qualifications}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Departments Section */}
        <section className="mb-12">
          <motion.h2 
            className="text-2xl font-bold text-white mb-6 bg-black/30 p-3 rounded"
            variants={headerAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
          >
            Academic Departments
          </motion.h2>
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.2 }}
          >
            {departments.map((dept, index) => (
              <motion.div 
                key={index} 
                className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:bg-white/95 transition-colors duration-300"
                variants={fadeInUp}
              >
                <motion.div 
                  className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-semibold">{dept.name}</h3>
                </motion.div>
                <motion.div 
                  className="p-6"
                  variants={fadeIn}
                >
                  <div className="grid gap-4">
                    {dept.faculty.map((member, memberIndex) => (
                      <div 
                        key={memberIndex} 
                        className="border-b last:border-0 pb-4 last:pb-0"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">
                              {member.name}
                              <span className="text-blue-800 ml-2 text-sm">
                                ({member.role})
                              </span>
                            </h4>
                            <p className="text-gray-900 mt-1">{member.qualifications}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Non-Teaching Staff Section */}
        <section>
          <motion.h2 
            className="text-2xl font-bold text-white mb-6 bg-black/30 p-3 rounded"
            variants={headerAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.8 }}
          >
            Non-Teaching Staff
          </motion.h2>
          <motion.div 
            className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-6 hover:bg-white/95 transition-colors duration-300"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {nonTeachingStaff.map((staff, index) => (
                <motion.div 
                  key={index} 
                  className="border-b md:border-b-0 pb-4 md:pb-0"
                  variants={fadeInUp}
                >
                  <motion.div variants={fadeIn}>
                    <h4 className="text-lg font-semibold text-gray-900">{staff.name}</h4>
                    <p className="text-gray-900">{staff.role}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
    </main>
  );
};

export default FacultyPage; 