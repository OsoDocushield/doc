import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../src/context/AuthContext";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import { API_URL } from "../utils/utils";
const OrderList = () => {
    const auth = useContext(AuthContext);
    const [orderData, setOrderData] = useState([])
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            let url = `${API_URL}/api/orders`
            const data = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.user.jwt
                }
            })
            let resData = await data.json()
            setOrderData(resData)
        }
        if (auth.user?.jwt) {
            fetchData()
        } else {
            router.push('/login')
        }

    }, []);
    return (
        <Layout>
            <main>
                <PageTitle active="Orders" pageHeading="Orders" />
                <section className="cart-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-content table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">ID</th>
                                                <th className="cart-product-name">Price</th>
                                                <th className="product-price">Created Date</th>
                                                <th className="product-quantity">Shipped Status</th>
                                                <th className="product-subtotal">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderData && orderData.map(eachOrder =>
                                            (
                                                <tr key={eachOrder.id} id="order-rows" onClick={() => { router.push(`/order/${eachOrder.id}`) }}>
                                                    <td >
                                                        {eachOrder.id}
                                                    </td>
                                                    <td >
                                                        {eachOrder.amount}
                                                    </td>
                                                    <td >
                                                        {new Date(eachOrder.createdAt).toLocaleString()}
                                                    </td>
                                                    <td >
                                                        {eachOrder.shipped ? 'Shipped' : '-'}
                                                    </td>
                                                    <td >
                                                        {eachOrder.paid ? 'Paid' : 'Not paid'}
                                                    </td>
                                                </tr>
                                            )
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>

    );
};

export default OrderList;
