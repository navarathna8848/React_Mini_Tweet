// import React from 'react'

import { useContext } from "react";
import DataContext from "./context/DataContext";

// const NewPost = () => {
//   return (
//     <main><h1>NewPost</h1></main>
//   )
// }

// export default NewPost

// const NewPost = ({
//   handleSubmit,
//   postTitle,
//   setPostTitle,
//   postBody,
//   setPostBody
// }) => {
  const NewPost = () => {
    const {
  handleSubmit,
  postTitle,
  setPostTitle,
  postBody,
  setPostBody
}=useContext(DataContext)
  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
