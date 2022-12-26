import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="py-24 space-y-14 flex flex-col justify-center items-center">
      <div className="flex flex-col space-y-4 items-center">
        <h1 className="main-title">404</h1>
        <h1 className="main-title">Page was not found.</h1>
      </div>
      <p className="paragraph text-3xl">
        You might be looking for another page I guess.
        <br />
        You can click below and go back to the home page, I serve some bisqnpuites and drinks.
      </p>
      <Link href="/">
        <button className="classic-btn">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
