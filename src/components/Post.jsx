import classes from "./Post.module.css";
function Post(props) {
  const { name, body } = props;

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
