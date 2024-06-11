import { PostsIndex } from './PostsIndex';
import { PostsNew } from './PostsNew';
import { PostsShow } from './PostsShow';
import { Modal } from './Modal';
import { Signup } from './Signup';
import { Login } from './Login';
import { LogoutLink } from './LogoutLink';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

export function Content() {
  // let posts = [];
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log('getting the data');

    axios.get('http://localhost:3000/posts.json').then(response => {
    console.log(response.data);
    console.log('i am on line 24');

    setPosts(response.data);
    })
  }

  const handleShowPost = (myPost) => {
    console.log(myPost)
    setCurrentPost(myPost)
    console.log('showing post...');
    // change the value of isRecipesShowVisible    
    setIsPostsShowVisible(true);
  }
  const handleClose = () => {
    console.log('closing the modal...');
    setIsPostsShowVisible(false);
  }
  const handleCreatePost = (theParams) => {
    console.log('creating post....')
    axios.post("http://localhost:3000/recipes.json", theParams).then(response => {
      console.log(response.data)
      setPosts([...posts, response.data])
    })
  }
  const handleUpdatePost = (id, theParams, sucessCallback) => {
    console.log('updating post')
    axios.patch(`http://localhost:3000/posts/${id}.json`, theParams).then(response => {
      console.log(response.data) 
      // reset the posts array, leave most of them alone, and replace one of them (the one i just updated)            
      setPosts(posts.map(post => {
        if (post.id === id) {
          return response.data
        } else {
          return post
        }        
      }))
      sucessCallback()
      handleClose() 
    })
  }
  useEffect(handleIndexPosts, [])


  return (    
    <main>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<PostsIndex posts={posts} onShowPost={handleShowPost}/>} />
        <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />
      </Routes>

      <br />
      <br />
      <br />    
      
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} />
      </Modal>
    </main>    
  );
}





// make a button
// write a function to run on the button click
// function print hello
// make web request from function using a library called axios