import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav class="flex items-center justify-between flex-wrap  p-6 bg-white sticky top-0 z-10">
      <div class="flex items-center flex-shrink-0 text-black mr-6 ">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <Link to="/">
          <span class="font-semibold text-2xl tracking-tight text-black">School</span>
        </Link>
      </div>
      <div class="block lg:hidden">
        <button onClick={handleClick} class="flex items-center px-3 py-2 border rounded hamicon">
          <svg class="fill-current  h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="main-menu"
        class={`w-full lg:flex lg:items-center lg:w-auto ${isCollapsed ? 'hidden' : 'block'}`}
      >
        <div class="text-sm lg:flex-grow text-black text-2xl hover:text-darkorchid hover:border-darkorchid llink">
        <Link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-darkorchid hover:border-darkorchid text-black text-xl relative mr-8 hover:text-darkorchid hover:border-darkorchid llink"
          >
            Home
          </Link>
          <Link
            to="/about"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-darkorchid hover:border-darkorchid text-black text-xl relative mr-8 hover:text-darkorchid hover:border-darkorchid llink"
          >
            About Us
          </Link>
          <span className="ttt absolute"></span>
          <Link
            to="/course"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200  mr-8 text-black text-xl hover:text-darkorchid hover:border-darkorchid llink"
          >
            Course
          </Link>
          <span className="ttt absolute"></span>
          <Link
            to="/review"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-darkorchid hover:border-darkorchid mr-8 text-black text-xl llink"
          >
            Reviews
          </Link>
          <Link
            to="/contact"
            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-darkorchid hover:border-darkorchid text-black text-xxl relative text-black text-xl llink"
          >
            Contact US
          </Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
