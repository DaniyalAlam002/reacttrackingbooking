import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log('Newsletter subscription:', newsletterEmail)
    setNewsletterEmail('')
    alert('Thank you for subscribing to our newsletter!')
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    // Handle contact form submission
    console.log('Contact form:', contactForm)
    setContactForm({ name: '', phone: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience exceptional healthcare with our team of dedicated professionals. 
              Book your appointment today and take the first step towards better health.
            </p>
            
            {/* Phone Number Display */}
            <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 inline-block">
              <p className="text-2xl font-bold text-primary-600 mb-2">📞 Call Us Now</p>
              <p className="text-3xl font-bold text-gray-900">(555) 123-4567</p>
              <p className="text-gray-600">Available Mon-Fri 8AM-6PM</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book" className="btn-primary text-lg px-8 py-4">
                Book Appointment Now
              </Link>
              <Link to="/about" className="btn-secondary text-lg px-8 py-4">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HealthCare Clinic?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive healthcare services with a focus on patient comfort and medical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600">Our team of experienced healthcare professionals is dedicated to providing the best care possible.</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenient Hours</h3>
              <p className="text-gray-600">Extended hours and flexible scheduling to accommodate your busy lifestyle.</p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Focused</h3>
              <p className="text-gray-600">Your comfort and well-being are our top priorities in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest health tips, clinic updates, and wellness advice.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 input-field"
                required
              />
              <button
                onClick={handleNewsletterSubmit}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            
            {/* Phone Number Display */}
            <div className="mt-6 p-4 bg-primary-50 rounded-lg inline-block">
              <p className="text-lg font-semibold text-primary-600">📞 Call us directly:</p>
              <p className="text-2xl font-bold text-gray-900">(555) 123-4567</p>
            </div>
          </div>

          <div className="card max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="input-field"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  className="input-field"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="input-field"
                  placeholder="Tell us how we can help you"
                  required
                />
              </div>

              <button
                onClick={handleContactSubmit}
                className="btn-primary w-full text-lg py-4"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
