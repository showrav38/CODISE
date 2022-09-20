import React from 'react';
import web from '../../../Assets/school.png';
import './Banner.css'
const Banner = () => {
  return (
    //  banner
    <div style={{ background: 'white' }}>
      <div className="grid grid-cols-12 ml-6">
        <div className="md:col-span-7 lg:col-span-7 col-span-12 ">
          <div
            class=" md:lg:py-36"
            /* style={{backgroundImage:"url('images/istock.jpg')"}} */
          >
            <div class="container pt-10">
              {/* banner content */}
              <h1 class="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
                Learning Management in <br class="hidden sm:block" /> New Way
              </h1>
              <p class="text-base text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa{' '}
                <br class="hidden sm:block" />
                assumenda aliquid inventore nihil laboriosam odio
              </p>
              {/* banner button */}
              <div class="mt-12">
                <a
                  href="shop.html"
                  class="btn text-white px-2 py-2 md:lg:px-8 md:lg:py-3 font-medium rounded-md uppercase mr-4 border "
                >
                  Register
                </a>
                <a
                  href="shop.html"
                  class="btn1 text-white md:lg:px-8 md:lg:py-3 font-medium rounded-md uppercase px-2 py-2"
                >
                  Call to Action
                </a>
              </div>
              {/* banner button end */}
            </div>
          </div>
        </div>
        <div className="md:col-span-5 lg:col-span-5 col-span-12 rder-first md:order-2 header-img animated mt-8 respb">
          <img src={web} style={{marginTop:'-10px'}} className="size mb-8 " alt="home img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
