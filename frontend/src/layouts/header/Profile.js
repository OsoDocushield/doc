import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import { fromImageToUrl } from "../../../utils/utils";
import { AuthContext } from "../../context/AuthContext";
import { getCarts, removeCart } from "../../redux/action/utilis";
import { totalPrice } from "../../utils/utils";
const Profile = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState(0)

    // useEffect(() => {
    //     if (Object.keys(cart)) {
    //         let _total = 0
    //         setProducts(Object.keys(cart).map(e => {
    //             _total = _total + Number(cart[e].price) * Number(cart[e].quantity)
    //             return cart[e]
    //         }))
    //         setTotal(_total)
    //     }
    // }, [user]);

    return (
        <>
            {user?.jwt ? <>
                <li className="d-shop-cart">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        <i className="far fa-user" />
                    </a>
                    <ul className="minicart">
                        {products && products.length > 0 ? (
                            products.map((eachProduct) => (
                                <li key={eachProduct.id}>
                                    <div className="cart-img">
                                        <Link href={`/shop/${cart.id}`}>
                                            <a>
                                                <img src={fromImageToUrl(eachProduct.images[0])} alt="Cart" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="cart-content">
                                        <h3>
                                            <Link href={`/shop/${eachProduct.id}`}>{eachProduct.name}</Link>
                                        </h3>
                                        <div className="cart-price">
                                            <span className="new">
                                                ${eachProduct.price} * {eachProduct.quantity}
                                            </span>
                                            {" ="}
                                            <span className="new ml-1 ">${Number(eachProduct.price) * Number(eachProduct.quantity)}</span>
                                        </div>
                                    </div>
                                    <div className="del-icon">
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                remove(eachProduct.id);
                                                toast.success("Item removed from cart");
                                            }}
                                        >
                                            <i className="far fa-trash-alt" />
                                        </a>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <h3>Order Not Found</h3>
                        )}
                        <li>
                            <div className="checkout-link">
                                <Link href="/orders">Orders</Link>
                                <Link href="/logout">
                                    <a className="red-color">Logout</a>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </li>
            </> : <>
                <li className="login-btn">
                    <Link href="/login">
                        <a>
                            <i className="far fa-user" />
                        </a>
                    </Link>
                </li>
            </>}
        </>

    );
};

export default Profile;
