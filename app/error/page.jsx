// components/ErrorPage.js
import React from 'react';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-2xl mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      {/* <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
      >
        Go back to Home
      </Link> */}
    </div>
  );
};

export default ErrorPage;