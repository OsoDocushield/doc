const Features = () => {
  const features = [
    {
      "icon": "flaticon-shopping-cart-1",
      "text": "Free Delivery",
      "title": "Free Delivery"
    },
    {
      "icon": "flaticon-good",
      "text": "100% CUSTOMER",
      "title": "Feedbacks"
    },
    {
      "icon": "flaticon-return-1",
      "text": "10 DAYS",
      "title": "For Free Return"
    },
    {
      "icon": "flaticon-return",
      "text": "PAYMENT",
      "title": "Secure System     "
    },
    {
      "icon": "flaticon-customer-service",
      "text": "24/7",
      "title": "Online Supports"
    }
  ]
  return (
    <section className="features-area box-90">
      <div className="container-fluid">
        <div className="theme-soft-bg fix pt-100 pb-50">
          <div className="row">
            <div className="col-xl-12">
              <div className="area-title text-center mb-50">
                <h2>Special Features</h2>
                <p>Get special services from our shop.</p>
              </div>
            </div>
          </div>
          <div className="features">
            {features &&
              features.map((feature, i) => (
                <div
                  className="single-seatures width-20 mb-50 text-center"
                  key={i}
                >
                  <i className={feature.icon} />
                  <span>{feature.text}</span>
                  <h3>{feature.title}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
