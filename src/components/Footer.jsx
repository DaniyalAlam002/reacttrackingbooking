const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Contact */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">HealthCare Clinic</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Providing exceptional healthcare services with compassion and expertise. 
              Your health is our priority.
            </p>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <span className="text-primary-400">📞</span>
                <span className="font-medium">(555) 123-4567</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-primary-400">📍</span>
                <span>123 Medical Center Dr, Healthcare City, HC 12345</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-primary-400">🕒</span>
                <span>Mon-Fri: 8AM-6PM, Sat: 9AM-2PM</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/book" className="text-gray-300 hover:text-white transition-colors duration-200">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">General Check-ups</li>
              <li className="text-gray-300">Specialist Consultations</li>
              <li className="text-gray-300">Preventive Care</li>
              <li className="text-gray-300">Emergency Care</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 HealthCare Clinic. All rights reserved. | 
            <span className="text-primary-400 font-medium ml-1">📞 (555) 123-4567</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
