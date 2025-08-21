import { Link } from 'react-router-dom'

const About = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      specialty: 'Family Medicine',
      experience: '15+ years',
      education: 'Harvard Medical School',
      image: '👩‍⚕️',
      description: 'Dr. Smith specializes in comprehensive family care and preventive medicine. She believes in building long-term relationships with her patients.'
    },
    {
      id: 2,
      name: 'Dr. Michael Johnson',
      specialty: 'Cardiology',
      experience: '20+ years',
      education: 'Johns Hopkins University',
      image: '👨‍⚕️',
      description: 'Dr. Johnson is a board-certified cardiologist with expertise in heart disease prevention, diagnosis, and treatment.'
    },
    {
      id: 3,
      name: 'Dr. Emily Williams',
      specialty: 'Pediatrics',
      experience: '12+ years',
      education: 'Stanford Medical School',
      image: '👩‍⚕️',
      description: 'Dr. Williams is passionate about children\'s health and provides compassionate care for patients from birth through adolescence.'
    },
    {
      id: 4,
      name: 'Dr. David Brown',
      specialty: 'Internal Medicine',
      experience: '18+ years',
      education: 'Yale Medical School',
      image: '👨‍⚕️',
      description: 'Dr. Brown focuses on adult medicine and chronic disease management, helping patients maintain optimal health.'
    }
  ]

  const services = [
    'General Check-ups & Physicals',
    'Chronic Disease Management',
    'Preventive Care & Vaccinations',
    'Specialist Referrals',
    'Laboratory Services',
    'Imaging & Diagnostics',
    'Emergency Care',
    'Health Education & Counseling'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About HealthCare Clinic
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We are committed to providing exceptional healthcare services with compassion, 
            expertise, and a focus on patient-centered care. Our team of dedicated professionals 
            works together to ensure the best possible outcomes for our patients.
          </p>
          
          {/* Phone Number Display */}
          <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 inline-block">
            <p className="text-2xl font-bold text-primary-600 mb-2">📞 Contact Us</p>
            <p className="text-3xl font-bold text-gray-900">(555) 123-4567</p>
            <p className="text-gray-600">Available Mon-Fri 8AM-6PM</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-primary text-lg px-8 py-4">
              Book Your Appointment
            </Link>
            <Link to="/" className="btn-secondary text-lg px-8 py-4">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Values
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At HealthCare Clinic, our mission is to provide accessible, high-quality healthcare 
                that improves the lives of our patients and their families. We believe in treating 
                the whole person, not just the symptoms.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our values include compassion, excellence, integrity, and innovation. We are committed 
                to staying at the forefront of medical advances while maintaining the personal touch 
                that makes healthcare human.
              </p>
              
              {/* Phone Number Display */}
              <div className="bg-primary-50 rounded-lg p-4 inline-block">
                <p className="text-lg font-semibold text-primary-600">📞 Call for more information:</p>
                <p className="text-2xl font-bold text-gray-900">(555) 123-4567</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Compassion</h3>
                <p className="text-gray-600">We care for our patients with empathy and understanding</p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for the highest standards in medical care</p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">We maintain the highest ethical standards in all we do</p>
              </div>
              
              <div className="card text-center">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">We embrace new technologies and medical advances</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Medical Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of healthcare professionals is dedicated to providing you with 
              the highest quality medical care in a comfortable and welcoming environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="card text-center">
                <div className="text-6xl mb-4">{doctor.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-sm text-gray-600 mb-2">{doctor.experience} experience</p>
                <p className="text-sm text-gray-600 mb-4">{doctor.education}</p>
                <p className="text-gray-600 text-sm">{doctor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of healthcare services to meet the diverse needs 
              of our patients and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Book your appointment today and experience the difference that quality healthcare makes. 
            Our team is ready to help you on your journey to better health.
          </p>
          
          {/* Phone Number Display */}
          <div className="bg-white rounded-2xl p-6 shadow-xl mb-8 inline-block">
            <p className="text-2xl font-bold text-primary-600 mb-2">📞 Call us now:</p>
            <p className="text-3xl font-bold text-gray-900">(555) 123-4567</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg">
              Book Appointment Now
            </Link>
            <Link to="/" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
