import React, { useState } from 'react';

export function PostsNew() {
  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const [image, setImage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handling submit...')
    const params = new FormData(event.target)
    console.log(event)
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data)
    })
}


  return (    
    <div id="posts-new">
      <h1>New post</h1>
      <p id="green-paragraph">this is a special green paragraph</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          Title: <input type="text" name="title" />
        </div>
        <div>
          Body: <input type="text" name="body"/>
        </div>
        <div>
          image: <input type="text" name="image"/>
        </div>
        <button type="submit">Create post</button>
      </form>  
    </div>
  );
}

 
