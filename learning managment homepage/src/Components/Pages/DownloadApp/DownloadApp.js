import React from 'react';
import './DownApp.css';
const DownloadApp = () => {
  return (
    <div className="container bg-white my-4">
      <div className="grid grid-cols-12">
        <div className="md:lg:col-span-8 col-span-12 py-14">
          <h2 className="text-l">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ex. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Et, dicta!
          </h2>
        </div>
        <div className="md:lg:col-span-4 col-span-12 flex items-center mr-auto md:lg:ml-60 mar">
          <button className="btn flex justify-center items-center mx-auto text-white py-3 mb-3 mt-4 text-sm w-36 font-medium rounded-md">
            Download the app
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
