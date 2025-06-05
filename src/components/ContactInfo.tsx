'use client'
import React from 'react'

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-green-800 mb-6">Contact Information</h3>
      <div className="space-y-4">
        <div>
          <p className="font-medium text-gray-700">GST Number:</p>
          <p className="text-gray-600">Coming soon</p>
        </div>
        
        <div>
          <p className="font-medium text-gray-700">Contact Number:</p>
          <p className="text-gray-600">Coming soon</p>
        </div>
        
        <div>
          <p className="font-medium text-gray-700">WhatsApp Number:</p>
          <p className="text-gray-600">Coming soon</p>
        </div>
        
        <div>
          <p className="font-medium text-gray-700">Email:</p>
          <p className="text-gray-600">Coming soon</p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo 