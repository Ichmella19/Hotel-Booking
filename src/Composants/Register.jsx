import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      country: '',
      nic: '',
      username: '',
      password: '',
      hotelName: '',
      registrationNo: '',
      address: '',
      images: '',
      documents: '',
      facilities: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      phone: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
      nic: Yup.string().required('Required'),
      username: Yup.string().required('Required'),
      password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
      hotelName: Yup.string().required('Required'),
      registrationNo: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      images: Yup.string().required('Required'),
      documents: Yup.string().required('Required'),
      facilities: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      console.log('Form data:', values);
    },
  });

  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-4">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white p-4 rounded-lg  w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* User Info */}
        <div className="flex flex-col gap-4 border-r md:pr-6">
          <h2 className="text-3xl font-bold text-[#3252DF]">Lanka<span className="text-black">Stay.</span></h2>

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="border rounded px-3 py-2 w-full"
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">E mail</label>
            <input
              name="email"
              type="email"
              placeholder="name@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border rounded px-3 py-2 w-full"
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Phone No</label>
            <input
              name="phone"
              type="text"
              placeholder="With Country Code"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Country</label>
            <input
              name="country"
              type="text"
              placeholder="Country Name"
              onChange={formik.handleChange}
              value={formik.values.country}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">NIC</label>
            <input
              name="nic"
              type="text"
              placeholder="National Identity Card"
              onChange={formik.handleChange}
              value={formik.values.nic}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              name="username"
              type="text"
              placeholder="Username"
              onChange={formik.handleChange}
              value={formik.values.username}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              name="password"
              type="password"
              placeholder="6+ characters"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="border rounded px-3 py-2 w-full"
            />
          </div>
        </div>

        {/* Hotel Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-black mb-2">Register Your Hotel</h2>

          <div>
            <label className="block text-sm font-medium">Hotel Name</label>
            <input
              name="hotelName"
              type="text"
              placeholder="Full Name"
              onChange={formik.handleChange}
              value={formik.values.hotelName}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Registration No</label>
            <input
              name="registrationNo"
              type="text"
              placeholder="PVT(ltd)"
              onChange={formik.handleChange}
              value={formik.values.registrationNo}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              name="address"
              type="text"
              placeholder="Location"
              onChange={formik.handleChange}
              value={formik.values.address}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Images</label>
            <input
              name="images"
              type="text"
              placeholder="Upload"
              onChange={formik.handleChange}
              value={formik.values.images}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Upload Documents</label>
            <input
              name="documents"
              type="text"
              placeholder="Upload"
              onChange={formik.handleChange}
              value={formik.values.documents}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Facilities</label>
            <input
              name="facilities"
              type="text"
              placeholder="Describe"
              onChange={formik.handleChange}
              value={formik.values.facilities}
              className="border rounded px-3 py-2 w-full"
            />
          </div>

          <button type="submit" className="bg-[#3252DF] text-white py-2 rounded w-full mt-2">
         <a href="/SucessRegister" >Register</a>
          </button>
     
           <a href="/Login" className="underline text-sm text-center mt-1 cursor-pointer text-[#3252DF]">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
