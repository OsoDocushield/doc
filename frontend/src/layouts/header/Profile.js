import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Profile = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <>
            {user?.jwt ? <>
                <li className="d-shop-cart">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        <i className="far fa-user" />
                    </a>
                    <ul className="minicart">
                        <li>
                            <div className="checkout-link">
                                <Link href="/orders">
                                    <a className="red-color">Orders</a>
                                </Link>
                                {/* <Link href="" onClick={(e) => { alert("") }}> */}
                                <a className="red-color" onClick={(e) => { logout() }}>Logout</a>
                                {/* </Link> */}
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
