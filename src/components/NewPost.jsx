import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPost(props) {
  const { onCancel, onAddPost } = props;

  const [nam, setNam] = useState("");
  const [body, setBody] = useState("");

  function bodyHandler(e) {
    setBody(e.target.value);
  }

  function nameHandler(e) {
    setNam(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const postData = {
      body: body,
      name: nam,
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="name">Name</label>
          <br />
          <textarea id="name" required onChange={nameHandler}></textarea>
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <br />
          <textarea id="body" required rows={3} onChange={bodyHandler} />
        </p>
        <span>
          <button type="button" className={classes.can} onClick={onCancel}>
            Cancel
          </button>
          <button className={classes.sub}>Submit</button>
        </span>
      </form>
    </>
  );
}
export default NewPost;
