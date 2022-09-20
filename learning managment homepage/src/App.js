import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Footer from './Components/Pages/Footer/Footer';
import CustomerReview from './Components/Pages/CustomerReview/CustomerReview';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import AllCourses from './Components/Pages/AllCourses/AllCourses';
import Nav from './Components/Pages/Nav/Nav';
// import AllCourses from './Components/pages/AllCourses/AllCourses';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<AllCourses />} />
          <Route path="/review" element={<CustomerReview />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Banner/> */}
    </>
  );
}

export default App;
