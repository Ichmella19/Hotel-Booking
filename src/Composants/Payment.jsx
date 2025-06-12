import React from 'react';

const Payment = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      {/* Step Indicator */}
      <div className="flex justify-center items-center mb-10 space-x-6">
        <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="bg-gray-300 text-black rounded-full w-10 h-10 flex items-center justify-center font-medium">3</div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-1">Payment</h2>
      <p className="text-center text-gray-500 mb-10">Kindly follow the instructions below</p>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Payment Info Text */}
        <div className="md:w-1/2 border-r border-gray-300 pr-6">
          <p className="text-gray-600 mb-2">
            Transfer LankaStay:
          </p>
          <p className="text-gray-800 font-medium mb-1">
            2 Days at Blue Origin Fams,<br />
            Galle, Sri Lanka
          </p>
          <p className="mt-4 text-lg">
            Total: <span className="font-bold text-black">$400 USD</span>
          </p>
          <p className="text-lg">
            Initial Payment: <span className="text-blue-600 font-semibold">$200</span>
          </p>
        </div>

        {/* Payment Form */}
        <div className="md:w-1/2">
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Card Number</label>
            <input
              type="text"
              placeholder="Payment card number"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Bank</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select Bank</option>
              <option>Bank of Lanka</option>
              <option>Commercial Bank</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">Exp Date</label>
            <input
              type="text"
              placeholder="Validation date"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-700 mb-1">CVV</label>
            <input
              type="text"
              placeholder="Beside the card"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition">
            <a href="/PaymentSucess">Pay Now</a>
            </button>
            <button className="w-full sm:w-auto bg-gray-100 text-gray-400 px-8 py-3 rounded cursor-not-allowed">
            <a href="/Booking">Cancel</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
