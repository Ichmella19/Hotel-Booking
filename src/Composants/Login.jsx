import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from "../assets/Images/Image5.png";
import { Link } from 'react-router-dom';

const Login = () => {
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Form data', values);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left Side */}
      <div
        className="w-full lg:w-1/2 relative bg-cover bg-center h-[300px] lg:h-auto"
        style={{
          backgroundImage: `url(${Image})`,
        }}
      >
        <div className="absolute md:top-[40%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-60 backdrop-blur-sm rounded-[20px] p-5 shadow-xl border border-white border-opacity-20 w-[90%] max-w-[600px] h-[200px] lg:w-[600px] lg:h-[400px] flex flex-col justify-center items-center">
          <h1 className="text-[40px] lg:text-[80px] drop-shadow-md text-center">
            <span className="text-[#3252DF]">Lanka</span>
            <span className="text-[#152C5B]">Stay.</span>
          </h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login Account</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="space-y-4">
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

              {/* Terms */}
              <div className="text-sm text-gray-500">
                By signing up you agree to <span className="text-blue-600 underline cursor-pointer">terms and conditions</span> at zoho.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
              >
                <Link to="/SucessLogin" className="block w-full text-center">Login</Link>
              </button>

              {/* Link to Create Account */}
              <div className="text-center text-sm mt-2">
                <a href="/CreateAccount" className="underline text-black">Create an account</a>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
