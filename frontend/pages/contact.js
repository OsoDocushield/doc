import { useState } from "react";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import PreLoader from "../src/layouts/PreLoader";
import { API_URL } from "../utils/utils";
const initialValue = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
}
const Contact = ({ phone, address, emails, map_location }) => {
    const [queryData, setQeryData] = useState({ ...initialValue });
    const [loading, setLoading] = useState(false)
    function isAllFieldsValid() {
        let isValid = true
        if (queryData.name.replaceAll(' ', '') === '') {
            toast.error('Name field is required')
            isValid = false
        }
        if (queryData.email.replaceAll(' ', '') === '') {
            toast.error('email field is required')
            isValid = false
        }
        if (queryData.phone.replaceAll(' ', '') === '') {
            toast.error('phone field is required')
            isValid = false
        }
        if (queryData.subject.replaceAll(' ', '') === '') {
            toast.error('subject field is required')
            isValid = false
        }
        if (queryData.message.replaceAll(' ', '') === '') {
            toast.error('message field is required')
            isValid = false
        }
        return isValid
    }
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (isAllFieldsValid) {
            let res = await fetch(`${API_URL}/api/queries`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data: queryData })
            })
            res = await res.json()
            if (res?.id) {
                setOrderCretaed(res.id)
            }
        }
        setQeryData({ ...initialValue })
        setLoading(false)

    }
    return (
        <Layout>
            {loading && <PreLoader />}
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
                                    {emails && emails.split(':::').map(each =>
                                        <p key={each}>{each}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4">
                                <div className="contact text-center mb-30">
                                    <i className="fas fa-map-marker-alt" />
                                    <h3>Visit Here</h3>
                                    <p>
                                        {address}
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4  col-lg-4 col-md-4 ">
                                <div className="contact text-center mb-30">
                                    <i className="fas fa-phone" />
                                    <h3>Call Here</h3>
                                    {phone && phone.split(':::').map(each =>
                                        <p key={each}>{each}</p>
                                    )}
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
                                        <h1>Send Us Your Query</h1>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-3 d-none d-xl-block ">
                                    <div className="section-link mb-80 text-right">
                                        {/* <a
                                            className="btn theme-btn"
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <i className="fas fa-phone" /> make call
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="contact-form">
                                <form
                                    id="contact-form"
                                    action="#"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-box user-icon mb-30">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    value={queryData.name}
                                                    onChange={e => setQeryData({ ...queryData, name: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-box email-icon mb-30">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    placeholder="Your Email"
                                                    value={queryData.email}
                                                    onChange={e => setQeryData({ ...queryData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-box phone-icon mb-30">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Your Phone"
                                                    value={queryData.phone}
                                                    onChange={e => setQeryData({ ...queryData, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-box subject-icon mb-30">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Your Subject"
                                                    value={queryData.subject}
                                                    onChange={e => setQeryData({ ...queryData, subject: e.target.value })}
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
                                                    value={queryData.message}
                                                    onChange={e => setQeryData({ ...queryData, message: e.target.value })}
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="contact-btn text-center">
                                                <button className="btn theme-btn" type="submit">
                                                    Send
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
                            src={map_location}
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


export async function getServerSideProps(context) {
    let url = `${API_URL}/api/contact-us`

    let data = await fetch(url)
    data = await data.json()
    return {
        props: {
            ...data.data.attributes
        }
    }
}