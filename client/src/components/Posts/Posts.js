import React from "react";
import Post from "./Post/Post";
import { useSelector } from "react-redux";
export default function Posts(props) {
  const posts = useSelector((state) => state.posts);
  const singlePost = posts.map((post) => {
    return post;
  });

  return (
    <div>
      <Post post={singlePost} setCurrentId={props.setCurrentId} />
    </div>
  );
}
