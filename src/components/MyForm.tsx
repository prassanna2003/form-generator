// src/MyForm.tsx

import React from 'react';
import { useForm } from 'react-hook-form';

const MyForm = () => {
  // Initialize the form hook
  const { register, handleSubmit } = useForm();

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log(data);  // Log form data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name')}  // Register the input with react-hook-form
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
