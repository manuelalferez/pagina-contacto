import React from "react";
import "./Blog.css";
import posts from "../../data/Blog/Posts";

const CATEGORIES = ["Books", "Reflections", "Computing"];

function Blog(props) {
  let list = [];

  for (const category of CATEGORIES) {
    list.push(<h1 key={category} className='Blog__category'>{category}</h1>);
    for (const post of posts) {
      if (post.category === category) {
        list.push(<p key={post.key}><b>{post.title} - </b> {post.summary}</p>);
      }
    }
  }

  return <div className="Blog">{list}</div>;
}

export default Blog;
