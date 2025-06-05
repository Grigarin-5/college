'use client'
import React from 'react'
import Link from 'next/link'

const InstitutionsList = () => {
  const institutions = [
    { name: 'Ilahiya Higher Secondary School', link: null },
    { name: 'IES Atholi', link: null },
    { name: 'IES Koyilandy', link: null },
    { name: 'CUP Chemancheri', link: null },
    { name: 'KKMIN Academy', link: null },
    { name: 'Orphanage Section', link: null },
    { name: 'Ilahiya Arts and science college-Koyilandi', link: '/ilahiya-college' }
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-green-800 mb-6">Our Institutions</h3>
      <ul className="space-y-3">
        {institutions.map((institution, index) => (
          <li 
            key={index}
            className="flex items-center space-x-2"
          >
            <span className="w-6 h-6 flex items-center justify-center bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {index + 1}
            </span>
            {institution.link ? (
              <Link href={institution.link} className="text-gray-700 hover:text-green-800">
                {institution.name}
              </Link>
            ) : (
              <span className="text-gray-700">{institution.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InstitutionsList 