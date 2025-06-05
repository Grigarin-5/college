"use client"
import React, { useRef } from 'react';
import Link from 'next/link';
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
    },
    {
      title: 'Resources',
      links: [
        { label: 'News & Events', href: '/news' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'IQAC', href: '/iqac' },
        { label: 'Grievance', href: '/grievance' }
      ]
    }
  ];

  return (
    <footer ref={ref} className="bg-gradient-to-b from-white via-gray-100 to-gray-200 relative mt-auto">
      <motion.div 
        className="container mx-auto px-4 pt-16 pb-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              variants={itemVariants}
              className="text-xl font-semibold mb-4 text-gray-800"
            >
              Contact Us
            </motion.h4>
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaPhone className="text-gray-600 mr-3 group-hover:text-gray-800 transition-colors duration-200" />
                <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                  +91 944 695 3620
                </span>
              </motion.div>
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-gray-600 mr-3 group-hover:text-gray-800 transition-colors duration-200" />
                <a href="mailto:ilahiyakoyilandy@gmail.com" 
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                  ilahiyakoyilandy@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-start group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-gray-600 mr-3 mt-1 group-hover:text-gray-800 transition-colors duration-200" />
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                  Cheliya, Chengottukavu,<br />Koyilandy
                </p>
              </motion.div>
            </motion.div>
            <motion.div className="flex space-x-4 mt-6" variants={itemVariants}>
              {[
                { icon: <FaFacebook size={24} />, href: "#" },
                { icon: <FaTwitter size={24} />, href: "#" },
                { icon: <FaInstagram size={24} />, href: "#" },
                { icon: <FaLinkedin size={24} />, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-gray-700"
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.h4 
                variants={itemVariants}
                className="text-xl font-semibold mb-4 text-gray-800"
              >
                {section.title}
              </motion.h4>
              <motion.ul className="space-y-2" variants={itemVariants}>
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-200 mt-12 pt-8"
          variants={itemVariants}
        >
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center"
            variants={itemVariants}
          >
            <motion.p 
              className="text-sm text-gray-600"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} Ilahiya College. All rights reserved.
            </motion.p>
            <motion.div className="flex space-x-6 mt-4 md:mt-0">
              <motion.div whileHover={{ x: 3 }}>
                <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 3 }}>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200">
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