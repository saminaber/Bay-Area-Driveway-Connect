'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    projectType: '',
    timeline: '',
    projectDetails: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const projectTypes = [
    'Driveway Replacement',
    'Paver Installation',
    'Concrete Work',
    'Backyard Hardscape',
    'Walkways and Paths',
    'Patio and Outdoor Surfaces',
    'Other'
  ]

  const timelines = [
    'ASAP (within 2 weeks)',
    'This month',
    'Next month',
    'Next 2-3 months',
    'Timeline flexible',
    'Just exploring'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('fullName', formData.fullName)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('city', formData.city)
      formDataToSend.append('projectType', formData.projectType)
      formDataToSend.append('timeline', formData.timeline)
      formDataToSend.append('projectDetails', formData.projectDetails)

      const response = await fetch(
        'https://script.google.com/macros/s/AKfycby9UjVraaS_UAmPFUVljQNnyBATqnPogp7KlQVW_mPS26sRbTEkrFQUMPYmzePoY1RV/exec',
        {
          method: 'POST',
          body: formDataToSend
        }
      )

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          city: '',
          projectType: '',
          timeline: '',
          projectDetails: ''
        })
        setSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error('Form submission error:', err)
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
          Request a Contractor Match
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Tell us about your project and we&apos;ll connect you with qualified contractors in your area.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Phone Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="(650) 123-4567"
              />
            </div>
          </div>

          {/* Email and City Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                City *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                placeholder="San Jose"
              />
            </div>
          </div>

          {/* Project Type and Timeline Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 bg-white"
              >
                <option value="">Select a timeline</option>
                {timelines.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-none"
              placeholder="Tell us about your project. What are you looking to have done? Any specific requirements or concerns?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            {loading ? 'Submitting...' : 'Request Contractor Match'}
          </button>

          {submitted && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
              ✓ Request submitted. We&apos;ll review it and send you contractor matches soon.
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
              ✗ {error}
            </div>
          )}

          <p className="text-xs text-gray-500 text-center">
            We&apos;ll use your information to match you with qualified contractors and follow up on your request.
          </p>
        </form>
      </div>
    </section>
  )
}
