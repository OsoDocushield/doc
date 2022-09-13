import Link from "next/link";
import { fromImageToUrl } from "../../../utils/utils";
import { dblock } from "../../utils/utils";

const Blog = ({ blog, active, sort, extraClass, column, id }) => {
  return (
    <div className={`col-lg-6 col-md-6`}    >
      <article className="postbox post format-image mb-40">
        <div className="postbox__thumb">
          <Link href={`/blog/${blog.id}`}>
            <a>
              {blog.attributes.image_url && <img src={fromImageToUrl(blog.attributes.image_url)} alt="blog image" />}
            </a>
          </Link>
        </div>
        <div className="postbox__text p-30">
          <div className="post-meta mb-15">
            <span>
              {/* <a href="#">
                <i className="far fa-user" />{" "}
                {blog.author && blog.author.name.split(" ")[0]}
              </a> */}
            </span>
            <span>
              <a href="#">
                <i className="far fa-comments" />{" "}
                {blog.attributes.comments && blog.attributes.comments.length} Comments
              </a>
            </span>
          </div>
          <h3 className="blog-title blog-title-sm">
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.attributes.title}</a>
            </Link>
          </h3>
          <div className="post-text">
            <p>{blog.attributes.blog_text.slice(1, 322)}</p>
          </div>
          <div className="read-more">
            <Link href={`/blog/${blog.id}`}>
              <a className="read-more">
                read more <i className="flaticon-right-arrow" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog;
