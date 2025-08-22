import { useState } from 'react'

const EducationForm = ({ onSubmit, submitButtonText = "Submit Education Details" }) => {
  const [educationData, setEducationData] = useState({
    currentEducation: '',
    futurePlans: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEducationData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(educationData)
    }
    // Reset form after submission
    setEducationData({
      currentEducation: '',
      futurePlans: ''
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="currentEducation" className="block text-sm font-medium text-gray-700 mb-2">
          Current Education *
        </label>
        <textarea
          id="currentEducation"
          name="currentEducation"
          value={educationData.currentEducation}
          onChange={handleInputChange}
          rows={4}
          className="input-field"
          placeholder="Please describe your current educational status, degree, or program"
          required
        />
      </div>

      <div>
        <label htmlFor="futurePlans" className="block text-sm font-medium text-gray-700 mb-2">
          Future Plans *
        </label>
        <textarea
          id="futurePlans"
          name="futurePlans"
          value={educationData.futurePlans}
          onChange={handleInputChange}
          rows={4}
          className="input-field"
          placeholder="What are your educational or career goals for the future?"
          required
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="btn-primary w-full text-lg py-3"
      >
        {submitButtonText}
      </button>
    </div>
  )
}

export default EducationForm
