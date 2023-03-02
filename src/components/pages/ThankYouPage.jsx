import React from 'react';
import { Link } from 'react-router-dom';

function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
      <p className="text-lg mb-8">Your payment was successful.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">Click here to return to the home page.</Link>
    </div>
  );
}

export default ThankYouPage;
