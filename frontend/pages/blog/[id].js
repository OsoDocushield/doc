import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import BlogSideBar from "../../src/components/blog/BlogSideBar";
import VideoPopUp from "../../src/components/VideoPopUp";
import { AuthContext } from "../../src/context/AuthContext";
import Layout from "../../src/layouts/Layout";
import PageTitle from "../../src/layouts/PageTitle";
import { API_URL, fromImageToUrl } from "../../utils/utils";

const BlogDetails = ({ blog }) => {
    const { user } = useContext(AuthContext);
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    const router = useRouter()


    useEffect(() => {
        if (blog && blog.id) {
            fetch(`${API_URL}/api/blog-comments?filters[blog][id][$eq]=${blog.id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }).then(e => e.json()).then(result => setComments((result.data || []).map(e => ({ ...e.attributes }))))
        }
    }, [])

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        if (comment.replaceAll(' ', '') !== '') {
            let res = await fetch(`${API_URL}/api/blog-comments`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + user?.jwt
                },
                body: JSON.stringify({ data: { comment, blog: { id: blog.id } } })
            })
            res = await res.json()
            if (res?.id) {
                router.reload()
            }
        }
        setLoading(false)

    }

    return (
        <Layout>
            <main>
                <PageTitle pageHeading="Blog" active="Blog details" />
                {blog ? (
                    <div className="blog-area pt-100 pb-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <article className="postbox post format-image mb-40">
                                        {blog.video ? (
                                            <div className="postbox__video mb-35">
                                                <img src={blog.img} alt="Blog" />
                                                <a
                                                    className="popup-video video-btn"
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setPopUp(true);
                                                    }}
                                                >
                                                    <i className="fas fa-play" />
                                                </a>
                                            </div>
                                        ) : (
                                            blog.image && (
                                                <div className="postbox__thumb mb-35">
                                                    <img src={blog.image && fromImageToUrl(blog.image)} alt="blog image" />
                                                </div>
                                            )
                                        )}

                                        <div className="postbox__text bg-none">
                                            <div className="post-meta mb-15">
                                                {blog.updatedAt && (
                                                    <span>
                                                        <i className="far fa-calendar-check" /> {new Date(blog.updatedAt).toLocaleString()}{" "}
                                                    </span>
                                                )}
                                                {blog.comments && (
                                                    <span>
                                                        <a href="#">
                                                            <i className="far fa-comments" />{" "}
                                                            {blog.comments.length} Comments
                                                        </a>
                                                    </span>
                                                )}
                                            </div>
                                            {blog.title && (
                                                <h3 className="blog-title">{blog.title}</h3>
                                            )}

                                            {blog.blog_text && (
                                                <div className="post-text mb-20">
                                                    {blog.blog_text.split("\n").map((e, i) => (
                                                        <p key={i}>{e}</p>
                                                    ))}
                                                </div>
                                            )}
                                            <div className="row mt-50">
                                                <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                                                    <div className="blog-post-tag">
                                                        <span>Related Tags</span>
                                                        {blog.tags &&
                                                            blog.tags.map((tag) => (
                                                                <a href="#" key={tag}>
                                                                    {tag}
                                                                </a>
                                                            ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="post-comments">
                                            <div className="blog-coment-title mb-30">
                                                <h2>
                                                    {comments && comments.length <= 9
                                                        ? `0${comments.length}`
                                                        : comments.length}{" "}
                                                    Comments
                                                </h2>
                                            </div>
                                            <div className="latest-comments">
                                                <ul>
                                                    {comments &&
                                                        comments.map((eachcomment, i) => (
                                                            <li key={i}>
                                                                <div className="comments-box">
                                                                    <div className="comments-avatar">
                                                                        <img
                                                                            src='/img/product/comments/01.png'
                                                                            alt="profilePic"
                                                                        />
                                                                    </div>
                                                                    <div className="comments-text">
                                                                        <div className="avatar-name">
                                                                            <h5>{eachcomment.username}</h5>
                                                                            <span>{new Date(eachcomment.createdAt).toLocaleDateString()}</span>
                                                                        </div>
                                                                        <p>{eachcomment.comment}</p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {user?.jwt && (
                                            <div className="post-comments-form">
                                                <div className="post-comments-title">
                                                    <h2>Post Comments</h2>
                                                </div>
                                                <form
                                                    id="contacts-form"
                                                    className="conatct-post-form"
                                                    action="#"
                                                    onSubmit={handleSubmit}
                                                >
                                                    <div className="row">
                                                        <div className="col-xl-12">
                                                            <div className="contact-icon contacts-message">
                                                                <textarea
                                                                    name="comments"
                                                                    id="comments"
                                                                    cols={30}
                                                                    rows={10}
                                                                    placeholder="Your Comments...."
                                                                    value={comment}
                                                                    onChange={e => setComment(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12">
                                                            <button className="btn theme-btn" type="submit" disabled={loading}>
                                                                Post comment
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-center blog-area pt-100 pb-60">Blog Not Found</h1>
                )}
            </main>
        </Layout>
    );
};



export default BlogDetails;

export async function getServerSideProps(context) {
    let url = `${API_URL}/api/blogs/${context.query.id}?populate=*`

    let blogData = await fetch(url)
    blogData = await blogData.json()
    let blog = null
    if (blogData.data?.id) {
        blog = {
            id: blogData.data.id,
            ...blogData.data.attributes,
            image: blogData.data.attributes.image.data?.attributes?.url,
        }
    }
    return {
        props: {
            blog
        }
    }
}


// http://localhost:1337/api/blog-comments/1

// 