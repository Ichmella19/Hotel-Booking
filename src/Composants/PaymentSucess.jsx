import React from 'react';
 import Group from "../assets/Images/group.png";
const PaymentSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-12">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-800 mb-8">Lanka<span className="text-gray-700">Stay.</span></h1>

      {/* Step Icons */}
      <div className="flex space-x-6 mb-10">
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Yay! Payment Completed
      </h2>

      {/* Illustration */}
      <div className="mb-6">
        <img
          src={Group} // Change ce chemin selon ton dossier
          alt="Payment Completed"
          className="w-60 h-auto rounded-full shadow-sm"
        />
      </div>

      {/* Message */}
      <p className="text-sm text-blue-700 text-center mb-2">
        Please check your email & phone message.<br />
        We have sent all the information
      </p>

      {/* Dashboard Link */}
      <a href="/UserDashboard" className='text-xs mt-8 text-gray-400 '>Go to Dashboard</a>
     
    </div>
  );
};

export default PaymentSuccess;
