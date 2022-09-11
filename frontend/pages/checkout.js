// import swal from "@sweetalert/with-react";
import { Formik } from "formik";
import Router, { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import toast from "react-hot-toast";
import InputGroup from "../src/components/form/InputGroup";
import SelectGroup from "../src/components/form/SelectGroup";
import { AuthContext } from "../src/context/AuthContext";
import { CartContext } from "../src/context/CartConntext";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { setCheckoutData } from "../src/redux/action/utilis";
import { totalPrice } from "../src/utils/utils";
import {
    checkoutSchema,
    couponSchema,
    loginSchema,
} from "../src/utils/yupModal";
import { API_URL, PAYPAL_CLIENTID } from "../utils/utils";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const Checkout = ({ setCheckoutData }) => {

    const auth = useContext(AuthContext);
    const { cart, clear } = useContext(CartContext);
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [orderCretaed, setOrderCretaed] = useState(null)
    const [carts, setCarts] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        if (!auth.user?.jwt) {
            router.push('/login')
        }
    }, [auth.user])

    useEffect(() => {
        let _total = 0, _products = []
        Object.keys(cart).forEach(eId => {
            _products.push(cart[eId])
            _total = _total + Number(cart[eId].price) * Number(cart[eId].quantity)
        })
        setCarts(_products)
        setTotal(_total)
        setOrderData({ ...orderData, amount: _total, products: _products })
    }, [cart])


    const [freeShpping, setFreeShpping] = useState(false);
    const [flat, setFlat] = useState(false);
    const price = totalPrice(carts);
    let shppingPrice = 30,
        flatPrice = 7;

    function isAllFieldsValid() {
        let isValid = true
        if (orderData.first_name.replaceAll(' ', '') === '') {
            toast.error('First name field is required')
            isValid = false
        }
        if (orderData.last_name.replaceAll(' ', '') === '') {
            toast.error('Last name field is required')
            isValid = false
        }
        if (orderData.address.replaceAll(' ', '') === '') {
            toast.error('Address field is required')
            isValid = false
        }
        if (orderData.city.replaceAll(' ', '') === '') {
            toast.error('City field is required')
            isValid = false
        }
        if (orderData.zip.replaceAll(' ', '') === '') {
            toast.error('Zip field is required')
            isValid = false
        }
        if (orderData.phone.replaceAll(' ', '') === '') {
            toast.error('Phone field is required')
            isValid = false
        }
        if (orderData.state.replaceAll(' ', '') === '') {
            toast.error('state field is required')
            isValid = false
        }
        return isValid
    }


    const [orderData, setOrderData] = useState({
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        zip: '',
        phone: '',
        state: '',
        additional_notes: '',
        amount: 0,
        products: [],
    })
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        if (isAllFieldsValid()) {
            let res = await fetch(`${API_URL}/api/orders`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.user.jwt
                },
                body: JSON.stringify({ data: orderData })
            })
            res = await res.json()
            if (res?.id) {
                setOrderCretaed(res.id)
            }
        }
        setLoading(false)

    }

    return (
        <Layout >
            <main>
                <PageTitle active="Checkout" pageHeading="Checkout" />

                {Object.keys(cart).length === 0 ?
                    <div className="container">
                        <div className="row" style={{ justifyContent: 'center' }}>
                            <h3>0 Product added in cart</h3>
                        </div>
                    </div> :
                    <PayPalScriptProvider options={{ "client-id": PAYPAL_CLIENTID }}>
                        <section className="checkout-area pb-70">
                            <div className="container">
                                <form action="#" onSubmit={handleSubmit}>
                                    <div className="row" style={orderCretaed ? { justifyContent: 'center' } : {}}>
                                        <div className="col-lg-6" style={orderCretaed ? { display: 'none' } : {}}>
                                            <div className="checkbox-form">
                                                <h3>Billing Details</h3>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <InputGroup
                                                                name="first_name"
                                                                id="first_name"
                                                                label="First Name"
                                                                values={orderData.first_name}
                                                                handleChange={(e) => { setOrderData({ ...orderData, first_name: e.target.value }) }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <InputGroup
                                                                name="last_name"
                                                                id="last_name"
                                                                label="Last Name"
                                                                values={orderData.last_name}
                                                                handleChange={(e) => { setOrderData({ ...orderData, last_name: e.target.value }) }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <InputGroup
                                                                name="address"
                                                                id="address"
                                                                label="Address"
                                                                placeholder="Street address"
                                                                values={orderData.address}
                                                                handleChange={(e) => { setOrderData({ ...orderData, address: e.target.value }) }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="checkout-form-list">
                                                            <InputGroup
                                                                name="city"
                                                                id="city"
                                                                label="Town / City"
                                                                placeholder="Town / City"
                                                                values={orderData.city}
                                                                handleChange={(e) => { setOrderData({ ...orderData, city: e.target.value }) }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <InputGroup
                                                                name="state"
                                                                id="state"
                                                                label="State / County"
                                                                placeholder="State / County"
                                                                values={orderData.state}
                                                                handleChange={(e) => { setOrderData({ ...orderData, state: e.target.value }) }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <InputGroup
                                                                name="zip"
                                                                id="zip"
                                                                label="Postcode / Zip"
                                                                placeholder="Postcode / Zip"
                                                                values={orderData.zip}
                                                                handleChange={(e) => { setOrderData({ ...orderData, zip: e.target.value }) }}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="checkout-form-list">
                                                            <InputGroup
                                                                name="phone"
                                                                id="phone"
                                                                label="Phone"
                                                                values={orderData.phone}
                                                                handleChange={(e) => { setOrderData({ ...orderData, phone: e.target.value }) }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="different-address">
                                                    <div className="order-notes">
                                                        <div className="checkout-form-list">
                                                            <label>Order Notes</label>
                                                            <textarea
                                                                id="checkout-mess"
                                                                cols={30}
                                                                rows={10}
                                                                placeholder="Notes about your order, e.g. special notes for delivery."
                                                                value={orderData.additional_notes}
                                                                onChange={(e) => { setOrderData({ ...orderData, additional_notes: e.target.value }) }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="your-order mb-30 ">
                                                <h3>Your order</h3>
                                                <div className="your-order-table table-responsive">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th className="product-name">Product</th>
                                                                <th className="product-total">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {carts &&
                                                                carts.map((cart) => (
                                                                    <tr className="cart_item" key={cart.id}>
                                                                        <td className="product-name">
                                                                            {cart.name}{" "}
                                                                            <strong className="product-quantity">
                                                                                {" "}
                                                                                × {cart.quantity}
                                                                            </strong>
                                                                        </td>
                                                                        <td className="product-total">
                                                                            <span className="amount">
                                                                                ${Number(cart.price * cart.quantity).toFixed(2)}
                                                                            </span>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                        </tbody>
                                                        <tfoot>
                                                            <tr className="order-total">
                                                                <th>Order Total</th>
                                                                <td>
                                                                    <strong>
                                                                        {price && (
                                                                            <span className="amount">
                                                                                ${Number(total).toFixed(2)}
                                                                            </span>
                                                                        )}
                                                                    </strong>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                </div>
                                                <div className="payment-method">
                                                    <div className="order-button-payment mt-20">
                                                        {!orderCretaed && <button
                                                            type="submit"
                                                            className="btn theme-btn"
                                                            disabled={loading}
                                                        >
                                                            Place order
                                                        </button>}
                                                        {orderCretaed &&
                                                            <PayPalButtons
                                                                createOrder={(data, actions) => {
                                                                    return actions.order.create({
                                                                        purchase_units: [
                                                                            {
                                                                                amount: {
                                                                                    value: Number(total).toFixed(2),
                                                                                },
                                                                            },
                                                                        ]
                                                                    });
                                                                }}
                                                                onApprove={(data, actions) => {
                                                                    return actions.order.capture().then(({ id }) => {
                                                                        fetch(`${API_URL}/api/orders/${orderCretaed}`, {
                                                                            method: 'PUT',
                                                                            headers: {
                                                                                'Accept': 'application/json',
                                                                                'Content-Type': 'application/json',
                                                                                'Authorization': 'Bearer ' + auth.user.jwt
                                                                            },
                                                                            body: JSON.stringify({ transactionID: id })
                                                                        }).then(e => {
                                                                            // clear()
                                                                            router.push(`/order/${orderCretaed}`)
                                                                        }).catch(e => {
                                                                            toast.error('Transaction failed. Please try agin...')
                                                                        })
                                                                    })
                                                                }}
                                                                onError={(error) => {
                                                                    toast.error('Transaction failed. Please try agin...')
                                                                }}
                                                            />
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </PayPalScriptProvider>
                }

            </main >
        </Layout >
    );
};

export default Checkout
