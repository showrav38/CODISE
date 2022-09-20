import React from 'react';

const WhatWeOffer = () => {
  return (
    <div className="container bg-white mt-10">
      <h2 class="text-2xl text-left md:text-3xl font-medium text-gray-800 uppercase">
        What We Offer
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4">
        <div className="lg:my-8 my-3 md:my-7">
          <div className="flex justify-center h-24 mt-8">
            <img src="images/icons/online.svg" alt="" />
          </div>
          <h2 className="text-2xl font-semibold text-center mt-4">Online Education</h2>
          <p className="text-xl text-gray-600 font-light text-center my-4">
            Teachzy provides online education services with all learning materials and lectures
            available to you.
          </p>
        </div>
        <div className="lg:my-8 my-3 md:my-7">
          <div className="flex justify-center h-24 mt-8">
            <img src="images/icons/program.svg" alt="" />
          </div>
          <h2 className="text-2xl font-semibold text-center mt-4">Programs & Courses</h2>
          <p className="text-xl text-gray-600 font-light text-center my-4">
            Teachzy provides online education services with all learning materials and lectures
            available to you.
          </p>
        </div>
        <div className="lg:my-8 my-3 md:my-7">
          <div className="flex justify-center h-24 mt-8">
            <img src="images/icons/campus.svg" alt="" />
          </div>
          <h2 className="text-2xl font-semibold text-center mt-4">Campus Events</h2>
          <p className="text-xl text-gray-600 font-light text-center my-4">
            Teachzy provides online education services with all learning materials and lectures
            available to you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
