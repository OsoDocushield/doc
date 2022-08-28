import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Nav, Tab, TabContainer } from "react-bootstrap";
import { toast } from "react-hot-toast";
import PageTitle from "../../src/layouts/PageTitle";
import Layout from "../../src/layouts/Layout";
import { API_URL, fromImageToUrl } from "../../utils/utils";

const Details = ({ product }) => {
    product = product[0]
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
    }, [id]);
    const cart = [];
    const upcoming = false;
    const wishlist = []
    const size = ["L", "M", "X", "XL", "XXL"];
    const upthumb = false
    const [addCart, setaddCart] = useState(false);
    const [addWishlist_, setAddWishlist_] = useState(false);

    const onClickCart = (e) => {
        e.preventDefault();
        addToCart(product);
        setaddCart(true);
        toast.success("Add item in Cart.");
    };
    const onClickRemoveCart = (e) => {
        e.preventDefault();
        decreaseCart(cart);
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
                                            decor,
                                        </a>
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
                                        {product && product.price && (
                                            <span className="old-price">
                                                ${Number(product.mainprice).toFixed(2)}
                                            </span>
                                        )}
                                    </div>
                                    <div className="product-variant">
                                        {product && product.colors && product.colors.length > 0 && (
                                            <div className="product-color variant-item">
                                                <div className="variant-name">
                                                    <span>Colors</span>
                                                </div>
                                                <ul className="shop-link shop-color">
                                                    {product.colors.map((color) => (
                                                        <li key={color}>
                                                            <a href="#" onClick={(e) => e.preventDefault()}>
                                                                <span className={color} />
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {upcoming && (
                                            <div className="product-coming variant-item">
                                                <div className="variant-name">
                                                    <span>time left</span>
                                                </div>
                                                <div className="event-timer details-timer">
                                                    <div data-countdown="2019/04/01">
                                                        <span className="cdown days">
                                                            <span className="time-count">0</span> <p>Days</p>
                                                        </span>{" "}
                                                        <span className="cdown hour">
                                                            <span className="time-count">0</span> <p>Hour</p>
                                                        </span>{" "}
                                                        <span className="cdown minutes">
                                                            <span className="time-count">00</span> <p>Min</p>
                                                        </span>{" "}
                                                        <span className="cdown second">
                                                            {" "}
                                                            <span>
                                                                <span className="time-count">00</span>{" "}
                                                                <p>Sec</p>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
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
                                                {product.short_description}
                                            </p>
                                        </div>
                                        <div className="product-info-list variant-item">
                                            <ul>
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
                                                        {product && product.stock
                                                            ? "In Stock"
                                                            : "Out Of Stock"}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="product-action-details variant-item">
                                            <div className="product-details-action d-flex">
                                                <div className="product-quantity ">
                                                    <div className="cart-plus-minus">
                                                        <p>{cart ? cart.qty : 1}</p>
                                                        <button
                                                            disabled={cart ? false : true}
                                                            className="dec qtybutton"
                                                            onClick={(e) =>
                                                                cart && cart.qty !== 1 && onClickRemoveCart(e)
                                                            }
                                                        >
                                                            -
                                                        </button>
                                                        <button
                                                            disabled={cart ? false : true}
                                                            className="inc qtybutton"
                                                            onClick={(e) => onClickCart(e)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <button
                                                    className={`${wishlist ? "active" : ""
                                                        } details-action-icon`}
                                                    type="submit"
                                                    onClick={(e) => onClickWishlist(e)}
                                                >
                                                    <i className="fas fa-heart" />
                                                </button>
                                                <button className="details-action-icon" type="submit">
                                                    <i className="fas fa-hourglass" />
                                                </button>
                                            </div>
                                            <div
                                                className="details-cart mt-40"
                                                onClick={() => addToCart(product)}
                                            >
                                                <button className="btn theme-btn">purchase now</button>
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
                                                    Reviews (2)
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
                                                <div className="desc-text review-text">
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
                                                                    Roger West -<span>June 5, 2018</span>
                                                                </h4>
                                                                <div className="pro-rating">
                                                                    <i className="far fa-star" />
                                                                    <i className="far fa-star" />
                                                                    <i className="far fa-star" />
                                                                    <i className="far fa-star" />
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipisicing elit, sed do eiusmod tempor
                                                                    incididunt ut labore et dolore magna aliqua.
                                                                    Ut enim ad minim veniam, quis nostrud
                                                                    exercitation.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="product-commnets-list mb-25 pb-15">
                                                            <div className="pro-comments-img">
                                                                <img
                                                                    src="/img/product/comments/02.png"
                                                                    alt="img"
                                                                />
                                                            </div>
                                                            <div className="pro-commnets-text">
                                                                <h4>
                                                                    Roger West -<span>June 5, 2018</span>
                                                                </h4>
                                                                <div className="pro-rating">
                                                                    <i className="far fa-star" />
                                                                    <i className="far fa-star" />
                                                                    <i className="far fa-star" />
                                                                    <i className="far fa-star" />
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipisicing elit, sed do eiusmod tempor
                                                                    incididunt ut labore et dolore magna aliqua.
                                                                    Ut enim ad minim veniam, quis nostrud
                                                                    exercitation.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="review-box mt-50">
                                                        <h4>Add a Review</h4>
                                                        <div className="your-rating mb-40">
                                                            <span>Your Rating:</span>
                                                            <div className="rating-list">
                                                                <a href="#" onClick={(e) => e.preventDefault()}>
                                                                    <i className="far fa-star" />
                                                                </a>
                                                                <a href="#" onClick={(e) => e.preventDefault()}>
                                                                    <i className="far fa-star" />
                                                                </a>
                                                                <a href="#" onClick={(e) => e.preventDefault()}>
                                                                    <i className="far fa-star" />
                                                                </a>
                                                                <a href="#" onClick={(e) => e.preventDefault()}>
                                                                    <i className="far fa-star" />
                                                                </a>
                                                                <a href="#" onClick={(e) => e.preventDefault()}>
                                                                    <i className="far fa-star" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <form
                                                            className="review-form"
                                                            onSubmit={(e) => e.preventDefault()}
                                                        >
                                                            <div className="row">
                                                                <div className="col-xl-12">
                                                                    <label htmlFor="message">YOUR REVIEW</label>
                                                                    <textarea
                                                                        name="message"
                                                                        id="message"
                                                                        cols={30}
                                                                        rows={10}
                                                                        defaultValue={""}
                                                                    />
                                                                </div>
                                                                <div className="col-xl-6">
                                                                    <label htmlFor="r-name">Name</label>
                                                                    <input type="text" id="r-name" />
                                                                </div>
                                                                <div className="col-xl-6">
                                                                    <label htmlFor="r-email">Email</label>
                                                                    <input type="email" id="r-email" />
                                                                </div>
                                                                <div className="col-xl-12">
                                                                    <button className="btn theme-btn">
                                                                        Add your Review
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
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
    let url = `${API_URL}/api/products?populate=*`
    if (context?.query?.id) url += `&filters[id][$eq]=${context.query.id}`

    const data = await fetch(url)
    let productData = await data.json()
    return {
        props: {
            product: productData.data.map(each => ({
                id: each.id,
                ...each.attributes,
                images: each.attributes.images.data.map(img => img.attributes.url),
                category: each.attributes.category.data.attributes.name
            }))
        }
    }
}