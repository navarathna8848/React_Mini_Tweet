import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DataContext from './context/DataContext';

// const EditPost = ({
//   posts,
//   handleEdit,
//   editTitle,
//   setEditTitle,
//   editBody,
//   setEditBody
// }) => {
    const EditPost = () => {

        const {
  posts,
  handleEdit,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody
}=useContext(DataContext)
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find(post => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(post.id);
  };

  return (
    <main className="NewPost">
      {post ? (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />

            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />

            <button type="submit">Update Post</button>
          </form>
        </>
      ) : (
        <>
          <h2>Post Not Found</h2>
          <p>Sorry, the post you are trying to edit does not exist.</p>
          <button onClick={() => navigate('/')}>Back to Home</button>
        </>
      )}
    </main>
  );
};

export default EditPost;
