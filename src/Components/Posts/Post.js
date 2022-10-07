import React, { useState } from "react";
import "./index.css";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
const Post = () => {
  const [liked, setliked] = useState(false);
  const [saved, setsaved] = useState(false);

  return (
    <div className="container ">
      <div className="row d-flex ">
        <div className="col-md-8">
          <div className="card">
            <div className="d-flex justify-content-between p-2 px-3">
              <div className="d-flex flex-row align-items-center">
                <img
                  src="https://picsum.photos/100"
                  width="50"
                  alt="random"
                  className="rounded-circle"
                />
                <div className="d-flex flex-column ml-2">
                  <span className="font-weight-bold">Jeanette Sun</span>{" "}
                  <small className="text-primary">Collegues</small>{" "}
                </div>
              </div>
              <div className="d-flex flex-row mt-1 ellipsis">
                <small className="mr-2">20 mins</small>{" "}
                <i className="fa fa-ellipsis-h"></i>{" "}
              </div>
            </div>{" "}
            <img
              src="https://picsum.photos/720"
              alt="random"
              className="img-fluid"
            />
            <div className="p-2">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div
                  onClick={() => setliked(!liked)}
                  style={{ cursor: "pointer" }}
                  className="d-flex flex-row icons d-flex align-items-center"
                >
                  {liked ? <ThumbUpIcon /> : <ThumbUpOffAltIcon />}
                </div>
                <div
                  onClick={() => alert("Commented!")}
                  style={{ cursor: "pointer" }}
                  className="d-flex flex-row icons d-flex align-items-center"
                >
                  <CommentIcon />
                </div>
                <div
                  onClick={() => setsaved(!saved)}
                  style={{ cursor: "pointer" }}
                  className="d-flex flex-row muted-color"
                >
                  {saved ? <TurnedInIcon /> : <TurnedInNotIcon />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <br />
    </div>
  );
};

export default Post;
