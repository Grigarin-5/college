"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import Heading from '@/components/common/Heading'
import SubHeading from '@/components/common/SubHeading'

export default function MainPage() {
  const institutions = [
    { name: 'Ilahiya Higher Secondary School', img: '/images/deafult.jpg', href: '#' },
    { name: 'IES Atholi', img: '/images/deafult.jpg', href: '#' },
    { name: 'IES Koyilandy', img: '/images/deafult.jpg', href: '#' },
    { name: 'CUP Chemancheri', img: '/images/deafult.jpg', href: '#' },
    { name: 'KKMIN Academy', img: '/images/deafult.jpg', href: '#' },
    { name: 'Orphanage Section', img: '/images/deafult.jpg', href: '#' },
    { name: 'Ilahiya Arts and Science College - Koyilandi', img: '/images/deafult.jpg', href: '/' },
  ]

  const [showImageAnimation, setShowImageAnimation] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setShowImageAnimation(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen overflow-hidden">
       

        {/* Background Image */}
        <div className={`absolute inset-0 hero-image-container ${showImageAnimation ? 'animate' : ''}`}>
          <Image
            src="/images/ilahiya-college.jpeg"
            alt="Campus"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        {/* Green Overlay with 45-degree cut */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-green-700 clip-hero" />
        </div>

        {/* Centered Heading */}
        <div className="relative z-10 h-full flex items-center justify-center px-5">
          <Heading text="Al Huda Islamic Cultural Establishment And Orphanage" color="white" className="text-center text-white drop-shadow-lg max-w-3xl"/>
          
        </div>
      </section>

      <section className="relative z-10 w-full max-w-6xl mx-auto mt-20 px-4 pb-20">
        <Heading text="Our Institutions" color="black" className="text-green-700 mb-8 text-center"/>
        <div className="flex flex-col gap-10">
          {institutions.map((inst, index) => (
            <motion.div
              key={inst.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, x: index % 2 === 0 ? 150 : -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative w-full h-56 md:h-64 lg:h-72">
                <Image
                  src={inst.img}
                  alt={inst.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <SubHeading text={inst.name} color="black"  className=" mb-4 text-gray-800 text-center"/>
                <Button href={inst.href} variant="primary" className="mt-auto">
                  Visit
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
