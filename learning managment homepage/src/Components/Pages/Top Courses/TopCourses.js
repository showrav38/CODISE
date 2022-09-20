import React from 'react';
import { Link } from 'react-router-dom';

const TopCourses = () => {
  return (
    <div>
      {/* recomended for you */}
      <div class="container pb-16 mt-11 mb-11 bg-white">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">Courses</h2>
        {/* product wrapper */}
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {/* single product */}
          <div class="group rounded bg-white shadow overflow-hidden">
            {/* product image */}
            <div class="relative">
              <img src="images/nistock.jpg" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="view.html"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* product image end */}
            {/* product content */}
            <div class="pt-4 pb-3 px-4">
              <a href="view.html">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition text-center">
                  Course-1
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2">
                <p class="font-roboto font-semibold text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi id facere
                  nihil mollitia atque?
                </p>
                {/* <p class="text-sm text-gray-400 font-roboto line-through">$55.00</p> */}
              </div>
              <div class="flex items-center text-center justify-center">
                <div class="flex gap-1 text-sm text-yellow-400 text-center">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            {/* product content end */}
            {/* product button */}
            {/* <a href="#" class="block btn w-full py-1 text-center text-white rounded-b">
              Add to Cart
            </a> */}
            {/* product button end */}
          </div>
          {/* single product end */}
          <div class="group rounded bg-white shadow overflow-hidden">
            {/* product image */}
            <div class="relative">
              <img src="images/nistock.jpg" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="view.html"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* product image end */}
            {/* product content */}
            <div class="pt-4 pb-3 px-4">
              <a href="view.html">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition text-center">
                  Course-1
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2">
                <p class="font-roboto font-semibold text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi id facere
                  nihil mollitia atque?
                </p>
                {/* <p class="text-sm text-gray-400 font-roboto line-through">$55.00</p> */}
              </div>
              <div class="flex items-center text-center justify-center">
                <div class="flex gap-1 text-sm text-yellow-400 text-center">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            {/* product content end */}
            {/* product button */}
            {/* <a href="#" class="block btn w-full py-1 text-center text-white rounded-b">
              Add to Cart
            </a> */}
            {/* product button end */}
          </div>
          {/* single product end */}
          <div class="group rounded bg-white shadow overflow-hidden">
            {/* product image */}
            <div class="relative">
              <img src="images/nistock.jpg" class="w-full" />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <a
                  href="view.html"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <i class="far fa-heart"></i>
                </a>
              </div>
            </div>
            {/* product image end */}
            {/* product content */}
            <div class="pt-4 pb-3 px-4">
              <a href="view.html">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition text-center">
                  Course-1
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2">
                <p class=" font-roboto font-semibold text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit commodi id facere
                  nihil mollitia atque?
                </p>
                {/* <p class="text-sm text-gray-400 font-roboto line-through">$55.00</p> */}
              </div>
              <div class="flex items-center text-center justify-center">
                <div class="flex gap-1 text-sm text-yellow-400 text-center">
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                  <span>
                    <i class="fas fa-star"></i>
                  </span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(150)</div>
              </div>
            </div>
            {/* product content end */}
            {/* product button */}
            {/* <a href="#" class="block btn w-full py-1 text-center text-white rounded-b">
              Add to Cart
            </a> */}
            {/* product button end */}
          </div>
        </div>
        {/* product wrapper end */}
        <div className='flex justify-center mt-6'>
          <Link
            to="/course"
            class="btn text-white px-8 py-3 font-medium rounded-md uppercase mr-4"
          >
            Explore More
          </Link>
        </div>
      </div>

      {/* recomended for you end  */}
    </div>
  );
};

export default TopCourses;
