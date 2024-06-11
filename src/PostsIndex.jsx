export function PostsIndex(props) {
  // console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <p>hello i am on the page</p>
    <div className="cards">
      {props.posts.map(post => (
        <div key={post.id} className="posts card">
          <h2>{post.id}</h2>
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>Body: {post.body}</p>
          <button>More info</button>
          <button onClick={() => props.onShowPost(post)}>Show modal</button>
        </div>
      ))}
      </div>
    
    
    </div>
  );
}