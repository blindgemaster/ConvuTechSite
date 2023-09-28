import React from "react";

const Home = () => {
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "266px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">ConvuTech</b>
                          <b className="is-hidden">We Design</b>
                          <b className="is-visible">We Implement</b>
                        </span>
                      </h1>
                      <div className="about-social-icon text-center">
                        <ul className="about-social">
                          <li className="wow fadeIn" data-wow-delay=".4s">
                            <a
                              href="https://www.linkedin.com/in/convutech"
                              target="newtab"
                            >
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".2s">
                            <a
                              href="https://github.com/convutech"
                              target="newtab"
                            >
                              <i
                                className="fa fa-github"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".6s">
                            <a
                              href="https://www.instagram.com/convutech/"
                              target="newtab"
                            >
                              <i
                                className="fa fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".8s">
                            <a
                              href="https://twitter.com/convutech"
                              target="newtab"
                            >
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay="1s">
                            <a
                              href="https://dev.to/convutech"
                              target="newtab"
                            >
                              <i className="fa fa-book" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>What we do</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        At ConvuTech, we're the architects of your digital dreams. We specialize in crafting exceptional website solutions, harnessing the power of chatbots for seamless customer engagement, designing captivating digital experiences, and deploying cutting-edge AI solutions that transform businesses. We're not just service providers; we're digital storytellers, weaving your brand's narrative into every pixel and line of code. Join us in the pursuit of innovation, design, and AI-driven excellence, and let's create unforgettable digital experiences together.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <i className="fa fa-pencil-square-o love-icon" aria-hidden="true"></i>
                      <h3>Exceptional Website Solutions</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>As digital architects, we specialize in crafting websites that exceed expectations and drive results.</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <i className="fa fa-file-image-o love-icon" aria-hidden="true"></i>
                      <h3>Seamless Chatbot Solutions</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>We harness the power of chatbots for seamless customer engagement and support, enhancing your brand's accessibility.</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <i className="fa fa-globe love-icon" aria-hidden="true"></i>
                      <h3>Captivating Digital Experiences</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>We design captivating digital experiences that tell your brand's story and engage your audience.</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".4s">
                      <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                      <h3>Cutting-Edge AI Solutions</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>We deploy cutting-edge AI solutions that transform businesses and drive innovation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>





        {/* <!-- ============================================== SERVICES ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Services List</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>

                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/design-development.jpg"
                          alt="design-development"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-edit service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Design + Development</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Clean, modern designs - optimized for performance,
                          search engines, and converting users to customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/e-commarce.jpg"
                          alt="e-commarce"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-cart-plus exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>eCommerce</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Integration of eCommerce platforms, payment gateways,
                          custom product templates, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/analytics.jpg"
                          alt="analytics"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-tachometer service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Analytics</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Get insights into who is browsing your site so that
                          you can make smarter business decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/mobile-friendly.jpg"
                          alt="mobile-friendly"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-desktop exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Mobile-friendly</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          A responsive design makes your website accessible to
                          all users, regardless of their device.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/website-audit.jpg"
                          alt="website-audit"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-search exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Website Rank</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Looking to improve your page performance, SEO, or user
                          experience? Request a free site audit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/content-management.jpg"
                          alt="content-management"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-file exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Content Management</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Custom theme and plugin development. Easily update
                          site content with knowledge of powerful code.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Testimonials</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            Our work speaks for itself, but don't just take our word for it. Hear from some of the clients we've had the privilege to partner with and witness the impact we've made together
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <section id="carousel">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <div className="quote">
                              <i className="fa fa-quote-left fa-4x"></i>
                            </div>
                            <div
                              className="carousel slide"
                              id="fade-quote-carousel"
                              data-ride="carousel"
                              data-interval="3000"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="active item">
                                  <blockquote>
                                    <p>
                                      “ConvuTech was a real pleasure to work with
                                      and we look forward to working with them
                                      again. They are definitely the kind of
                                      developers you can trust with a project
                                      from start to finish.”
                                      <br />
                                      <span>Will Howard</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Convutech offers clear communicator with the
                                      tenacity and confidence to really dig in
                                      to tricky design scenarios and the
                                      collaborative friction that's needed to
                                      produce excellent work.”
                                      <br />
                                      <span>Ahmed Jamil</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Convutech has done a fantastic job overall.
                                      Not only the site is to design, but the
                                      code is also very clean and slick. Love
                                      the way they achieved the translations
                                      portion of the site.”
                                      <br />
                                      <span>William Hill</span>
                                    </p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contact Us</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Ready to take the next step in enhancing your digital presence and achieving your business goals? We're here to help. Whether you have questions about our services, want to discuss a potential project, or simply want to connect with our passionate team, don't hesitate to reach out. Your journey to digital excellence starts with a conversation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  { }
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Address</h3>
                        <p>St Albans Rd, Leicester, LE2 1GE, United Kingdom</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:contact.enquiries@convutech.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          contact.enquiries@convutech.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Phone</h3>
                        <a
                          href="tel:00447985441644"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          +44 7985441644
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-television contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Portfolio</h3>
                        <p>https://convutech.github.io/</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid map-col">
                  <div class="col-md-12 col-sm-12 map-col">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
