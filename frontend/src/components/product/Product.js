import Link from "next/link";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import { fromImageToUrl } from "../../../utils/utils";
import { CartContext } from "../../context/CartConntext";
import {
  addToCart,
  addWishlist,
  compare,
  getWishlist,
  removeCompare,
} from "../../redux/action/utilis";
import ProductModal from "./ProductModal";
const Product = ({
  product,
  wrapperPadding0,
  addToCart,
  addWishlist,
  compare,
  removeCompare,
}) => {
  const wishlist = [];
  const compares = [];
  // const value = useContext(CartContext);
  const [quickView, setQuickView] = useState(false);
  const [addCompare, setAddCompare] = useState(false);
  const [addCart, setaddCart] = useState(false);
  const [addWishlist_, setAddWishlist_] = useState(false);
  console.log({ product })
  const onClickCompare = (e) => {
    e.preventDefault();
    setAddCompare(true);
    const exitsItem = compares.find((compare) => compare.id === product.id);
    if (compares.length < 3) {
      if (exitsItem) {
        toast.error("Remove item from compare.");
        compare(product);
      } else {
        toast.success("Add item in Compare.");
        compare(product);
      }
    } else {
      if (exitsItem) {
        toast.error("Remove item from compare.");
        removeCompare(product);
      } else {
        toast.error("Compare is full please remove item from compare list.");
      }
    }
  };

  const onClickCart = (e) => {
    e.preventDefault();
    addToCart(product);
    toast.success("Item Added in Cart.");
  };
  const onClickWishlist = (e) => {
    e.preventDefault();
    addWishlist(product);
    setAddWishlist_(true);
    const wishlist_ = wishlist.find((wishlist) => wishlist.id === product.id);
    if (wishlist_) {
      toast.error("Remove item in wishlist.");
    } else {
      toast.success("Add item in wishlist.");
    }
  };

  return (
    <div className={`product-wrapper mb-50 ${wrapperPadding0 ? "p-0" : ""}`}>
      {/* <ProductModal
        show={quickView}
        handleClose={() => setQuickView(false)}
        product={product}
      /> */}

      <div className="product-img mb-25">
        <Link href={`/product/${product.id}`}>
          <a>
            <img src={fromImageToUrl(product.images[0])} alt="img 1" />
            <img className="secondary-img" src={fromImageToUrl(product.images[1])} alt="imge 2" />
          </a>
        </Link>

        <div className="product-action text-center">
          <a href="#" onClick={(e) => onClickCart(e)} title="Shoppingb Cart">
            <i className="flaticon-shopping-cart" />
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setQuickView(true);
            }}
            title="Quick View"
          >
            <i className="flaticon-eye" />
          </a>
        </div>
        <div className="sale-tag">
          {product.new && <span className="new">new</span>}
          {product.sale && <span className="sale">sale</span>}
        </div>
      </div>
      {/* <div className="product-content">
        <div className="pro-cat mb-10">
          <Link href={`/shop/${product.id}`}>decor, </Link>
          <Link href={`/shop/${product.id}`}>{product.brand}</Link>
        </div>
        <h4>
          <Link href={`/shop/${product.id}`}>{product.name}</Link>
        </h4>
        <div className="product-meta">
          <div className="pro-price">
            <span>{`$${Number(product.mainPrice).toFixed(2)} USD`}</span>
            {product.price && (
              <span className="old-price">
                {`$${Number(product.price).toFixed(2)} USD`}
              </span>
            )}
          </div>
        </div>
        <div className="product-wishlist">
          <a
            href="#"
            onClick={(e) => onClickWishlist(e)}
            className={` ${wishlist && wishlist.find((pro) => pro.id === product.id)
              ? "active"
              : ""
              } `}
          >
            <i className="far fa-heart" title="Wishlist" />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Product;
