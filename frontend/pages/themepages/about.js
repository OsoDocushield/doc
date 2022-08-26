import { useState } from "react";
import Slider from "react-slick";
import VideoPopUp from "../src/components/VideoPopUp";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";

const About = () => {
  const [popup, setPopup] = useState(false);
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout sticky footerBg textCenter container>
      <main>
        <PageTitle pageHeading="About Us" active="About" />
        {popup && <VideoPopUp closePopup={() => setPopup(false)} />}
        <section className="about-area pt-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="section-title mb-25">
                  <p>
                    <span /> Community
                  </p>
                  <h1>Get Every Updates</h1>
                </div>
                <div className="about-community mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    ali qua. Ut enim ad minim veniam, quis nostrud exercit ation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor veniam.
                  </p>
                </div>
              </div>
              <div className="col-xl-7">
                <div className="about-community-text mb-30">
                  <p>
                    Vue is an Ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                  <p>
                    Korem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="overview text-center mt-90">
                  <p>
                    Vue helps artists, musicians, filmmakers, designers, and
                    other creators find the resources ideas a reality. To date,
                    tens of thousands of creative projects big and small have
                    come to life with the support of the vue special community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-area">
          <div className="bakix-video">
            <img src="img/bg/video.jpg" alt="Image" />
            <a className="popup-video" onClick={() => setPopup(true)} href="#">
              <i className="fas fa-play" />
            </a>
          </div>
        </section>
        <section className="mission-area pt-100 pb-70 ">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 d-lg-none d-xl-block">
                <div className="mission-img mb-30">
                  <img src="img/bg/mission.jpg" alt="Image" />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="mission-text mb-30">
                  <div className="mission-title mb-30">
                    <p>
                      <span /> Our Mission
                    </p>
                    <h1>
                      Our Mission Is To Help Bring Creative Project To Life.
                    </h1>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </p>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="big-team-area">
          <div className="big-image">
            <img src="img/bg/banner.jpg" alt="Banner" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="testimonial-active owl-carousel theme-bg">
                  <Slider {...settings}>
                    <div className="testimonial-item text-center">
                      <p>
                        “Vue is one of those platforms that gives you space to
                        work with people who know you, love you, and support
                        you.”
                      </p>
                      <span>- Salim Rana</span>
                    </div>
                    <div className="testimonial-item text-center">
                      <p>
                        “Vue is one of those platforms that gives you space to
                        work with people who know you, love you, and support
                        you.”
                      </p>
                      <span>- Jason Derula</span>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team-area start */}
        <section className="team-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="area-title text-center mb-50">
                  <h2>Awesome Team</h2>
                  <p>Our one of the best team members</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="team mb-30">
                  <div className="team__img">
                    <img src="img/team/team4.jpg" alt="Image" />
                  </div>
                  <div className="team__content text-center white-bg">
                    <h4>Salim Rana</h4>
                    <span>Founder</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team mb-30">
                  <div className="team__img">
                    <img src="img/team/team5.jpg" alt="Image" />
                  </div>
                  <div className="team__content text-center white-bg">
                    <h4>James Tablon</h4>
                    <span>Designer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="team mb-30">
                  <div className="team__img">
                    <img src="img/team/team6.jpg" alt="Image" />
                  </div>
                  <div className="team__content text-center white-bg">
                    <h4>Mikado Rikoda</h4>
                    <span>marketing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default About;
