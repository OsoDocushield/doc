import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { Nav, Tab, TabContainer } from "react-bootstrap";
import { toast } from "react-hot-toast";
import PageTitle from "../../src/layouts/PageTitle";
import Layout from "../../src/layouts/Layout";
import { API_URL, fromImageToUrl } from "../../utils/utils";
import { CartContext } from "../../src/context/CartConntext";

const Details = ({ product }) => {
    const router = useRouter();
    const { add, cart, increase, decrease } = useContext(CartContext);
    const upcoming = false;
    const wishlist = []
    const size = ["L", "M", "X", "XL", "XXL"];
    const upthumb = false
    const [addedToCart, setAddedToCart] = useState(false);
    const [addWishlist_, setAddWishlist_] = useState(false);
    const [qty, setQty] = useState(1)


    useEffect(() => {
        product && setAddedToCart(cart[product.id] !== undefined ? true : false)
    }, [cart])

    const addToCart = (e) => {
        add(product);
        toast.success("Add item in Cart.");
        setAddedToCart(true);
    };
    const onClickRemoveCart = (e) => {
        e.preventDefault();
        // decreaseCart(cart);
        setaddCart(true);
        toast.error("Remove item from Cart.");
    };
    const onClickWishlist = (e) => {
        e.preventDefault();
        addWishlist(product);
        setAddWishlist_(true);
        if (wishlist) {
            toast.error("Remove item in wishlist.");
        } else {
            toast.success("Add item in wishlist.");
        }
    };

    return (
        <Layout>
            <main>
                <PageTitle active="SHOP DETAILS" pageHeading="Our Shop" />
                {product && (
                    <section className="shop-details-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-4">
                                    <Tab.Container defaultActiveKey="tum-0">
                                        {upthumb && (
                                            <div className="shop-thumb-tab">
                                                <Nav as="ul">
                                                    {product &&
                                                        product.images.map((img, i) => (
                                                            <Nav.Item as="li" key={i}>
                                                                {console.log({ img })}
                                                                <Nav.Link
                                                                    as="a"
                                                                    href="#"
                                                                    onClick={(e) => e.preventDefault()}
                                                                    eventKey={`tum-${i}`}
                                                                >
                                                                    <img src={fromImageToUrl(img)} alt="Tum" />
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                        ))}
                                                </Nav>
                                            </div>
                                        )}
                                        <div className="product-details-img mb-10">
                                            <Tab.Content id="myTabContentpro">
                                                {product &&
                                                    product.images.map((img, i) => (
                                                        <Tab.Pane key={i} eventKey={`tum-${i}`}>
                                                            <div className="product-large-img">
                                                                <img src={fromImageToUrl(img)} alt="Tum" />
                                                            </div>
                                                        </Tab.Pane>
                                                    ))}
                                            </Tab.Content>
                                        </div>
                                        {!upthumb && (
                                            <div className="shop-thumb-tab mb-30">
                                                <Nav as="ul">
                                                    {product &&
                                                        product.images.map((img, i) => (
                                                            <Nav.Item as="li" key={i}>
                                                                <Nav.Link
                                                                    as="a"
                                                                    href="#"
                                                                    onClick={(e) => e.preventDefault()}
                                                                    eventKey={`tum-${i}`}
                                                                >
                                                                    <img src={fromImageToUrl(img)} alt="Tum" />
                                                                </Nav.Link>
                                                            </Nav.Item>
                                                        ))}
                                                </Nav>
                                            </div>
                                        )}
                                    </Tab.Container>
                                </div>
                                <div className="col-xl-6 col-lg-8">
                                    <div className="product-details mb-30 pl-30">
                                        <div className="details-cat mb-20">
                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                {product && product.category}
                                            </a>
                                        </div>
                                        <h2 className="pro-details-title mb-15">
                                            {product && product.name}
                                        </h2>
                                        <div className="details-price mb-20">
                                            <span>
                                                ${Number(product && product.price).toFixed(2)}
                                            </span>
                                            {/* {product && product.price && (
                                                <span className="old-price">
                                                    ${Number(product.mainprice).toFixed(2)}
                                                </span>
                                            )} */}
                                        </div>
                                        <div className="product-variant">
                                            {product && product.colors && product.colors.length > 0 && (
                                                <div className="product-color variant-item">
                                                    <div className="variant-name">
                                                        <span>Colors</span>
                                                    </div>
                                                    <ul className="shop-link shop-color">
                                                        {product.colors.map((color, i) => (
                                                            <li key={color}>
                                                                <a href="#" onClick={(e) => e.preventDefault()}>
                                                                    <span className={color} />
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {product && product.size && (
                                                <div className="product-size variant-item">
                                                    <div className="variant-name">
                                                        <span>size</span>
                                                    </div>
                                                    <ul className="shop-link shop-size">
                                                        {size &&
                                                            size.map((size) => (
                                                                <li
                                                                    key={size}
                                                                    className={
                                                                        size.toLowerCase() ===
                                                                            product.size.toLowerCase()
                                                                            ? "active"
                                                                            : ""
                                                                    }
                                                                >
                                                                    <a href="#" onClick={(e) => e.preventDefault()}>
                                                                        {size}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                    </ul>
                                                </div>
                                            )}
                                            <div className="product-desc variant-item">
                                                <p>
                                                    {product && product.short_description}
                                                </p>
                                            </div>
                                            <div className="product-info-list variant-item">
                                                {/* <ul>
                                                    <li className="text-capitalize">
                                                        <span>Brands:</span> {product && product.brand}
                                                    </li>
                                                    <li>
                                                        <span>Product Code:</span>{" "}
                                                        {product &&
                                                            product.category[0].split("")[0] + product.id}
                                                    </li>
                                                    <li>
                                                        <span>Reward Points:</span> 100
                                                    </li>
                                                    <li>
                                                        <span>Stock:</span>{" "}
                                                        <span className="in-stock">
                                                            {product && product.stock !== 0
                                                                ? "In Stock"
                                                                : "Out Of Stock"}
                                                        </span>
                                                    </li>
                                                </ul> */}
                                            </div>
                                            <div className="product-action-details variant-item">
                                                <div className="product-details-action d-flex">
                                                    <div className="product-quantity ">
                                                        {/* <div className="cart-plus-minus">
                                                            {addedToCart ?
                                                                <p>{cart?.[product.id]?.quantity}</p>
                                                                :
                                                                <p>{qty}</p>
                                                            }
                                                            <button
                                                                className="dec qtybutton"
                                                                onClick={() => { qty - 1 < 1 ? null : setQty(qty - 1) }}
                                                            >
                                                                -
                                                            </button>
                                                            <button
                                                                className="inc qtybutton"
                                                                onClick={() => { setQty(qty + 1) }}
                                                            >
                                                                +
                                                            </button>
                                                        </div> */}
                                                    </div>
                                                    {/* <button
                                                    className={`${wishlist ? "active" : ""
                                                        } details-action-icon`}
                                                    type="submit"
                                                    onClick={(e) => onClickWishlist(e)}
                                                >
                                                    <i className="fas fa-heart" />
                                                </button>
                                                <button className="details-action-icon" type="submit">
                                                    <i className="fas fa-hourglass" />
                                                </button> */}
                                                </div>
                                                <div className="details-cart mt-40">
                                                    <button disabled={qty === 0 || addedToCart ? true : false} onClick={addToCart} className="btn theme-btn">
                                                        {addedToCart ? 'Already added' : 'purchase now'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-50">
                                <div className="col-xl-8 col-lg-8">
                                    <div className="product-review">
                                        <TabContainer defaultActiveKey="dec">
                                            <Nav as="ul" className="review-tab">
                                                <Nav.Item as="li">
                                                    <Nav.Link
                                                        as="a"
                                                        href="#"
                                                        onClick={(e) => e.preventDefault()}
                                                        eventKey="dec"
                                                    >
                                                        Description{" "}
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item as="li">
                                                    <Nav.Link
                                                        as="a"
                                                        href="#"
                                                        onClick={(e) => e.preventDefault()}
                                                        eventKey="review"
                                                    >
                                                        Reviews ({product.reviews?.length || 0})
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content id="myTabContent2">
                                                <Tab.Pane eventKey="dec">
                                                    <div className="desc-text">
                                                        {
                                                            product.long_description.split('\n').map((text, i) => {
                                                                return <p key={i}>{text}</p>
                                                            })
                                                        }

                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="review">
                                                    {product.reviews && (
                                                        product.reviews.map((eachReview, i) => (
                                                            <div className="desc-text review-text" key={i}>
                                                                <div className="product-commnets">
                                                                    <div className="product-commnets-list mb-25 pb-15">
                                                                        <div className="pro-comments-img">
                                                                            <img
                                                                                src="/img/product/comments/01.png"
                                                                                alt="img"
                                                                            />
                                                                        </div>
                                                                        <div className="pro-commnets-text">
                                                                            <h4>
                                                                                {eachReview.user} -
                                                                                <span>
                                                                                    {new Date(eachReview.createdAt).toLocaleDateString()}
                                                                                </span>
                                                                            </h4>
                                                                            <div className="pro-rating">
                                                                                {new Array(eachReview.rating).fill(2).map((e, i) => <i key={i} className="far fa-star" />)}
                                                                            </div>
                                                                            <p>
                                                                                {eachReview.comment}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    )}
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </TabContainer>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    <div className="pro-details-banner">
                                        <Link href="/shop">
                                            <img src="/img/banner/pro-details.jpg" alt="img" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
                {/* <RelatedProduct>
          {products &&
            simpleProductFilter(product && product.category[0], products).map(
              (product) => <Product key={product.id} product={product} />
            )}
        </RelatedProduct> */}
            </main>
        </Layout>
    );
};

export default Details;

export async function getServerSideProps(context) {
    let url = `${API_URL}/api/products/${context.query.id}?populate=*`

    const data = await fetch(url)
    let productData = await data.json()
    let product = null
    if (productData.data?.id) {
        product = {
            id: productData.data.id,
            ...productData.data.attributes,
            images: productData.data.attributes.images.data.map(img => img.attributes.url),
            category: productData.data.attributes.category.data.attributes.name
        }
    }
    return {
        props: {
            product
        }
    }
}