import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
const Contact = () => {
  return (
    <Layout sticky>
      <main>
        <PageTitle active="Contact" pageHeading="Contact Us" />

        <section
          className="contact-area pt-120 pb-90"
          data-background="/assets/img/bg/bg-map.png"
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact text-center mb-30">
                  <i className="fas fa-envelope" />
                  <h3>Mail Here</h3>
                  <p>Admin@BasicTheme.com</p>
                  <p>Info@Themepur.com</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="contact text-center mb-30">
                  <i className="fas fa-map-marker-alt" />
                  <h3>Visit Here</h3>
                  <p>
                    27 Division St, New York, NY 10002, Jaklina, United Kingpung
                  </p>
                </div>
              </div>
              <div className="col-xl-4  col-lg-4 col-md-4 ">
                <div className="contact text-center mb-30">
                  <i className="fas fa-phone" />
                  <h3>Call Here</h3>
                  <p>+8 (123) 985 789</p>
                  <p>+787 878897 87</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-form-area grey-bg pt-100 pb-100">
          <div className="container">
            <div className="form-wrapper">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8">
                  <div className="section-title mb-55">
                    <p>
                      <span /> Anything On your Mind
                    </p>
                    <h1>Estimate Your Idea</h1>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-3 d-none d-xl-block ">
                  <div className="section-link mb-80 text-right">
                    <a
                      className="btn theme-btn"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-phone" /> make call
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <form
                  id="contact-form"
                  action="#"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-box user-icon mb-30">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-box email-icon mb-30">
                        <input
                          type="text"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-box phone-icon mb-30">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-box subject-icon mb-30">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Your Subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-box message-icon mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="contact-btn text-center">
                        <button className="btn theme-btn" type="submit">
                          get action
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <p className="ajax-response text-center" />
              </div>
            </div>
          </div>
        </section>
        {/* contact-form-area end */}
        <section className="map-area">
          <div id="contact-map" className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.1085069628666!2d90.42812861449441!3d23.707818884610447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b945a84ee027%3A0xec54e6d513238060!2sSabuj%20Hasan%20Sarker!5e0!3m2!1sen!2sbd!4v1629655323737!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
