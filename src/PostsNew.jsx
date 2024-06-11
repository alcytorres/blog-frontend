import axios from 'axios'

  export function postsNew(props) {
    const handleSubmit = (event) => {
      event.preventDefault()
      console.log('handling submit...')
      const params = new FormData(event.target)
      axios.post("http://localhost:3000/posts.json", params).then(response => {
        console.log(response.data)      
      })
      window.location.href = '/';
    }


  return (    
    <div id="posts-new">
      <h1>New post</h1>
      <p id="green-paragraph">this is a special green paragraph</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
           <input type="text" name="title" />
        </div>
        <div>
          Chef: <input type="text" name="chef"/>
        </div>
        <div>
          directions: <input type="text" name="directions"/>
        </div>
        <div>
          prep time: <input type="text" name="prep_time"/>
        </div>
        <div>
          image url: <input type="text" name="image_url"/>
        </div>
        <div>
          ingredients: <input type="text" name="ingredients"/>
        </div>
        <button type="submit">Create post</button>
      </form>      
    </div>
    
  )
}
 
