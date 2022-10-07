import Post from "../Posts/Post";

const MyFeed = () => {
  return (
    <>
      <h1>Hello from the Myfeed side!</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 ms-5">
            <Post />
            <Post />
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

export default MyFeed;
