import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useContext, useState } from "react";
import InputGroup from "../src/components/form/InputGroup";
import { AuthContext } from "../src/context/AuthContext";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import toast from "react-hot-toast";
import { API_URL } from "../utils/utils";

const Login = ({ isRedirectFromCheckout }) => {
    const [loading, setLoading] = useState(true)
    const [reqProcessing, setReqProcessing] = useState(false)
    const [userData, setUserData] = useState({
        identifier: '', password: ''
    })

    const auth = useContext(AuthContext);
    const router = useRouter()

    useEffect(() => {
        if (auth.user?.jwt) {
            if (isRedirectFromCheckout) {
                router.push('/checkout')
            } else {
                router.push('/')
            }
        }
        setLoading(false)
    }, [auth.user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setReqProcessing(true)

        let res = await fetch(`${API_URL}/api/auth/local`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        res = await res.json()

        if (res.error) {
            if (res.error.name === 'ValidationError') {
                toast.error(res.error.details?.errors[0]?.message || 'Error')
            } else {
                toast.error(res.error.message || 'Error')
            }
        } else if (res.jwt) {
            auth.login(res)
        } else {
            toast.error('Error: Please try after a minute')
        }
        setReqProcessing(false)
    }
    return (
        <Layout >
            <main>
                {!loading && (
                    <>
                        <PageTitle active="login" pageHeading="Login" />
                        <section className="login-area pt-100 pb-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2">
                                        <div className="basic-login">
                                            <h3 className="text-center mb-60">Login From</h3>
                                            <form onSubmit={handleSubmit}>
                                                <InputGroup
                                                    label="Username"
                                                    id="username"
                                                    name="username"
                                                    type="string"
                                                    placeholder="Enter Username ..."
                                                    values={userData.identifier}
                                                    errors={''}
                                                    handleBlur={() => { }}
                                                    handleChange={(e) => { setUserData({ ...userData, identifier: e.target.value }) }}
                                                />
                                                <InputGroup
                                                    label="Password"
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    placeholder="Enter password..."
                                                    values={userData.password}
                                                    errors={''}
                                                    handleBlur={() => { }}
                                                    handleChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
                                                />
                                                <button
                                                    className="btn theme-btn-2 w-100"
                                                    disabled={reqProcessing}
                                                >
                                                    Login Now
                                                </button>
                                                <div className="or-divide">
                                                    <span>or</span>
                                                </div>
                                                <Link href="/register">
                                                    <a className="btn theme-btn w-100">Register Now</a>
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </main>
        </Layout>
    );
};

export default Login;

export async function getServerSideProps(context) {
    console.log({ context })
    let redirectFrom = context?.req?.headers?.referer || ''
    return {
        props: {
            isRedirectFromCheckout: redirectFrom.includes('checkout')
        }
    }
}

