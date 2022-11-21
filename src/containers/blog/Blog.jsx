import React from "react";
import { Article } from "../../components/exportsIndex";
import "./blog.css";
import { blog1, blog2, blog3, blog4, blog5 } from "./import";

function Blog() {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt__blog-container">
        <div className="gpt__blog-container-groupA">
          <Article
            imageUrl={blog1}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt__blog-container-groupB">
          <Article
            imageUrl={blog2}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageUrl={blog3}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageUrl={blog4}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imageUrl={blog5}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
