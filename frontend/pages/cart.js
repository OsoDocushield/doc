import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { CartContext } from "../src/context/CartConntext";
import Layout from "../src/layouts/Layout";
import PageTitle from "../src/layouts/PageTitle";
import {
  addToCart,
  decreaseCart,
  removeCart,
} from "../src/redux/action/utilis";
import { totalPrice } from "../src/utils/utils";
import { fromImageToUrl } from "../utils/utils";

const Cart = ({ removeCart, addToCart, decreaseCart }) => {
  const { cart, remove, increase, decrease } = useContext(CartContext);
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

  const carts = []
  const [cartValue, setCartValue] = useState(0);

  const [addCart, setaddCart] = useState(false);

  const onClickCart = (e, cart) => {
    e.preventDefault();
    addToCart(cart);
    setaddCart(true);
    toast.success("Add item in Cart.");
  };
  const onClickRemoveCart = (e, cart) => {
    e.preventDefault();
    decreaseCart(cart);
    setaddCart(true);
    toast.error("Remove item from Cart.");
  };
  return (
    <Layout >
      <main>
        <PageTitle active="Cart" pageHeading="Shoping Cart" />

        {products && products.length > 0 ? (
          <section className="cart-area pt-100 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <form action="#">
                    <div className="table-content table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="product-thumbnail">Images</th>
                            <th className="cart-product-name">Product</th>
                            <th className="product-price">Unit Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Total</th>
                            <th className="product-remove">Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products &&
                            products.map((eachProduct) => (
                              <tr key={eachProduct.id}>
                                <td className="product-thumbnail">
                                  <a href="#">
                                    <img src={fromImageToUrl(eachProduct?.images[0])} alt="cart" />
                                  </a>
                                </td>
                                <td className="product-name">
                                  <a href="#">{eachProduct.name}</a>
                                </td>
                                <td className="product-price">
                                  <span className="amount">
                                    ${Number(eachProduct.price).toFixed(2)}
                                  </span>
                                </td>
                                <td className="product-quantity">
                                  <div className="cart-plus-minus">
                                    {/* <input
                                      type="number"
                                      defaultValue={cart.qty}
                                      onSubmit={(e) => e.preventDefault()}
                                    /> */}
                                    <p>{eachProduct.quantity}</p>
                                    <div
                                      className="dec qtybutton"
                                      onClick={(e) =>
                                        decrease(eachProduct.id)
                                      }
                                    >
                                      -
                                    </div>
                                    <div
                                      className="inc qtybutton"
                                      onClick={(e) => increase(eachProduct.id)}
                                    >
                                      +
                                    </div>
                                  </div>
                                </td>
                                <td className="product-subtotal">
                                  <span className="amount">
                                    ${Number(eachProduct.price * eachProduct.quantity).toFixed(2)}
                                  </span>
                                </td>
                                <td className="product-remove">
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      remove(eachProduct.id);
                                      toast.error("Remove Item from cart.");
                                    }}
                                  >
                                    <i className="fa fa-times" />
                                  </a>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                    {/* <div className="row">
                      <div className="col-12">
                        <div className="coupon-all">
                          <div className="coupon">
                            <form onSubmit={(e) => e.preventDefault()}>
                              <input
                                id="coupon_code"
                                className="input-text"
                                name="coupon_code"
                                placeholder="Coupon code"
                                type="text"
                              />
                              <button
                                className="btn theme-btn-2"
                                name="apply_coupon"
                                type="submit"
                                onClick={(e) => e.preventDefault()}
                              >
                                Apply coupon
                              </button>
                            </form>
                          </div>
                          <div className="coupon2">
                            <Link href="/checkout">
                              <a className="btn theme-btn">Submit</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <div className="row">
                      <div className="col-md-5 ml-auto">
                        <div className="cart-page-total">
                          <h2>Cart totals</h2>
                          <ul className="mb-20">
                            {/* <li>
                              Subtotal <span>${totalPrice(carts)}</span>
                            </li> */}
                            <li>
                              Total <span>${Number(total).toFixed(2)}</span>
                            </li>
                          </ul>
                          <Link href="/checkout">
                            <a className="btn theme-btn">Proceed to checkout</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <h2 className="pt-100 pb-50 text-center w-100">No Product Found</h2>
        )}
      </main>
    </Layout>
  );
};

export default Cart;
