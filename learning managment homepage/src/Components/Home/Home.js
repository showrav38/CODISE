import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Contact from '../Pages/Contact/Contact';

import Testim from '../Pages/Testim/Testim';
import TopCourses from '../Pages/Top Courses/TopCourses';

import DownloadApp from '../Pages/DownloadApp/DownloadApp';

import About from '../Pages/About/About';

const Home = () => {
  return (
    <div>
      <Banner />

      <TopCourses />
      <About />

      <Testim />
      <Contact />
      <DownloadApp />
    </div>
  );
};

export default Home;
