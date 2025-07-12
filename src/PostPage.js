  import React, {  useContext } from 'react'
  import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

  // const PostPage = () => {
  //   return (
  //     <main><h1>PostPage</h1>
      
  //     </main>
  //   )
  // }

  // export default PostPage

  // const PostPage=({posts,handleDelete})=>{
    const PostPage=()=>{

    const {posts,handleDelete}=useContext(DataContext)
    const {id}=useParams();
    const post=posts.find(post=>(post.id).toString()===id);
    return(
    <main className='PostPage'>
      <article className='post'>
        {
          post &&

          <>
              <h2> {post.title}</h2>
              <p className='postDate'>{post.datetime}</p>
              <p className='postBody'>{post.body}</p>
              <Link to={`/edit/${post.id}`} ><button className='Editbutton' >Edit Post</button></Link>
              <button className='Deletebutton' onClick={()=> handleDelete(post.id)}>
                Delete Post

              </button>
          </>
        }
        {
          !post &&
          <>
          <h2>
          Page not found
        </h2>
        <p>
          well ! that is so disappointing ..
        </p>
        <p>
         <Link to="/" >Visit Our Home Page..</Link> 
        </p>
          
          </>
        }
      </article>
    </main>
    )

  }
  export default PostPage
