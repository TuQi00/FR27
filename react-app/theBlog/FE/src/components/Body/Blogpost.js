// components/BlogPost.js
import React from 'react';

const BlogPost = ({ title, content, imagePath }) => {
  return (
    <article className="blog-post">
      <figure>
        <img src={imagePath} alt={`Thumbnail for ${title}`} />
        <figcaption>{title}</figcaption>
      </figure>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default BlogPost;
