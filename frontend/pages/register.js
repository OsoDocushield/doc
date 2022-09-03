import { Formik } from "formik";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import InputGroup from "../src/components/form/InputGroup";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { API_URL } from "../utils/utils";
import toast from "react-hot-toast";
import { AuthContext } from "../src/context/AuthContext";
import { useRouter } from "next/router";


const Register = () => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        username: '', email: '', password: ''
    })
    const auth = useContext(AuthContext);
    const router = useRouter()

    useEffect(() => {
        if (auth.user?.jwt) {
            router.push('/')
        }
    }, [auth.user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        let res = await fetch(`${API_URL}/api/auth/local/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
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
        setLoading(false)

    }
    return (
        <Layout >
            <main>
                <PageTitle active="register" pageHeading="Register" />
                <section className="login-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="basic-login">
                                    <h3 className="text-center mb-60">Signup From Here</h3>
                                    <form onSubmit={handleSubmit}>
                                        <InputGroup
                                            label="Username"
                                            id="username"
                                            name="username"
                                            type="string"
                                            placeholder="Enter Username ..."
                                            values={user.username}
                                            errors={''}
                                            handleBlur={() => { }}
                                            handleChange={(e) => { setUser({ ...user, username: e.target.value }) }}
                                        />
                                        <InputGroup
                                            label="Email Address"
                                            id="email"
                                            name="email"
                                            type="string"
                                            placeholder="Enter Email address..."
                                            values={user.email}
                                            errors={''}
                                            handleBlur={() => { }}
                                            handleChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                                        />
                                        <InputGroup
                                            label="Password"
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="Enter password..."
                                            values={user.password}
                                            errors={''}
                                            handleBlur={() => { }}
                                            handleChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                                        />
                                        <button
                                            className="btn theme-btn-2 w-100"
                                            disabled={loading}
                                        >
                                            Register Now
                                        </button>
                                        <div className="or-divide">
                                            <span>or</span>
                                        </div>
                                        <Link href="/login">
                                            <a className="btn theme-btn w-100">Login Now</a>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Register;
