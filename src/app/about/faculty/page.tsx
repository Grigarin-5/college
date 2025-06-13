"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Heading from "@/components/common/Heading";
import TextLabel from "@/components/common/TextLabel";
import SubText from "@/components/common/SubText";
import SubHeading from "@/components/common/SubHeading";

const FacultyPage = () => {
  const administration = [
    {
      role: "Principal",
      name: "Dr. Muhammad Basheer K",
      qualifications: "MSc Chemistry, MPhil, PhD",
    },
    {
      role: "Vice Principal",
      name: "Linsa T M",
      qualifications: "MCom, BEd, SET, NET",
    },
  ];

  const departments = [
    {
      name: "Dept. of Commerce",
      faculty: [
        {
          name: "Linsa T M",
          qualifications: "MCom, BEd, SET, NET",
          role: "HOD",
        },
        {
          name: "Ajisha A K",
          qualifications: "MCom",
          role: "Assistant Professor",
        },
        {
          name: "Shaheena V P",
          qualifications: "MCom",
          role: "Assistant Professor",
        },
        {
          name: "Sandhya P",
          qualifications: "MCom",
          role: "Assistant Professor",
        },
        {
          name: "Athul Chandra C M",
          qualifications: "MCom, BEd, NET",
          role: "Assistant Professor",
        },
        {
          name: "Rishana Febim",
          qualifications: "MCom, BEd",
          role: "Assistant Professor",
        },
      ],
    },
    {
      name: "Dept. of Management Studies",
      faculty: [
        {
          name: "Anjali T K",
          qualifications: "MCom, MBA(HR), BEd",
          role: "HOD",
        },
        {
          name: "Kavyasree M",
          qualifications: "MCom, NET",
          role: "Assistant Professor",
        },
        {
          name: "Thajna M",
          qualifications: "MBA",
          role: "Assistant Professor",
        },
      ],
    },
    {
      name: "Dept. of English",
      faculty: [
        {
          name: "Vinod K K",
          qualifications: "MA English, BEd, SET",
          role: "HOD",
        },
        {
          name: "Dhanya K",
          qualifications: "MA English, BEd, SET",
          role: "Assistant Professor",
        },
        {
          name: "AFEEFA K M",
          qualifications: "MA English, BEd, SET",
          role: "Assistant Professor",
        },
        {
          name: "Najuma A K S",
          qualifications: "MA English, BEd, SET",
          role: "Assistant Professor",
        },
        {
          name: "Rafa Salam Odakkal",
          qualifications: "MA English, NET",
          role: "Assistant Professor",
        },
      ],
    },
    {
      name: "Dept. of Computer Application",
      faculty: [
        { name: "Vijila S P", qualifications: "MCA, MA", role: "HOD" },
        {
          name: "Surjina P",
          qualifications: "MSc Computer Science, BTech(CS)",
          role: "Assistant Professor",
        },
        {
          name: "Shabina K",
          qualifications: "MSc Computer Science, MPhil, NET, BLISc.",
          role: "Assistant Professor",
        },
      ],
    },
    {
      name: "Dept. of Sociology",
      faculty: [
        { name: "Ansil P", qualifications: "MA Sociology, BEd", role: "HOD" },
      ],
    },
    {
      name: "Dept. of Languages",
      faculty: [
        {
          name: "Deepthi V P",
          qualifications: "MA Malayalam, NET",
          role: "Assistant Professor",
        },
        {
          name: "Afsana M A",
          qualifications: "MA Hindi, BEd",
          role: "Assistant Professor",
        },
      ],
    },
  ];

  const nonTeachingStaff = [
    { name: "Balakrishnan V", role: "Librarian" },
    { name: "Shahanas", role: "Accountant" },
    { name: "Ansila K T K", role: "Clerk" },
    { name: "Majeed C K", role: "Office Assistant" },
    { name: "Sumathi", role: "Office Assistant" },
  ];

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1], // Custom easing curve for smoother motion
      },
    },
  };

  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerAnimation = {
    initial: {
      y: -40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Reusable FacultyCard based on FacilityCard theme
  const FacultyCard = ({
    icon = "🎓",
    title,
    description,
  }: {
    icon?: string;
    title: string;
    description: string;
  }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        className="bg-green-100 rounded-[20px] p-8 cursor-pointer group h-full w-full border-2 border-black flex flex-col justify-between relative overflow-hidden transform-gpu backface-hidden"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ scale: 1, y: 0 }}
        whileHover={{
          scale: 1.02,
          y: -10,
          transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative z-10">
          <div
            className="text-4xl mb-4 transition-colors duration-700 group-hover:text-white"
            role="img"
            aria-label={title}
          >
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
          initial={{ scale: 0, x: "50%", y: "50%", opacity: 0 }}
          animate={{
            scale: isHovered ? 10 : 0,
            opacity: isHovered ? 1 : 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          style={{ transformOrigin: "center center" }}
        />
      </motion.div>
    );
  };

  // State to manage mobile booklet open department
  const [openDept, setOpenDept] = useState<number | null>(null);

  // detect desktop after mount to avoid SSR mismatch
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(media.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, []);

  const toggleDept = (idx: number) => {
    setOpenDept(prev => (prev === idx ? null : idx));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-green-100" role="main">
        {/* Hero Header */}
        <header
          className="relative bg-black min-h-screen flex items-center justify-center overflow-hidden"
          role="banner"
        >
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
            <div className="mb-4">
              <TextLabel
                text="Our Faculty & Staff"
                color="white"
                variant="tag"
                className="bg-white/20 px-4 py-2 rounded-full inline-block"
              />
            </div>
            <h1 className="sr-only">
              Meet our faculty and staff of Ilahiya College
            </h1>
            <Heading
              text={
                <>
                  Meet Our
                  <br />
                  Dedicated Team
                </>
              }
              color="gradient"
            />
            <SubText
              text="Committed to excellence in teaching, research and community service."
              color="light"
              size="large"
              className="mb-8"
              maxWidth="600px"
            />
          </div>
        </header>

        {/* Page Content */}
        <div className=" md:py-6 py-12">
          {/* Administration Section */}
          <section className=" md:px-[86px] px-4">
            <SubHeading
              text="Administration"
              color="white"
              className="bg-black mb-4 rounded p-3"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {administration.map((admin, index) => (
                <FacultyCard
                  key={index}
                  title={admin.name}
                  description={`${admin.role} - ${admin.qualifications}`}
                />
              ))}
            </div>
          </section>

          {/* Departments Section */}
          <section className="py-12 md:px-[86px]  px-4 w-full">
            <SubHeading
              color="white"
              text=" Academic Departments"
              className=" mb-6 bg-black p-3 rounded"
            />

            <div className=" w-full ">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white/5 border border-green-500/40 backdrop-blur-lg rounded-xl md:border-0 md:backdrop-blur-none md:rounded-none md:shadow-none md:bg-transparent">
                  <button
                    className="w-full px-3 py-3 bg-gradient-to-r from-green-700/80 to-green-500/80 text-white rounded flex justify-between items-center md:cursor-default"
                    onClick={() => toggleDept(index)}
                  >
                    <SubHeading text={dept.name} className="tracking-wide" />
                    <span className="md:hidden transform transition-transform duration-300" style={{ transform: openDept === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>⌄</span>
                  </button>
                  <motion.div
                    className="origin-top md:py-6 overflow-hidden"
                    initial={false}
                    animate={{
                      rotateX: openDept === index || isDesktop ? 0 : -90,
                      height: openDept === index || isDesktop ? 'auto' : 0,
                      opacity: openDept === index || isDesktop ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="py-6 px-6 md:px-0 md:py-0 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {dept.faculty.map((member, memberIndex) => {
                        const colIndex = memberIndex % 3;
                        let initialProps: { opacity: number; x?: number; y?: number } = { opacity: 0 };

                        if (isDesktop) {
                          // desktop left/right slide
                          let initialX = 0;
                          if (colIndex === 0) initialX = -100;
                          else if (colIndex === 2) initialX = 100;
                          initialProps.x = initialX;
                        } else {
                          // mobile slide from top
                          initialProps.y = -60;
                        }

                        return (
                          <motion.div
                            key={memberIndex}
                            initial={initialProps}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ duration: 0.8, delay: memberIndex * 0.15 }}
                            viewport={{ once: true, amount: 0.2 }}
                          >
                            <FacultyCard
                              title={member.name}
                              description={`(${member.role}) - ${member.qualifications}`}
                            />
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </section>

          {/* Non-Teaching Staff Section */}
          <section className="md:mb-12 mb-6 md:px-[86px] px-4 w-full">
            <SubHeading
              text="Non-Teaching Staff"
              color="white"
              className=" text-white mb-6 bg-black p-3 rounded"
            />

            <div className="bg-white/5 border border-green-500/40 backdrop-blur-lg rounded-xl p-6 shadow-inner md:border-0 md:backdrop-blur-none md:rounded-none md:shadow-none md:bg-transparent md:p-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nonTeachingStaff.map((staff, index) => (
                  <FacultyCard
                    key={index}
                    title={staff.name}
                    description={staff.role}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default FacultyPage;
