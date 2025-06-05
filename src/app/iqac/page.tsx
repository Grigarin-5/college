"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function IQAC() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const iqacMembers = [
    { name: 'Dr. Muhammad Basheer K', designation: 'Principal', role: 'Chairman' },
    { name: 'Dhanya K K', designation: 'Asst. Professor(English)', role: 'IQAC Coordinator' },
    { name: 'PKK Bava', designation: 'Management', role: 'Nominee of management' },
    { name: 'Muhammad Ali KP', designation: 'Management', role: 'Nominee of Society' },
    { name: 'Ansila K T K', designation: 'Clerk', role: 'Nominee of administrative staff' },
    { name: 'Linsa T M', designation: 'Vice Principal, HOD Commerce, FYUGP Coordinator', role: 'Nominee of administrative staff' },
    { name: 'Vinod K K', designation: 'HOD English, Staff Secretary', role: 'Nominee of administrative staff' },
    { name: 'Anjali T K', designation: 'HOD Management Studies', role: 'Nominee of administrative staff' },
    { name: 'Vijila S P', designation: 'HOD Computer Application', role: 'Nominee of administrative staff' },
    { name: 'Ansil P', designation: 'HOD Sociology', role: 'Nominee of administrative staff' },
    { name: 'Muhammed Shafi', designation: 'PTA Vice President', role: 'Nominee of administrative staff' },
    { name: 'Arya T P', designation: '', role: 'Nominee of Students' },
    { name: 'Fathima Sana', designation: '', role: 'Nominee of Students' },
  ];

  const iqacRoles = [
    'The development and application of quality parameters for the activities of the institution.',
    'To create a student centric teaching environment conducive to imparting quality education.',
    'Administering feedback mechanism for the college from stakeholders on quality related affairs.',
    'To create quality consciousness among the stakeholders of the institution by organizing workshops, seminars etc.',
    'Organizing awareness programmes for students.',
    'Organizing orientation programmes for staff and administrative staff.',
    'Documentation of the various programmes /activities leading to quality enhancement.',
  ];

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

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* IQAC Introduction */}
        <section className="mb-16">
          <motion.h1 
            className="text-4xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
              Internal Quality Assurance Cell (IQAC)
            </span>
          </motion.h1>
          <motion.div 
            className="max-w-4xl mx-auto prose prose-lg prose-invert"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-6 text-gray-200">
              Internal Quality Assurance Cell, is the first step towards internalization and institutionalization
              of quality enhancement initiatives of higher education institutions. The primary objective is to
              create a framework that will enable the institution for overall improvement of academic and
              administrative performance. This system will include self-regulated responsibilities for the
              institution, ongoing quality improvement, and academic excellence.
            </p>
            <p className="mb-6 text-gray-200">
              At the request of NAAC many institutions have established the IQAC prior to accreditation in all
              the higher education institutions which would help in establishing quality culture in them. The
              Cell has been functioning actively in our academic and administrative activities.
            </p>
          </motion.div>
        </section>

        {/* IQAC Roles */}
        <motion.section 
          className="mb-16 bg-white/90 backdrop-blur-sm py-12 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-10%" }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
              Role of IQAC
            </h2>
            <ul className="space-y-4">
              {iqacRoles.map((role, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-blue-600 mr-2">●</span>
                  <span className="text-gray-800">{role}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* IQAC Members */}
        <section className="mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            IQAC Members
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {iqacMembers.map((member, index) => (
              <motion.div 
                key={index} 
                className="group bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md border border-white/20 
                  hover:bg-white/95 transition-all duration-500 cursor-pointer
                  hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ z: 20 }}
                >
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 
                      rounded-lg blur opacity-0 group-hover:opacity-15 transition duration-500"
                  />
                  <motion.div className="relative">
                    <motion.div 
                      className="text-xl font-semibold mb-2 transform origin-left transition-transform"
                      whileHover={{ 
                        scale: 1.01,
                        x: 5,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                    >
                      <span className="bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">
                        {member.name}
                      </span>
                    </motion.div>
                    <motion.p 
                      className="text-blue-600 font-medium mb-1 transform origin-left transition-transform"
                      whileHover={{ 
                        x: 8,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10
                        }
                      }}
                      style={{ color: "rgb(37, 99, 235)" }}
                    >
                      {member.role}
                    </motion.p>
                    {member.designation && (
                      <motion.p 
                        className="text-gray-600 transform origin-left transition-transform"
                        whileHover={{ 
                          x: 8,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                          }
                        }}
                        style={{ color: "rgb(75, 85, 99)" }}
                      >
                        {member.designation}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-50
                    transition-opacity duration-500 pointer-events-none"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
} 