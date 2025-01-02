import Post from "./Post";
import NewPost from "./NewPost.jsx";
import classes from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostList(props) {
  const { isPosting, onStopPosting } = props;

  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting ? (
        <Modal onExecute={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
      ;
      {posts.length > 0 ? (
        <ul className={classes.list}>
          {posts.map((post) => (
            <Post key={post.body} name={post.name} body={post.body} />
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h1>There is no post available.</h1>
          <p>Add some post.</p>
        </div>
      )}
      ;
    </>
  );
}
export default PostList;
