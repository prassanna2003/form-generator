// src/components/FormGenerator.tsx

import React, { useState } from 'react';
import { FieldError, useForm } from 'react-hook-form';

interface FormGeneratorProps {
  schema: any;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    setIsSubmitting(true);  // Set submitting state to true when form is submitted
    setIsSuccess(false);  // Reset success message
    console.log('Form data submitted: ', data);

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);  // Reset submitting state
      setIsSuccess(true);  // Show success message after submission
    }, 1000);
  };

  if (!schema || !schema.fields) {
    return <div>No schema provided or incorrect format.</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Form Title and Description */}
      {schema.formTitle && <h2 className="text-2xl font-bold">{schema.formTitle}</h2>}
      {schema.formDescription && <p className="text-lg text-gray-600">{schema.formDescription}</p>}

      {schema.fields.map((field: any) => {
        const { id, label, required, placeholder, type, options, validation } = field;

        // Handle different input types dynamically
        let inputElement;
        switch (type) {
          case 'email':
            inputElement = (
              <input
                type="email"
                {...register(id, {
                  required,
                  pattern: validation?.pattern && new RegExp(validation.pattern),
                })}
                placeholder={placeholder || ''}
                className="p-2 border rounded-md w-full"
              />
            );
            break;

          case 'select':
            inputElement = (
              <select
                {...register(id, { required })}
                className="p-2 border rounded-md w-full"
              >
                <option value="">Select an option</option>
                {options?.map((option: any) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            );
            break;

          case 'radio':
            inputElement = (
              <div className="space-x-4">
                {options?.map((option: any) => (
                  <label key={option.value} className="inline-flex items-center">
                    <input
                      type="radio"
                      value={option.value}
                      {...register(id, { required })}
                      className="mr-2"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            );
            break;

          case 'textarea':
            inputElement = (
              <textarea
                {...register(id, { required })}
                placeholder={placeholder || ''}
                className="p-2 border rounded-md w-full"
              />
            );
            break;

          default:
            inputElement = (
              <input
                type="text"
                {...register(id, { required })}
                placeholder={placeholder || ''}
                className="p-2 border rounded-md w-full"
              />
            );
        }

        return (
          <div key={id}>
            {label && <label className="block mb-2 text-lg">{label}</label>}
            {inputElement}
            {errors[id] && (
  <span className="text-red-500 text-sm">
    {(errors[id] as FieldError)?.message || 'This field is required'}
  </span>
)}

          </div>
        );
      })}

      {/* Submit Button */}
      <button
        type="submit"
        className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded-md w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>

      {/* Success Message */}
      {isSuccess && <p className="mt-4 text-green-500">Form submitted successfully!</p>}
    </form>
  );
};

export default FormGenerator;
