import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from '@/components/Navbar'

const IlahiyaCollege = () => {
  const latestNews = [
    "Admissions open for 2024-25 Academic Year",
    "National Seminar on Environmental Studies - Register Now",
    "Sports Day Celebrations on March 15th",
    "New Computer Lab Inauguration"
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Latest News Ticker */}
      <div className="bg-yellow-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="font-bold mr-4">Latest News:</span>
            <div className="overflow-hidden relative w-full">
              <div className="animate-marquee whitespace-nowrap">
                {latestNews.map((news, index) => (
                  <span key={index} className="mx-4">• {news}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* College Images Carousel */}
        <section className="mb-12">
          <div className="relative h-96 bg-gray-200">
            {/* Add carousel implementation here */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p>College Images Carousel</p>
            </div>
          </div>
        </section>

        {/* Contact and Social Media */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-wrap justify-around items-center">
            <div className="flex items-center space-x-2">
              <FaPhone className="text-green-800" />
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-green-800" />
              <a href="mailto:info@ilahiya.edu.in">info@ilahiya.edu.in</a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook size={24} /></a>
              <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram size={24} /></a>
              <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube size={24} /></a>
            </div>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Principal's Message</h2>
          <div className="flex items-start space-x-4">
            <div className="w-48 h-48 bg-gray-200 flex-shrink-0">
              {/* Principal's Image */}
            </div>
            <div>
              <p className="text-gray-600 mb-4">
                Welcome to Ilahiya Arts and Science College. Our institution is committed to providing quality education
                while fostering academic excellence and personal growth...
              </p>
              <p className="font-bold">Dr. Abdul Rahman</p>
              <p className="text-sm text-gray-500">Principal</p>
            </div>
          </div>
        </section>

        {/* Courses Offered */}
        <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Courses Offered</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded">
              <h3 className="font-bold mb-2">Undergraduate Programs</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>B.A. English</li>
                <li>B.Com</li>
                <li>B.Sc Computer Science</li>
              </ul>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-bold mb-2">Postgraduate Programs</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>M.A. English</li>
                <li>M.Com</li>
              </ul>
            </div>
            <div className="p-4 border rounded">
              <Link href="/programmes" className="text-green-800 hover:text-green-600 font-bold">
                View All Programs →
              </Link>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Our Facilities</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {['Computer Lab', 'Library', 'Sports Ground', 'Canteen'].map((facility) => (
              <div key={facility} className="bg-white p-4 rounded-lg shadow-md">
                <div className="h-40 bg-gray-200 mb-4 rounded"></div>
                <h3 className="font-bold text-center">{facility}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default IlahiyaCollege; 