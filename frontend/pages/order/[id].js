import moment from "moment";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { AuthContext } from "../../src/context/AuthContext";
import Layout from "../../src/layouts/Layout";
import PageTitle from "../../src/layouts/PageTitle";
import PreLoader from "../../src/layouts/PreLoader";
import { totalPrice } from "../../src/utils/utils";
import { API_URL, fromImageToUrl } from "../../utils/utils";

const initialReviewValue = {
    product: {},
    rating: 0,
    comment: ''
}

const OrderSuccess = ({ id }) => {
    const auth = useContext(AuthContext);
    const [orderData, setOrderData] = useState()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [review, setReview] = useState({ ...initialReviewValue })
    const router = useRouter()
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
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
            setLoading(false)
        }
        fetchData()
    }, []);

    const addNewReview = async () => {
        setLoading(true)
        if (review.rating === 0) {
            toast.error('Enter rating')
        } else if (review.comment.replaceAll(' ', '') === '') {
            toast.error('Enter comment')
        } else {
            let res = await fetch(`${API_URL}/api/reviews`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + auth.user.jwt
                },
                body: JSON.stringify({ data: { ...review, product: { id: review.product.id }, order: { id: id } } })
            })
            res = await res.json()
        }
        router.reload()
    }
    return (
        <Layout>
            <Modal show={open} onHide={() => setOpen(false)} >
                <Modal.Header closeButton>
                    <Modal.Title>Review: {review.product.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {loading && <PreLoader />}
                    <div className="row review-form">
                        <div className="col-xl-12">
                            <h4>Add a Review</h4>
                            <div className="your-rating mb-40">
                                <span>Your Rating:</span>
                                <div className="rating-list">
                                    <a href="#" style={{ ...review['rating'] >= 1 ? { color: 'red' } : {} }} onClick={(e) => { e.preventDefault(); setReview({ ...review, rating: 1 }) }}>
                                        <i className="far fa-star" />
                                    </a>
                                    <a href="#" style={{ ...review['rating'] >= 2 ? { color: 'red' } : {} }} onClick={(e) => { e.preventDefault(); setReview({ ...review, rating: 2 }) }}>
                                        <i className="far fa-star" />
                                    </a>
                                    <a href="#" style={{ ...review['rating'] >= 3 ? { color: 'red' } : {} }} onClick={(e) => { e.preventDefault(); setReview({ ...review, rating: 3 }) }}>
                                        <i className="far fa-star" />
                                    </a>
                                    <a href="#" style={{ ...review['rating'] >= 4 ? { color: 'red' } : {} }} onClick={(e) => { e.preventDefault(); setReview({ ...review, rating: 4 }) }}>
                                        <i className="far fa-star" />
                                    </a>
                                    <a href="#" style={{ ...review['rating'] >= 5 ? { color: 'red' } : {} }} onClick={(e) => { e.preventDefault(); setReview({ ...review, rating: 5 }) }}>
                                        <i className="far fa-star" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row review-form">
                        <div className="col-xl-12">
                            <label htmlFor="message">YOUR REVIEW</label>
                            <textarea
                                name="message"
                                id="message"
                                cols={30}
                                rows={10}
                                defaultValue={""}
                                onChange={(e) => setReview({ ...review, comment: e.target.value })}
                            />
                        </div>

                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <div className="col-xl-12">
                        <button disabled={loading} className="btn theme-btn" onClick={addNewReview}>
                            Add your Review
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
            <main>
                {loading && <PreLoader />}
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
                            <br />
                            <div className="row">
                                <div className="col-lg-12">
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
                                                        {orderData.paid && orderData.shipped &&
                                                            <th className="product-subtotal">Review</th>
                                                        }
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

                                                                <td >
                                                                    <span className="amount">
                                                                        ${Number(each.price * each.quantity).toFixed(2)}
                                                                    </span>
                                                                </td>
                                                                {orderData.paid && orderData.shipped && (
                                                                    each.review ?
                                                                        <>
                                                                            <td>
                                                                                {new Array(each.review.rating).fill(2).map((e, i) => (
                                                                                    <a href="#" style={{ color: 'red' }} key={i}>
                                                                                        <i className="far fa-star" />
                                                                                    </a>
                                                                                ))}
                                                                            </td>
                                                                        </> :
                                                                        <>
                                                                            <td className="addreview" onClick={() => {
                                                                                setOpen(!open)
                                                                                setReview({ ...initialReviewValue, product: each })
                                                                            }}>
                                                                                Add Review
                                                                            </td>
                                                                        </>
                                                                )
                                                                }
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

                            </div>
                        </div>
                    </section>
                )
                }

            </main >
        </Layout >
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
