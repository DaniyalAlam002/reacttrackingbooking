import { useState } from 'react'
import EducationForm from '../components/EducationForm'

const Booking = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    dateOfBirth: '',
    age: '',
    
    // Appointment Details
    appointmentDate: '',
    appointmentTime: '',
    appointmentType: '',
    preferredDoctor: '',
    
    // Medical Information
    medicalHistory: '',
    currentMedications: '',
    allergies: '',
    symptoms: '',
    
    // Insurance & Documents
    insuranceProvider: '',
    insuranceNumber: '',
    emergencyContact: '',
    
    // Preferences
    preferredLanguage: '',
    specialRequirements: '',
    
    // Agreements
    privacyPolicy: false,
    termsOfService: false,
    appointmentReminders: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // alert('Thank you! Your appointment has been booked successfully. We will contact you to confirm the details.')
    // Reset form
    // setFormData({
    //   firstName: '', lastName: '', email: '', password: '', phone: '', dateOfBirth: '', age: '',
    //   appointmentDate: '', appointmentTime: '', appointmentType: '', preferredDoctor: '',
    //   medicalHistory: '', currentMedications: '', allergies: '', symptoms: '',
    //   insuranceProvider: '', insuranceNumber: '', emergencyContact: '',
    //   preferredLanguage: '', specialRequirements: '',
    //   privacyPolicy: false, termsOfService: false, appointmentReminders: false
    // })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600">
            Fill out the form below to schedule your appointment with our healthcare professionals.
          </p>
          
          {/* Phone Number Display */}
          <div className="mt-6 p-4 bg-primary-50 rounded-lg inline-block">
            <p className="text-lg font-semibold text-primary-600">📞 Need help? Call us:</p>
            <p className="text-2xl font-bold text-gray-900">+1 206-707-6776</p>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="card space-y-8">
          {/* Personal Information Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter your last name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Create a password"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter your age"
                  min="0"
                  max="120"
                />
              </div>
            </div>
          </div>

          {/* Appointment Details Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Appointment Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <input
                  type="time"
                  id="appointmentTime"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
              </div>

              <div>
                <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Type *
                </label>
                <select
                  id="appointmentType"
                  name="appointmentType"
                  value={formData.appointmentType}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Select appointment type</option>
                  <option value="general-checkup">General Check-up</option>
                  <option value="consultation">Consultation</option>
                  <option value="follow-up">Follow-up</option>
                  <option value="emergency">Emergency</option>
                  <option value="specialist">Specialist Visit</option>
                  <option value="lab-work">Lab Work</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredDoctor" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Doctor
                </label>
                <select
                  id="preferredDoctor"
                  name="preferredDoctor"
                  value={formData.preferredDoctor}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">No preference</option>
                  <option value="dr-smith">Dr. Sarah Smith</option>
                  <option value="dr-johnson">Dr. Michael Johnson</option>
                  <option value="dr-williams">Dr. Emily Williams</option>
                  <option value="dr-brown">Dr. David Brown</option>
                </select>
              </div>
            </div>
          </div>

          {/* Medical Information Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Medical Information
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="medicalHistory" className="block text-sm font-medium text-gray-700 mb-2">
                  Medical History
                </label>
                <textarea
                  id="medicalHistory"
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleInputChange}
                  rows={4}
                  className="input-field"
                  placeholder="Please describe any relevant medical history, surgeries, or chronic conditions"
                />
              </div>

              <div>
                <label htmlFor="currentMedications" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Medications
                </label>
                <textarea
                  id="currentMedications"
                  name="currentMedications"
                  value={formData.currentMedications}
                  onChange={handleInputChange}
                  rows={3}
                  className="input-field"
                  placeholder="List any medications you are currently taking"
                />
              </div>

              <div>
                <label htmlFor="allergies" className="block text-sm font-medium text-gray-700 mb-2">
                  Allergies
                </label>
                <textarea
                  id="allergies"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleInputChange}
                  rows={3}
                  className="input-field"
                  placeholder="List any allergies (medications, foods, environmental, etc.)"
                />
              </div>

              <div>
                <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
                  Current Symptoms
                </label>
                <textarea
                  id="symptoms"
                  name="symptoms"
                  value={formData.symptoms}
                  onChange={handleInputChange}
                  rows={4}
                  className="input-field"
                  placeholder="Describe your current symptoms and reason for visit"
                  required
                />
              </div>
            </div>
          </div>

          {/* Insurance & Documents Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Insurance & Documents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="insuranceProvider" className="block text-sm font-medium text-gray-700 mb-2">
                  Insurance Provider
                </label>
                <input
                  type="text"
                  id="insuranceProvider"
                  name="insuranceProvider"
                  value={formData.insuranceProvider}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter insurance provider name"
                />
              </div>

              <div>
                <label htmlFor="insuranceNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Insurance Number
                </label>
                <input
                  type="text"
                  id="insuranceNumber"
                  name="insuranceNumber"
                  value={formData.insuranceNumber}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Enter insurance policy number"
                />
              </div>

              <div>
                <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-2">
                  Emergency Contact
                </label>
                <input
                  type="text"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Name and phone number of emergency contact"
                />
              </div>

              <div>
                <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Documents
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  name="fileUpload"
                  className="input-field"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Upload medical records, insurance cards, or other relevant documents
                </p>
              </div>
            </div>
          </div>

          {/* Preferences Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Preferences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredLanguage" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Language
                </label>
                <select
                  id="preferredLanguage"
                  name="preferredLanguage"
                  value={formData.preferredLanguage}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requirements
                </label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={3}
                  className="input-field"
                  placeholder="Any special accommodations or requirements needed"
                />
              </div>
            </div>
          </div>

          {/* Agreements Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Agreements & Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="privacyPolicy" className="text-sm text-gray-700">
                  I have read and agree to the <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a> *
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="termsOfService"
                  name="termsOfService"
                  checked={formData.termsOfService}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="termsOfService" className="text-sm text-gray-700">
                  I agree to the <a href="#" className="text-primary-600 hover:underline">Terms of Service</a> *
                </label>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="appointmentReminders"
                  name="appointmentReminders"
                  checked={formData.appointmentReminders}
                  onChange={handleInputChange}
                  className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="appointmentReminders" className="text-sm text-gray-700">
                  Send me appointment reminders via email and SMS
                </label>
              </div>
            </div>
          </div>

         

          {/* Submit Button */}
          <div className="pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="btn-primary w-full text-lg py-4"
            >
              Book Appointment
            </button>
            <p className="text-sm text-gray-500 text-center mt-3">
              By submitting this form, you agree to our terms and conditions.
            </p>
          </div>
        </form>
         {/* Education Details Section */}
         <div className='mt-10'>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
              Education Details
            </h2>
            <EducationForm 
              onSubmit={(data) => {
                console.log('Education data submitted:', data)
                // You can add this to formData if needed
              }}
              submitButtonText="Save Education Details"
            />
          </div>
      </div>
      
    </div>
  )
}

export default Booking
