import { useState } from 'react'
import EducationForm from './EducationForm'

const EducationModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null

  const handleSubmit = (data) => {
    if (onSubmit) {
      onSubmit(data)
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Education Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Please share your current educational status and future plans to help us better understand your needs.
          </p>
          
          <EducationForm 
            onSubmit={handleSubmit}
            submitButtonText="Submit Education Details"
          />
        </div>
      </div>
    </div>
  )
}

export default EducationModal
