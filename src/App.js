    import { Route,Routes } from "react-router-dom";
    import About from "./About";
    import Footer from "./Footer";
    import Header from "./Header";
    import Home from "./Home";
    import Missing from "./Missing";
    import Nav from "./Nav";
    import NewPost from "./NewPost";
    import PostPage from "./PostPage";
    import EditPost from "./EditPost";
    


    function App() {


      // const [posts, setPosts] = useState([])
    //   {
    //     id: 1,
    //     title: "My First Post",
    //     datetime: "July 01, 2021 11:17:36 AM",
    //     body: "Made a video about Tesla Q1 results"
    //   },
    //   {
    //     id: 2,
    //     title: "My 2nd Post",
    //     datetime: "July 01, 2021 11:17:36 AM",
    //     body: "I attended a DeFi blockchain event"
    //   },
    //   {
    //     id: 3,
    //     title: "My 3rd Post",
    //     datetime: "July 01, 2021 11:17:36 AM",
    //     body: "Web3 global summit next week"
    //   },
    //   {
    //     id: 4,
    //     title: "My Fourth Post",
    //     datetime: "July 01, 2021 11:17:36 AM",
    //     body: "ETH will outperform BTC"
    //   }
    // ]);

    // const [search,setSearch]=useState('')
    // const [searchResults,setSearchResults]=useState('')

    // const [postTitle, setPostTitle] = useState('');
    // const [postBody, setPostBody] = useState('');

    // const [editTitle, setEditTitle] = useState('');
    // const [editBody, setEditBody] = useState('');
  

    // const navigate = useNavigate();

    // const { width } = useWindowSize();

    // const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');
    
    // useEffect(()=>{
    //   setPosts(data)
    // },[data])

    //     useEffect ( () => {
    //     const fetchPosts = async () => {
    //     try {
    //     const response = await api.get('/posts');
    //     setPosts(response.data) ;
    //     } catch (err) {
    //     if (err.response) {
    //     // Not in the 200 response range
    //     console. log(err.response.data) ;
    //     console. log (err. response. status) ;
    //     console. log(err.response.headers);
    //     }
    //     else {
    //     console. log(`Error: ${err.message}` ) ;
    //     }
    //   }
    // }
    //     fetchPosts () ;
    //     }, [])


    // useEffect(()=>{
    //   const filteredResults=posts.filter((post)=>((post.body).toLowerCase()).includes(search.toLowerCase() ) ||((post.title).toLowerCase()).includes(search.toLowerCase() ) )

    //   setSearchResults(filteredResults.reverse())
    // },[posts,search])
  

    //   const handleSubmit = async (e) => {
    //   e.preventDefault();

    //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    //   const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    //   const newPost = { id, title: postTitle, datetime, body: postBody };

    //   try {
    //     const response = await api.post('/posts', newPost);
    //     const allPosts = [...posts, response.data];
    //     setPosts(allPosts);
    //     setPostTitle('');
    //     setPostBody('');
    //     navigate('/');
    //   } catch (err) {
    //     console.log(`Error: ${err.message}`);
    //   }
    // };

    //       const handleEdit = async (id) => {
    //       const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    //       const updatedPost = { id, title: editTitle, datetime, body: editBody };

    //       try {
    //         const response = await api.put(`/posts/${id}`, updatedPost);
    //         setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
    //         setEditTitle('');
    //         setEditBody('');
    //         navigate('/');
    //       } catch (err) {
    //         console.log(`Error: ${err.message}`);
    //       }
    //     };


    //     const handleDelete = async (id) => {
    //     console.log("Trying to delete post with id:", id);
    //     try {
    //       const res = await api.delete(`/posts/${id}`);
    //       console.log("Deleted:", res.status); // 200 or 204 expected
    //       const updatedPosts = posts.filter(post => post.id !== id);
    //       setPosts(updatedPosts);
    //       navigate('/');
    //     } catch (err) {
    //       console.error("Delete failed:", err);
    //     }
    //   };


    return (
        <div className="App"  >

          {/* <nav>

            <ul>

              <li> <Link to="/">Home </Link></li>
              <li> <Link to="/about">About </Link></li>
              <li> <Link to="/newpost">NewPost </Link></li>
              <li> <Link to="/postpage">PostPage </Link></li>

            </ul>
          </nav> */}

          {/* <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/newpost" element={<NewPost />}/>
        
            <Route path="/postpage" element={<PostLayout />}> */}

                  {/* <Route path="/postpage/:id" element={<Post />}/> */}
                  
                  {/* <Route index element={<PostPage />}/>
                  <Route path=":id" element={<Post />}/>
                  <Route path="newpost" element={<NewPost />}/>

            </Route>
            
            <Route path="*" element={<Missing />} />
          </Routes> */}

          
          <Header title="Mini Tweet"  />

          <Nav 
          // search={search}
          // setSearch={setSearch}
          />

          <Routes>
            <Route path="/" element= 
          {<Home 
          // posts={searchResults}
          // fetchError={fetchError}
          // isLoading={isLoading}
          />}/>

          <Route path="post">
          <Route index element={
          <NewPost 
          // handleSubmit={handleSubmit}
          // postTitle={postTitle}
          // setPostTitle={setPostTitle}
          // postBody={postBody}
          // setPostBody={setPostBody}
          />}/>

          
          <Route path=":id" element={<PostPage 
          // posts={posts} handleDelete={handleDelete}
           />}/>

          </Route>

          <Route path="edit/:id" element={
          <EditPost
            // posts={posts}
            // handleEdit={handleEdit}
            // editTitle={editTitle}
            // setEditTitle={setEditTitle}
            // editBody={editBody}
            // setEditBody={setEditBody}
          />
        } />


          <Route path="about" element={<About />}/>
          <Route path="*" element={<Missing />}/>
        
          </Routes>

            <Footer />
            
        </div>
      );
    }

    export default App;
