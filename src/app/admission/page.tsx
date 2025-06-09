"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export default function AdmissionForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [photo, setPhoto] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationMethod, setVerificationMethod] = useState<'email' | 'phone'>('email');
  const [isVerificationSent, setIsVerificationSent] = useState(false);

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSendVerification = () => {
    // Here you would implement the actual verification code sending logic
    setIsVerificationSent(true);
  };

  const handleVerifyCode = () => {
    // Here you would implement the actual verification code checking logic
    if (verificationCode.length === 6) {
      // Proceed with form submission
      console.log('Verification successful');
    }
  };

  return (
    <main className="min-h-screen py-8 sm:py-12 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("/assets/college.jpg")' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Admission Form</h1>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="flex items-center w-full max-w-2xl justify-between">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  1
                </div>
                <span className="text-xs sm:text-sm mt-2 font-medium text-gray-900">Basic Details</span>
              </div>
              <div className={`flex-1 h-1 mx-2 sm:mx-4 ${
                currentStep > 1 ? 'bg-blue-600' : 'bg-gray-200'
              }`} />
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                  currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  2
                </div>
                <span className="text-xs sm:text-sm mt-2 font-medium text-gray-900">Contact Details</span>
              </div>
              <div className={`flex-1 h-1 mx-2 sm:mx-4 ${
                currentStep > 2 ? 'bg-blue-600' : 'bg-gray-200'
              }`} />
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                  currentStep === 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  3
                </div>
                <span className="text-xs sm:text-sm mt-2 font-medium text-gray-900">Verification</span>
              </div>
            </div>
          </div>

          {/* Form Steps */}
          <form onSubmit={(e) => e.preventDefault()}>
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Basic Details</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter Full Name"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Address
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Enter Address"
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                          />
                          <button className="absolute right-3 top-1/2 -translate-y-1/2">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Select Branch
                          </label>
                          <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-blue-400">
                            <option value="" className="text-blue-400">Select Branch</option>
                            <option value="cs">Computer Science</option>
                            <option value="commerce">Commerce</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Position
                          </label>
                          <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-blue-400">
                            <option value="" className="text-blue-400">Position</option>
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-blue-400"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Gender
                          </label>
                          <div className="flex gap-4 mt-2">
                            <label className="flex items-center">
                              <input type="radio" name="gender" value="male" className="w-4 h-4 text-blue-600" />
                              <span className="ml-2">Male</span>
                            </label>
                            <label className="flex items-center">
                              <input type="radio" name="gender" value="female" className="w-4 h-4 text-blue-600" />
                              <span className="ml-2">Female</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Your Description
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Description"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ml-8">
                    <div className="w-32 h-32 bg-gray-100 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
                      {photo ? (
                        <img src={photo} alt="Profile" className="w-full h-full object-cover rounded-lg" />
                      ) : (
                        <>
                          <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm text-gray-500">Add Photo</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Add Education</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Degree Name
                      </label>
                      <input
                        type="text"
                        placeholder="Degree Name"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Select University
                      </label>
                      <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-blue-400">
                        <option value="" className="text-blue-400">Select University</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Grade
                      </label>
                      <select className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 text-blue-400">
                        <option value="" className="text-blue-400">Grade</option>
                      </select>
                    </div>
                  </div>
                  <button type="button" className="text-blue-600 text-sm font-medium hover:text-blue-700">
                    + Add Another Education
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 - Contact Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Contact Details</h2>
                
                {/* Primary Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Primary Contact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter Mobile Number"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Email Address"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Emergency Contact</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Person Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Contact Person Name"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Relationship
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Relationship"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Emergency Contact Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter Emergency Contact Number"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Alternative Contact Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter Alternative Number"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Permanent Address</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Enter Street Address"
                      className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="Enter City"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="Enter State"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Country"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Postal Code"
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 - Verification */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Verify Your Identity</h2>
                
                {/* Verification Method Selection */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium bg-gradient-to-r from-gray-900 to-black bg-clip-text text-transparent">Choose Verification Method</h3>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="verificationMethod"
                        value="email"
                        checked={verificationMethod === 'email'}
                        onChange={() => setVerificationMethod('email')}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-2">Email Verification</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="verificationMethod"
                        value="phone"
                        checked={verificationMethod === 'phone'}
                        onChange={() => setVerificationMethod('phone')}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="ml-2">Phone Verification</span>
                    </label>
                  </div>

                  {/* Verification Process */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    {!isVerificationSent ? (
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                          {verificationMethod === 'email' 
                            ? 'We will send a verification code to your email address.'
                            : 'We will send a verification code to your mobile number.'}
                        </p>
                        <button
                          type="button"
                          onClick={handleSendVerification}
                          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          Send Verification Code
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                          Please enter the verification code we sent to your {verificationMethod === 'email' ? 'email' : 'phone'}.
                        </p>
                        <div className="max-w-xs">
                          <input
                            type="text"
                            maxLength={6}
                            placeholder="Enter 6-digit code"
                            value={verificationCode}
                            onChange={(e) => setVerificationCode(e.target.value)}
                            className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-blue-400 text-center text-2xl tracking-wider"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleVerifyCode}
                          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                          disabled={verificationCode.length !== 6}
                        >
                          Verify Code
                        </button>
                        <p className="text-sm text-gray-500">
                          Didn't receive the code? <button type="button" onClick={handleSendVerification} className="text-blue-600 hover:text-blue-700">Resend</button>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-6 py-2 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={handleNextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {currentStep === 3 ? 'Submit Application' : 'Save & Next'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
} 