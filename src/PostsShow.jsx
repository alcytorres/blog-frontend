export function PostsShow(props) {
  return (
    <div>
      <p>WE ARE THE CHILDREN</p>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
      <p>{props.post.image}</p>
    </div>
  );
}
