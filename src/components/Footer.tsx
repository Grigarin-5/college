"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
import { IconBaseProps } from 'react-icons';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-100px 0px"
  });

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const socialIconVariants = {
    hidden: { 
      scale: 0.5, 
      opacity: 0 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300
      }
    },
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Programmes', href: '/programmes' },
        { label: 'Admission', href: '/admission' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    {
      title: 'Academics',
      links: [
        { label: 'Faculty', href: '/about/faculty' },
        { label: 'Departments', href: '/departments' },
        { label: 'Library', href: '/library' },
        { label: 'Research', href: '/research' }
      ]
    },
    {
      title: 'Student Zone',
      links: [
        { label: 'Student Portal', href: '/student-portal' },
        { label: 'Exam Results', href: '/results' },
        { label: 'Downloads', href: '/downloads' },
        { label: 'Alumni', href: '/alumni' }
      ]
    }
  ];

  const resourcesSection = {
    title: 'Resources',
    links: [
      { label: 'News & Events', href: '/news' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'IQAC', href: '/iqac' },
      { label: 'Grievance', href: '/grievance' }
    ]
  };

  const IconWrapper = ({ icon: Icon, ...props }: { icon: React.ComponentType<IconBaseProps> } & IconBaseProps) => {
    return <Icon {...props} />;
  };

  return (
    <footer ref={ref} className="bg-gradient-to-b from-white via-gray-100 to-gray-200 relative mt-auto">
      <motion.div 
        className="w-full px-4 md:px-6 lg:px-8 pt-12 pb-6 md:pt-16 md:pb-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="grid grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 order-1">
            <motion.h4 
              variants={itemVariants}
              className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-800"
            >
              Contact Us
            </motion.h4>
            <motion.div className="space-y-2 md:space-y-3" variants={itemVariants}>
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconWrapper 
                  icon={FaPhone}
                  className="text-gray-600 mr-2 text-sm md:text-base group-hover:text-gray-800 transition-colors duration-200 flex-shrink-0"
                />
                <span className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                  +91 944 695 3620
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconWrapper 
                  icon={FaEnvelope}
                  className="text-gray-600 mr-2 text-sm md:text-base group-hover:text-gray-800 transition-colors duration-200 flex-shrink-0"
                />
                <a href="mailto:ilahiyakoyilandy@gmail.com" 
                  className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 truncate">
                  ilahiyakoyilandy@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconWrapper 
                  icon={FaMapMarkerAlt}
                  className="text-gray-600 mr-2 mt-1 text-sm md:text-base group-hover:text-gray-800 transition-colors duration-200 flex-shrink-0"
                />
                <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                  Cheliya, Chengottukavu, Koyilandy
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 order-2 flex flex-col items-end md:items-start text-right md:text-left">
            <motion.h4 
              variants={itemVariants}
              className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-800"
            >
              Quick Links
            </motion.h4>
            <motion.ul className="space-y-1 md:space-y-2" variants={itemVariants}>
              <motion.li whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/about" className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">About Us</Link>
              </motion.li>
              <motion.li whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/programmes" className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">Programmes</Link>
              </motion.li>
              <motion.li whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/admission" className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">Admission</Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Academic Section */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 order-3">
            <motion.h4 
              variants={itemVariants}
              className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-800"
            >
              Academic
            </motion.h4>
            <motion.ul className="space-y-1 md:space-y-2" variants={itemVariants}>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/departments" className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">Departments</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/student-portal" className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">Student Portal</Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1 order-4 flex flex-col items-end md:items-start text-right md:text-left">
            <motion.h4 
              variants={itemVariants}
              className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-gray-800"
            >
              Resources
            </motion.h4>
            <motion.ul className="space-y-1 md:space-y-2" variants={itemVariants}>
              <motion.li whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/gallery" className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">Gallery</Link>
              </motion.li>
              <motion.li whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/iqac" className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">IQAC</Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-200 mt-6 md:mt-8 pt-4 md:pt-6 w-full"
          variants={itemVariants}
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 max-w-7xl mx-auto"
            variants={itemVariants}
          >
            <motion.p 
              className="text-xs md:text-sm text-gray-600 text-center md:text-left"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} Ilahiya College. All rights reserved.
            </motion.p>
            <motion.div className="flex space-x-4">
              <motion.div whileHover={{ x: 3 }}>
                <Link href="/privacy-policy" className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 3 }}>
                <Link href="/terms" className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
                  Terms of Use
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 