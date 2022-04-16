import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

import { getPosts } from "./store/actions/posts";
export default function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <>
      <p className="my-5 text-center text-2xl font-bold">Travel Experience</p>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Posts setCurrentId={setCurrentId} />
    </>
  );
}
