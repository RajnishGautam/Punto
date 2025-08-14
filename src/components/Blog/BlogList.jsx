import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "./blogData";
import "./BlogLanding.css";

export default function BlogList() {
  return (
    <div className="blog-list">
      {blogData.map((blog, index) => (
        <div key={blog.id} className={`blog-card ${index % 2 !== 0 ? "reverse" : ""}`}>
          <div className="blog-card-image">
            <img src={blog.image} alt={blog.title} />
          </div>
          <div className="blog-card-content">
            <h2>{blog.title}</h2>
            <p>{blog.excerpt}</p>
            <Link to={`/blog/${blog.id}`} className="read-more">Read More →</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
