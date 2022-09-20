import React from 'react';
// import { NavLink } from 'react-router-dom';
import './ncon.css';
const Contact = () => {
  return (
    <div className="container bg-white my-4">
      <h2 class="text-2xl text-left md:text-3xl font-medium text-gray-800 uppercase mb-4">
        Contact Us
      </h2>
      <div className="grid grid-cols-12">
        <div className="md:lg:col-span-5 col-span-12 p-4">
          <h1 className="p-3 mt-12 text-4xl">Get In Touches</h1>
          <p className="p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, voluptatum
            assumenda ullam, dicta quidem veritatis quod illum, enim voluptatibus aliquam officia
            nobis voluptate commodi deserunt debitis soluta nihil explicabo in?
          </p>
          <hr className="trt" />
          <div>
            <div className="flex pt-4">
              <i class="fas fa-location-arrow ml-3 mt-1"></i>
              <p className="ml-3">1717 harrison St, San Fransico,CA 94103,USA</p>
            </div>
            <div className="flex">
              <i class="fas fa-phone ml-3 mt-1"></i>
              <p className="ml-3">123-123-1234</p>
            </div>
          </div>
        </div>
        <div className="md:lg:col-span-5 col-span-12">
          <div className="flex">
            <form action="#" class="w-full md:w-3/4 lg:w-3/6 p-4">
              <div className="md:lg:flex">
                <div class="p-3 md:lg:mt-16 ">
                  <input
                    class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-9/10 py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                    type="text"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div class="p-3 md:lg:mt-16">
                  <input
                    class="appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                    type="text"
                    placeholder="FullName"
                    required
                  />
                </div>
              </div>

              <div class="pl-3">
                <textarea
                  class="resize-none p-3
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-light-blue-400 rounded-md
        transition
        ease-in-out
        m-0
        lst
        focus:outline-none focus:ring-2 focus:ring-light-blue-300
      "
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div class="p-3 pb-16 mt-4 ">
                <button class="w-32 btn  text-white font-bold py-2 px-2 rounded uppercase">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-6 md:grid-cols-6 grid-cols-1">
        <div className="col-span-2 flex">
          <h1 className="text-3xl">Get In Touch</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo ab totam doloribus, sit qui et tenetur reiciendis minus corrupti magni, iste voluptatibus mollitia impedit provident aliquam aperiam at numquam.</p>
        </div>
        <div class="col-span-4">
          <div className="flex h-screen">
            <form action="#" class="w-full md:w-3/4 lg:w-3/6 p-4">
              <div className="flex">
                <div class="p-3 mt-8">
                  <input
                    class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-40 py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                    type="text"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div class="p-3 mt-8">
                  <input
                    class="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-40 py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                    type="text"
                    placeholder="FullName"
                    required
                  />
                </div>
              </div>

              <div class="pl-3">
                <textarea
                  style={{ width: '100%' }}
                  class="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-32"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div class="p-3 pb-16 ">
                <button class="w-32 btn  text-white font-bold py-2 px-2 rounded uppercase">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
