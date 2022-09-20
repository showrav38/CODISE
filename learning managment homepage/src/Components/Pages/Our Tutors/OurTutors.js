import React from 'react';

const OurTutors = () => {
  return (
    <div>
      {/* recomended for you */}
      <div class="container pb-16 mt-11 mb-11 bg-white">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">Our Tutors</h2>
        {/* product wrapper */}
        <div class="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-white font-semibold text-center rounded-3xl max-w-xs border shadow-lg p-10 lg:md:ml-10">
            <div>
              <img
                class="mb-3 w-32 h-32 rounded-full mx-auto shadow-lg"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="product designer"
              />
            </div>
            <div>
              <h1 class="text-lg text-gray-700">John Doe</h1>
              <h3 class="text-sm text-gray-500">Creative Director</h3>
              <p class="text-xs text-gray-500 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button class="btn px-6 py-1 mt-8 rounded-3xl font-semibold uppercase">
                Contact
              </button>
            </div>
          </div>
          {/* single product */}
          <div class="bg-white font-semibold text-center rounded-3xl max-w-xs border shadow-lg p-10 lg:md:ml-5">
            <img
              class="mb-3 w-32 h-32 rounded-full mx-auto shadow-lg"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="product designer"
            />
            <h1 class="text-lg text-gray-700">John Doe</h1>
            <h3 class="text-sm text-gray-500">Creative Director</h3>
            <p class="text-xs text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="btn px-6 py-1 mt-8 rounded-3xl font-semibold uppercase">
              Contact
            </button>
          </div>
          {/* single product end */}
          {/* single product */}
          <div class="bg-white font-semibold text-center rounded-3xl max-w-xs border shadow-lg p-10">
            <img
              class="mb-3 w-32 h-32 rounded-full mx-auto shadow-lg"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="product designer"
            />
            <h1 class="text-lg text-gray-700">John Doe</h1>
            <h3 class="text-sm text-gray-500">Creative Director</h3>
            <p class="text-xs text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <button class="btn px-6 py-1 mt-8 rounded-3xl font-semibold uppercase">
              Contact
            </button>
          </div>
          {/* single product end */}
        </div>
        {/* product wrapper end */}
      </div>
      {/* recomended for you end  */}
    </div>
    /* <div>
      <div class="flex items-center justify-center container grid grid-cols-3 h-screen bg-gradient-to-br from-indigo-500 to-indigo-800">
        <div class="bg-white font-semibold text-center rounded-3xl max-w-xs border shadow-lg p-10">
          <img
            class="mb-3 w-32 h-32 rounded-full mx-auto shadow-lg"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="product designer"
          />
          <h1 class="text-lg text-gray-700">John Doe</h1>
          <h3 class="text-sm text-gray-500">Creative Director</h3>
          <p class="text-xs text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Hire Me
          </button>
        </div>
        <div class="bg-white font-semibold text-center rounded-3xl max-w-xs border shadow-lg p-10">
          <img
            class="mb-3 w-32 h-32 rounded-full mx-auto shadow-lg"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="product designer"
          />
          <h1 class="text-lg text-gray-700">John Doe</h1>
          <h3 class="text-sm text-gray-500">Creative Director</h3>
          <p class="text-xs text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Hire Me
          </button>
        </div>
        <div class="bg-white font-semibold text-center rounded-3xl max-w-xs border shadow-lg p-10">
          <img
            class="mb-3 w-32 h-32 rounded-full mx-auto shadow-lg"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="product designer"
          />
          <h1 class="text-lg text-gray-700">John Doe</h1>
          <h3 class="text-sm text-gray-500">Creative Director</h3>
          <p class="text-xs text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Hire Me
          </button>
        </div>
      </div>
    </div> */
  );
};

export default OurTutors;
