import React from 'react';

const SmallFeature = () => {
  return (
    <div>
      {/* features  */}
      <div class="container py-16 mt-11 bg-white">
        <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
          {/* single feature */}
          <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
            <img src="images/icons/user.svg" class="lg:w-12 w-10 h-12 object-contain" />
            <div>
              <h4 class="font-medium capitalize text-lg">Quality Service</h4>
              <p class="text-gray-500 text-xs lg:text-sm">Best Service</p>
            </div>
          </div>

          <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
            <img src="images/icons/money-back.svg" class="lg:w-12 w-10 h-12 object-contain" />
            <div>
              <h4 class="font-medium capitalize text-lg">Money returns</h4>
              <p class="text-gray-500 text-xs lg:text-sm">30 Days money return</p>
            </div>
          </div>

          <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
            <img src="images/icons/service-hours.svg" class="lg:w-12 w-10 h-12 object-contain" />
            <div>
              <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
              <p class="text-gray-500 text-xs lg:text-sm">Student support</p>
            </div>
          </div>
          {/* single feature end */}
        </div>
      </div>
      {/* features end */}
    </div>
  );
};

export default SmallFeature;
