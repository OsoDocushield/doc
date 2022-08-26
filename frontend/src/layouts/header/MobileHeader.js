import Link from "next/link";
import { Fragment, useState } from "react";

const MobileHeader = () => {
  const [mainHeader, setMainHeader] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [multiMenu, setMultiMenu] = useState(false);
  return (
    <div className="mobile-menu mean-container">
      <div className="mean-bar">
        <a
          href="#nav"
          className={`meanmenu-reveal ${
            mainHeader
              ? "d-flex align-items-center justify-content-center fs-18"
              : ""
          }`}
          onClick={(e) => {
            setMainHeader(!mainHeader);
            e.preventDefault();
          }}
        >
          {mainHeader ? (
            "X"
          ) : (
            <Fragment>
              <span />
              <span />
              <span />
            </Fragment>
          )}
        </a>
        <nav className={`mean-nav mobile-header ${mainHeader ? "block" : ""}`}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
              <a
                className="mean-expand"
                href="#"
                onClick={(e) => {
                  setSubMenu(subMenu === "home" ? false : "home");
                  e.preventDefault();
                }}
              >
                {subMenu === "home" ? "-" : "+"}
              </a>
              <ul className={`submenu ${subMenu === "home" ? "block" : ""}`}>
                <li>
                  <Link href="/">
                    <a>Home Style 1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/index-2">
                    <a>Home Style 2</a>
                  </Link>
                </li>
                <li>
                  <Link href="/index-3">
                    <a>Home Style 3</a>
                  </Link>
                </li>
                <li>
                  <Link href="/index-4">
                    <a>Home Style 4</a>
                  </Link>
                </li>
                <li>
                  <Link href="/index-5">
                    <a>Home Style 5</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mega-menu">
              <Link href="/shop">Shop</Link>
              <a
                className="mean-expand"
                href="#"
                onClick={(e) => {
                  setSubMenu(subMenu === "shop" ? false : "shop");
                  e.preventDefault();
                }}
              >
                {subMenu === "shop" ? "-" : "+"}
              </a>
              <ul className={`submenu ${subMenu === "shop" ? "block" : ""}`}>
                <li>
                  <a href="#">Category View</a>
                  <ul className={`submenu ${multiMenu === "1" ? "block" : ""}`}>
                    <li>
                      <Link href="/shop">Shop 2 Column</Link>
                    </li>
                    <li>
                      <Link href="/products">Shop Filter Style</Link>
                    </li>
                    <li>
                      <Link href="/products">Shop Full</Link>
                    </li>
                    <li>
                      <Link href="/shop/col-3">Shop 3 Column</Link>
                    </li>
                    <li>
                      <Link href="/shop/list">List View</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={(e) => {
                      setMultiMenu(multiMenu === "1" ? false : "1");
                      e.preventDefault();
                    }}
                  >
                    {multiMenu === "1" ? "-" : "+"}
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Category View
                  </a>
                  <ul className={`submenu ${multiMenu === "2" ? "block" : ""}`}>
                    <li>
                      <Link href="/shop/left-sidebar">Sidebar Left</Link>
                    </li>
                    <li>
                      <Link href="/shop/sidebar-right">Sidebar Right</Link>
                    </li>
                    <li>
                      <Link href="/cart">Shopping Cart</Link>
                    </li>
                    <li>
                      <Link href="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link href="/wishlist">My Wishlist</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={(e) => {
                      setMultiMenu(multiMenu === "2" ? false : "2");
                      e.preventDefault();
                    }}
                  >
                    {multiMenu === "2" ? "-" : "+"}
                  </a>
                </li>
                <li>
                  <a href="#">Products Types</a>
                  <ul className={`submenu ${multiMenu === "3" ? "block" : ""}`}>
                    <li>
                      <Link href="/shop/1">Simple Product</Link>
                    </li>
                    <li>
                      <Link href="/shop/19">Variable Product</Link>
                    </li>
                    <li>
                      <Link href="/shop/upcoming/16">Product Upcoming</Link>
                    </li>
                    <li>
                      <Link href="/shop/up-thumb/16">Thumb Top Product</Link>
                    </li>
                    <li>
                      <Link href="/compare">Compare</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    href="#"
                    onClick={(e) => {
                      setMultiMenu(multiMenu === "3" ? false : "3");
                      e.preventDefault();
                    }}
                  >
                    {multiMenu === "3" ? "-" : "+"}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/products">Products </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
              <ul className={`submenu ${subMenu === "blog" ? "block" : ""}`}>
                <li>
                  <Link href="/blog/col-2">
                    <a>Blog 2 Column</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/col-mas-2">
                    <a>Blog 2 Col Masonry</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/col-3">
                    <a>Blog 3 Column</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/col-mas-3">
                    <a>Blog 3 Col Masonry</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/1">
                    <a>Blog Details</a>
                  </Link>
                </li>{" "}
                <li>
                  <Link href="/blog/10">
                    <a>Blog Details Video</a>
                  </Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => setSubMenu(subMenu === "blog" ? false : "blog")}
              >
                {subMenu === "blog" ? "-" : "+"}
              </a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className={`submenu ${subMenu === "page" ? "block" : ""}`}>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/login">login</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
                <li>
                  <Link href="/cart">Shoping Cart</Link>
                </li>
                <li>
                  <Link href="/checkout">Checkout</Link>
                </li>
                <li>
                  <Link href="/wishlist">Wishlist</Link>
                </li>{" "}
                <li>
                  <Link href="/compare">Compare</Link>
                </li>
                <li>
                  <Link href="/order-success">Order Success</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                href="#"
                onClick={() => setSubMenu(subMenu === "page" ? false : "page")}
              >
                {subMenu === "page" ? "-" : "+"}
              </a>
            </li>
            <li className="mean-last">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileHeader;
