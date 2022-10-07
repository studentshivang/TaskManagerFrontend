import Post from "../Posts/Post";

const SavedPosts = () => {
  return (
    <>
      <h1>Hello from the SavedPosts side!</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 ms-5">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </>
  );
};

export default SavedPosts;
