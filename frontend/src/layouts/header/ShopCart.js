import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { connect, useSelector } from "react-redux";
import { fromImageToUrl } from "../../../utils/utils";
import { CartContext } from "../../context/CartConntext";
import { getCarts, removeCart } from "../../redux/action/utilis";
import { totalPrice } from "../../utils/utils";
const ShopCart = () => {
  const { cart, remove } = useContext(CartContext);
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (Object.keys(cart)) {
      let _total = 0
      setProducts(Object.keys(cart).map(e => {
        _total = _total + Number(cart[e].price) * Number(cart[e].quantity)
        return cart[e]
      }))
      setTotal(_total)
    }
  }, [cart]);

  return (
    <li className="d-shop-cart">
      <a href="#" onClick={(e) => e.preventDefault()}>
        <i className="flaticon-shopping-cart" />{" "}
        <span className="cart-count">{cart && Object.entries(cart).length}</span>
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
          <h3>Product Not Found</h3>
        )}
        <li>
          <div className="total-price">
            <span className="f-left">Total:</span>
            {products && <span className="f-right">${total}</span>}
          </div>
        </li>
        <li>
          <div className="checkout-link">
            <Link href="/cart">Shopping Cart</Link>
            <Link href="/checkout">
              <a className="red-color">Checkout</a>
            </Link>
          </div>
        </li>
      </ul>
    </li>
  );
};

export default ShopCart;
