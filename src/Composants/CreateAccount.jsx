import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from "../assets/Images/Image5.png";

const CreateAccount = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    country: '',
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Side */}
      <div
        className="w-full lg:w-1/2 relative bg-cover bg-center h-[300px] lg:h-auto"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-60 backdrop-blur-sm rounded-[20px] p-5 shadow-xl border border-white border-opacity-20 w-[90%] max-w-[500px] h-[200px] lg:w-[600px] lg:h-[550px] flex flex-col justify-center items-center">
          <h1 className="text-[40px] lg:text-[80px] drop-shadow-md text-center">
            <span className="text-[#3252DF]">Lanka</span>
            <span className="text-[#152C5B]">Stay.</span>
          </h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 md:py-0 py-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-2">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1">E-mail</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@gmail.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block mb-1">Phone No</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="With Country Code"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block mb-1">Country</label>
                <Field
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Username */}
              <div>
                <label htmlFor="username" className="block mb-1">Username</label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block mb-1">Password</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="6+ characters"
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Terms and Submit */}
              <div className="text-sm text-gray-500">
                By signing up you agree to <span className="text-blue-600 underline cursor-pointer">terms and conditions</span> at zoho.
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
              >
                <a href="/Register" className="block w-full text-center">Register</a>
              </button>

              <div className="text-center text-sm mt-2">
                <a href="/Login" className="underline text-black">Login</a>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
