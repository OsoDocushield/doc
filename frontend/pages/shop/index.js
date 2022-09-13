import Layout from "../../src/layouts/Layout";
import PageTitle from "../../src/layouts/PageTitle";
import { Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";
import Paggination from "../../src/components/Paggination";
import { activeData, dblock } from "../../src/utils/utils";
import { useContext, useState } from "react";
// import ProductListView from "../../src/components/product/ProductListView";
import Product from "../../src/components/product/Product";
import { API_URL } from "../../utils/utils";
import { CartContext } from "../../src/context/CartConntext";

const Shop = ({ products, pageInfo }) => {
    const [active, setActive] = useState(0);
    const { add } = useContext(CartContext);
    let sort = 10;
    return (
        <Layout>
            <main>
                <PageTitle active="Shop" pageHeading="Our Shop" />
                <section className="shop-area pt-100 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                {/* tab filter */}
                                <TabContainer defaultActiveKey="grid">
                                    <div className="row">
                                        <div className="col-xl-5 col-lg-5 col-md-6">
                                            <div className="product-showing mb-40">
                                                {/* Active sort product */}
                                                <p>{activeData(active, sort, products)}</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-7 col-lg-7 col-md-6">
                                            <div className="shop-tab f-right">
                                                <Nav
                                                    as="ul"
                                                    className="nav text-center"
                                                    id="myTab"
                                                    role="tablist"
                                                >
                                                    {/* <Nav.Item as="li">
                                                        <Nav.Link
                                                            as="a"
                                                            href="#"
                                                            onClick={(e) => e.preventDefault()}
                                                            eventKey="list"
                                                        >
                                                            <i className="fas fa-list-ul" />{" "}
                                                        </Nav.Link>
                                                    </Nav.Item> */}
                                                    <Nav.Item as="li">
                                                        <Nav.Link
                                                            as="a"
                                                            href="#"
                                                            onClick={(e) => e.preventDefault()}
                                                            eventKey="grid"
                                                        >
                                                            <i className="fas fa-th-large" />
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div className="pro-filter-btn mb-40 f-right">
                                                {/* <button id="filter-btn">Filter +</button> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* tab content */}
                                    <TabContent>
                                        <TabPane eventKey="grid">
                                            <div className="row">
                                                {products &&
                                                    products.map((product, i) => (
                                                        <div
                                                            className={`col-lg-4 col-md-6 ${dblock(
                                                                active,
                                                                i,
                                                                sort
                                                            )}`}
                                                            key={product.id}
                                                        >
                                                            <Product product={product} addToCart={add} />
                                                        </div>
                                                    ))}
                                            </div>
                                        </TabPane>
                                        <TabPane eventKey="list">
                                            {products &&
                                                products.map((product, i) => (
                                                    <div key={i} className={`${dblock(active, i, sort)}`}>
                                                        {/* <ProductListView product={product} /> */}
                                                    </div>
                                                ))}
                                        </TabPane>
                                    </TabContent>
                                </TabContainer>

                                <Paggination
                                    active={active}
                                    setActive={setActive}
                                    sort={9}
                                    length={pageInfo.total}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Shop;

export async function getServerSideProps(context) {
    let url = `${API_URL}/api/products?populate=images`
    if (context?.query?.id) url += `&filters[category][id][$eq]=${context.query.id}`
    url += `&pagination[page]=1&pagination[pageSize]=9`

    const data = await fetch(url)
    let productsData = await data.json()

    return {
        props: {
            products: productsData.data.map(each => {
                return {
                    id: each.id,
                    ...each.attributes,
                    images: each.attributes.images.data?.map(img => img.attributes.url) || []
                }
            }),
            pageInfo: productsData.meta.pagination
        }
    }
}
