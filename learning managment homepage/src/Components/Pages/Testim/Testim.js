import React from 'react';
import '../Testim/Testim.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Testim = () => {
  const responsive = {
    1280: {
      items: 1,
    },
    600: {
      items: 1,
    },
    320: {
      items: 1,
    },
  };
  return (
    <div className="mb-10">
      <section id="our-testimonial" className="padding">
        <div className="container bg-white">
          <div className="grid grid-cols-1">
            <div className="text-center">
              <div className="heading-title bottom30 wow fadeInUp" data-wow-delay="300ms">
                {' '}
                <h2 class="text-2xl text-left md:text-3xl font-medium text-gray-800 uppercase">
                  Testimonials
                </h2>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div>
              <OwlCarousel
                items={3}
                loop={true}
                nav={true}
                dots={false}
                autoplay={true}
                autoplayTimeout="200000"
                navText={[
                  '<i class="fas fa-chevron-left"></i>',
                  '<i class="fas fa-chevron-right"></i>',
                ]}
                responsive={responsive}
                id="testimonial-slider"
                className="owl-carousel"
              >
                <div className="item">
                  <div className="testimonial-wrapp">
                    {' '}
                    <span className="quoted">
                      <i className="fa fa-quote-right" />
                    </span>
                    <div className="testimonial-text">
                      <p className="bottom40">
                        Nevertheless, it was only in the 20th century when food critics became
                        popular. Critics like Ruth Reichl and the promotion of newspapers like The
                        New York times brought criticism to the spotlight.
                      </p>
                      <hr className="" align="center" width="50%"></hr>
                    </div>
                    <div className="testimonial-photo">
                      <img alt="" src="images/testimonial-1.jpg" />
                    </div>
                    <h2 className="darkcolor text-xl">Sam David</h2>
                    <p className="defaultcolor mb-3">Businessman</p>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-wrapp">
                    {' '}
                    <span className="quoted">
                      <i className="fa fa-quote-right" />
                    </span>
                    <div className="testimonial-text">
                      <p className="bottom40">
                        Nevertheless, it was only in the 20th century when food critics became
                        popular. Critics like Ruth Reichl and the promotion of newspapers like The
                        New York times brought criticism to the spotlight.
                      </p>
                      <hr align="center" width="50%"></hr>
                    </div>
                    <div className="testimonial-photo">
                      <img alt="" src="images/testimonial-2.jpg" />
                    </div>
                    <h2 className="darkcolor text-xl">Jams Shah</h2>
                    <p className="defaultcolor mb-3">Businessman</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testim;
