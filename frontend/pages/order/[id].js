import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../src/context/AuthContext";
import Layout from "../../src/layouts/Layout";
import PageTitle from "../../src/layouts/PageTitle";
import { totalPrice } from "../../src/utils/utils";
import { API_URL, fromImageToUrl } from "../../utils/utils";

const OrderSuccess = ({ id }) => {
    const auth = useContext(AuthContext);
    const [orderData, setOrderData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            let url = `${API_URL}/api/orders/${id}?populate=*`
            const data = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.user.jwt
                }
            })
            let orderData = await data.json()
            setOrderData(orderData[0])
        }
        fetchData()
    }, []);
    const carts = [];
    const chcekoutData = [];
    let date = new Date();
    date.setDate(date.getDate() + 7);

    let randomNumber = `${Math.floor(Math.random() * 100000)}VUE${Math.floor(
        Math.random() * 100000
    )}`;

    return (
        <Layout>
            <main>
                <PageTitle
                    pageHeading={orderData ? "THANK YOU" : "Order Not Found"}
                    thankupage={orderData ? true : false}
                    active={orderData ? "order success" : "Order"}
                    id={orderData?.transactionID}
                />
                {orderData && (
                    <section className="cart-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    {/* <h4>Order Details : </h4> */}
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="table-content table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th className="product-thumbnail">Images</th>
                                                        <th className="cart-product-name">Product</th>
                                                        <th className="product-price">Unit Price</th>
                                                        <th className="product-quantity">Quantity</th>
                                                        <th className="product-subtotal">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orderData &&
                                                        orderData.products && orderData.products.map((each) => (
                                                            <tr key={each.id}>
                                                                <td className="product-thumbnail">
                                                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                                                        <img src={fromImageToUrl(each.images[0])} alt="cart" />
                                                                    </a>
                                                                </td>
                                                                <td className="product-name">
                                                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                                                        {each.name}
                                                                    </a>
                                                                </td>
                                                                <td className="product-price">
                                                                    <span className="amount">
                                                                        ${Number(each.price).toFixed(2)}
                                                                    </span>
                                                                </td>

                                                                <td className="product-price">
                                                                    <span className="amount">
                                                                        {Number(each.quantity)}
                                                                    </span>
                                                                </td>

                                                                <td className="product-subtotal">
                                                                    <span className="amount">
                                                                        ${Number(each.price * each.quantity).toFixed(2)}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="cart-page-total">
                                            <h2>Cart totals</h2>
                                            <ul className="mb-20">
                                                {/* <li>
                                                Subtotal <span>${totalPrice(carts)}</span>
                                            </li> */}
                                                <li>
                                                    Total <span>${orderData?.amount}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-6 order-success">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4>Summery :</h4>
                                            <p>
                                                <b>Order ID:</b> {orderData?.id}
                                            </p>
                                            <p>
                                                <b>Order Date:</b> {new Date(orderData?.createdAt).toLocaleString()}
                                            </p>
                                            <p>
                                                <b>Order Total:</b> ${orderData?.amount}
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <h4>Shipping Address</h4>
                                            <p className="text-capitalize">
                                                {orderData
                                                    ? `${orderData.first_name} ${orderData.last_name}`
                                                    : "Sabuj Hasan Sarker"}
                                            </p>
                                            <p>
                                                {orderData
                                                    ? `${orderData?.address} ${orderData?.state}`
                                                    : "Jatrabari,Dhaka-1204 Bangladesh"}
                                            </p>
                                            <p>
                                                Contact No.{" "}
                                                {orderData ? orderData?.phone : "987456321"}
                                            </p>
                                        </div>
                                        <div className="col-12 mt-4">
                                            {/* <h4>Payment Method</h4>
                                        <p>
                                            Pay on Delivery (Cash/Card). Cash on delivery (COD)
                                            available. Card/Net banking acceptance subject to device
                                            availability.
                                        </p> */}
                                            <div className="bg-orange p-3 mt-4 text-center">
                                                <h4>{orderData?.shipped ? 'Shipped' : 'Not Shipped'}</h4>
                                                {/* <h2>{moment().add(7, "days")}</h2> */}
                                                {/* <h2>{moment(date).format("MMMM DD, YYYY")}</h2> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

            </main>
        </Layout>
    );
};

export default OrderSuccess;

export async function getServerSideProps(context) {
    return {
        props: {
            id: context.query.id
        }
    }
}
