import classes from "./Post.module.css";
function Post({ name, body }) {
  return (
    <div>
      <div className={classes.post}>
        <p className={classes.author}>{name}</p>
        <p className={classes.text}>{body}</p>
      </div>
    </div>
  );
}
export default Post;
