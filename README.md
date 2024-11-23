# Dynamic Form Generator

A dynamic form generator built with React, TypeScript, React Hook Form, and Tailwind CSS. This application dynamically generates forms based on a JSON schema and displays submitted data in real-time. It’s a responsive app that adapts to different screen sizes, providing a seamless experience across devices.

## 🌐Live Application

You can view the live app here:  
👉[Live Application](https://form-generator-p9wahl216-prassannas-projects.vercel.app/)

## Features

- Dynamically generates forms based on JSON schemas.
- Supports various field types (text, email, select, radio, checkbox, textarea).
- Form validation using React Hook Form.
- Real-time form submission and preview.
- Fully responsive layout using Tailwind CSS.
- Easy-to-use JSON schema editor for form configuration.

## 🧩Example JSON Schemas

### Contact Form
```json
{
  "formTitle": "Contact Us",
  "formDescription": "We would love to hear from you. Please fill out the form below.",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com"
    },
    {
      "id": "message",
      "type": "textarea",
      "label": "Message",
      "required": true,
      "placeholder": "Your message here..."
    }
  ]
}
```
### User Registration Form
```json
{
  "formTitle": "User Registration",
  "formDescription": "Create your account by filling out the form below.",
  "fields": [
    {
      "id": "username",
      "type": "text",
      "label": "Username",
      "required": true,
      "placeholder": "Choose a username"
    },
    {
      "id": "password",
      "type": "password",
      "label": "Password",
      "required": true,
      "placeholder": "Create a strong password"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email",
      "required": true,
      "placeholder": "you@example.com"
    },
    {
      "id": "gender",
      "type": "radio",
      "label": "Gender",
      "required": true,
      "options": [
        {
          "value": "male",
          "label": "Male"
        },
        {
          "value": "female",
          "label": "Female"
        },
        {
          "value": "other",
          "label": "Other"
        }
      ]
    }
  ]
}
```
### Event Registration Form
```json
{
  "formTitle": "Event Registration",
  "formDescription": "Register for the event by filling out this form.",
  "fields": [
    {
      "id": "fullName",
      "type": "text",
      "label": "Full Name",
      "required": true,
      "placeholder": "Enter your full name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com"
    },
    {
      "id": "phone",
      "type": "text",
      "label": "Phone Number",
      "required": true,
      "placeholder": "Enter your phone number"
    },
    {
      "id": "eventType",
      "type": "select",
      "label": "Event Type",
      "required": true,
      "options": [
        {
          "value": "conference",
          "label": "Conference"
        },
        {
          "value": "webinar",
          "label": "Webinar"
        },
        {
          "value": "workshop",
          "label": "Workshop"
        }
      ]
    }
  ]
}
```
# Local Development Guide

Project Structure:
- src/: Contains the application source code, including components like FormGenerator.tsx and JSONEditor.tsx.
- public/: Contains public assets such as index.html and images.
- tailwind.config.js: The Tailwind CSS configuration file.
- package.json: The Node.js package configuration, including dependencies and scripts.

How to Modify:
- FormGenerator Component: Modify the src/components/FormGenerator.tsx file to handle additional field types or customize form generation.
- Tailwind CSS: Tailwind can be customized in the tailwind.config.js file for styling purposes.

Responsive Design:
- The app uses Tailwind CSS for styling and is designed to be mobile-responsive.
- Test the form on different devices to ensure proper layout and responsiveness.

# 🚀Deployment
The app is deployed on Vercel. You can view it live here:  
👉[Live Application](https://form-generator-p9wahl216-prassannas-projects.vercel.app/)

## 🛠️Technologies Used

- React: Library for building user interfaces.
- TypeScript: Provides static typing for improved code quality.
- React Hook Form: Simplifies form handling and validation.
- Tailwind CSS: Utility-first CSS framework for rapid UI development.
- Vercel: Deployment platform for fast, reliable hosting.

---

## **End of Documentation**

Feel free to contribute or report issues in the repository! 😊

---



