import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogData } from "../components/Blog/blogData";
import "../components/Blog/BlogLanding.css";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="blog-detail">
      {/* Blog Title */}
      <h1>{blog.title}</h1>

      {/* Blog Image */}
      <img src={blog.image} alt={blog.title} />

      {/* Blog Content */}
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />

      {/* Bottom Section */}
      <div className="blog-bottom-section">
        {/* Back Button */}
        <Link to="/blog" className="back-button">
          ← Back to Blog
        </Link>

        {/* Paragraph */}
        <p className="blog-bottom-text">
          Thanks for reading! We’d love to help you grow your business with our expert IT and digital solutions.
        </p>

        {/* CTA Button */}
        <a href="https://wa.me/917838649867" className="cta-button">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
