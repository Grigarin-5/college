"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Heading from "@/components/common/Heading";
import TextLabel from "@/components/common/TextLabel";
import SubText from "@/components/common/SubText";
import SubHeading from "@/components/common/SubHeading";

export default function IQAC() {
  // Reusable FacultyCard based on FacultyPage theme
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

  const iqacMembers = [
    {
      name: "Dr. Muhammad Basheer K",
      designation: "Principal",
      role: "Chairman",
    },
    {
      name: "Dhanya K K",
      designation: "Asst. Professor(English)",
      role: "IQAC Coordinator",
    },
    {
      name: "PKK Bava",
      designation: "Management",
      role: "Nominee of management",
    },
    {
      name: "Muhammad Ali KP",
      designation: "Management",
      role: "Nominee of Society",
    },
    {
      name: "Ansila K T K",
      designation: "Clerk",
      role: "Nominee of administrative staff",
    },
    {
      name: "Linsa T M",
      designation: "Vice Principal, HOD Commerce, FYUGP Coordinator",
      role: "Nominee of administrative staff",
    },
    {
      name: "Vinod K K",
      designation: "HOD English, Staff Secretary",
      role: "Nominee of administrative staff",
    },
    {
      name: "Anjali T K",
      designation: "HOD Management Studies",
      role: "Nominee of administrative staff",
    },
    {
      name: "Vijila S P",
      designation: "HOD Computer Application",
      role: "Nominee of administrative staff",
    },
    {
      name: "Ansil P",
      designation: "HOD Sociology",
      role: "Nominee of administrative staff",
    },
    {
      name: "Muhammed Shafi",
      designation: "PTA Vice President",
      role: "Nominee of administrative staff",
    },
    { name: "Arya T P", designation: "", role: "Nominee of Students" },
    { name: "Fathima Sana", designation: "", role: "Nominee of Students" },
  ];

  const iqacRoles = [
    "The development and application of quality parameters for the activities of the institution.",
    "To create a student centric teaching environment conducive to imparting quality education.",
    "Administering feedback mechanism for the college from stakeholders on quality related affairs.",
    "To create quality consciousness among the stakeholders of the institution by organizing workshops, seminars etc.",
    "Organizing awareness programmes for students.",
    "Organizing orientation programmes for staff and administrative staff.",
    "Documentation of the various programmes /activities leading to quality enhancement.",
  ];

  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateIsDesktop = (e: MediaQueryListEvent | MediaQueryList) => setIsDesktop(e.matches);
    updateIsDesktop(mediaQuery);
    if (mediaQuery.addEventListener) mediaQuery.addEventListener('change', updateIsDesktop);
    else mediaQuery.addListener(updateIsDesktop);
    return () => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener('change', updateIsDesktop);
      else mediaQuery.removeListener(updateIsDesktop);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-green-100 relative">
        {/* Hero Header */}
        <header
          className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
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

          {/* Green Overlay */}
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
                text="IQAC"
                color="white"
                variant="tag"
                className="bg-white/20 px-4 py-2 rounded-full inline-block"
              />
            </motion.div>
            <Heading
              text={
                <>
                  Internal Quality
                  <br />
                  Assurance Cell
                </>
              }
              color="gradient"
              delay={0.2}
            />
            <SubText
              text="Committed to continuous improvement and quality enhancement."
              color="light"
              size="large"
              className="mb-8"
              delay={0.4}
              maxWidth="600px"
            />
          </div>
        </header>

        {/* Background Image (static) */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/images/ilahiya-college.jpg"
            alt="College Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm" />
        </div>

        <div className=" mx-auto md:px-[90px] px-[20px] py-20 relative  z-10">
          {/* IQAC Introduction */}
          <section className="mb-16">
            <motion.h1
              className=" mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SubHeading
                text="Internal Quality Assurance Cell (IQAC)"
                className="bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent"
              />
            </motion.h1>
            <motion.div
              className=" md:max-w-4xl max-w-[90%] mx-auto prose prose-lg prose-invert"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SubText
                text=" Internal Quality Assurance Cell, is the first step towards
                internalization and institutionalization of quality enhancement
                initiatives of higher education institutions. The primary
                objective is to create a framework that will enable the
                institution for overall improvement of academic and
                administrative performance. This system will include
                self-regulated responsibilities for the institution, ongoing
                quality improvement, and academic excellence."
                className="mb-6 "
                color="black"
              />

              <SubText
                text="At the request of NAAC many institutions have established the
                IQAC prior to accreditation in all the higher education
                institutions which would help in establishing quality culture in
                them. The Cell has been functioning actively in our academic and
                administrative activities."
                className="mb-6 "
                color="black"
              />
            </motion.div>
          </section>

          {/* IQAC Roles */}
          <motion.section
            className="mb-16  bg-white backdrop-blur-lg md:border border-green-600/70 shadow-lg md:shadow-none md:border-l-4 md:border-t-0 md:border-r-0 md:border-b-0 py-12 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-5xl mx-auto">
              <SubHeading text="Role of IQAC" className=" mb-8 text-center bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent"/>
              
              <ul className="space-y-4">
                {iqacRoles.map((role, index) => (
                  <li key={index} className="flex px-5 md:px-0 items-start">
                    <span className="text-green-600 mr-2">●</span>
                    <span ><SubText text={role} color="black"/></span>
                  </li>
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
            <div className="py-6 px-6 md:px-0 md:py-0 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {iqacMembers.map((member, index) => {
                const colIndex = index % 3;
                let initialProps: { opacity: number; x?: number; y?: number } = { opacity: 0 };

                if (isDesktop) {
                  let initialX = 0;
                  if (colIndex === 0) initialX = -100;
                  else if (colIndex === 2) initialX = 100;
                  initialProps.x = initialX;
                } else {
                  initialProps.y = -60;
                }

                return (
                  <motion.div
                    key={index}
                    initial={initialProps}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <FacultyCard
                      title={member.name}
                      description={`${member.role}${member.designation ? " - " + member.designation : ""}`}
                    />
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
