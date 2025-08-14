import React from "react";
import BlogList from "../components/Blog/BlogList";
import "../components/Blog/BlogLanding.css";

export default function BlogPage() {
  return (
    <div className="blog-page">
      <h1 className="blog-title">Our Blog</h1>
      <BlogList />
    </div>
  );
}
