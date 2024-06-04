import PostList from "./components/PostList.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";
function App() {
  const [isVisible, setIsVisible] = useState(false);
  function hide() {
    setIsVisible(false);
  }
  function show() {
    setIsVisible(true);
  }
  return (
    <>
      <Header onCreatePost={show} />
      <main>
        <PostList isPosting={isVisible} onStopPosting={hide} />
      </main>
    </>
  );
}
export default App;
