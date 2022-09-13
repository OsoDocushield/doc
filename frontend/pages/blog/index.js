import { useEffect, useState } from "react";
import Blog from "../../src/components/blog/Blog";
import Paggination from "../../src/components/Paggination";
import PageTitle from "../../src/layouts/PageTitle";
import Layout from "../../src/layouts/Layout";
import { API_URL } from "../../utils/utils";

const BlogComponent = ({ blogs }) => {
    console.log(blogs)
    return (
        <Layout >
            <main>
                <PageTitle pageHeading="Blog" active="Blog" />
                <section className="blog-area pt-100 ">
                    <div className="container">
                        <div className="row">
                            {blogs &&
                                blogs.map((blog, i) => (
                                    <Blog
                                        key={blog.id}
                                        blog={blog}
                                        id={i}
                                        active={true}
                                        sort={3}
                                        column={4}
                                    />
                                ))}
                        </div>
                        {/* <Paggination
                            active={0}
                            setActive={() => { }}
                            sort={3}
                            length={blogs && blogs.length}
                        /> */}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default BlogComponent;


export async function getServerSideProps(context) {
    let url = `${API_URL}/api/blogs?populate=*`

    let data = await fetch(url)
    data = await data.json()
    data.data.map(each => {
        each.attributes.image_url = each.attributes?.image?.data?.attributes?.url || ''
    })
    return {
        props: {
            blogs: data.data
        }
    }
}