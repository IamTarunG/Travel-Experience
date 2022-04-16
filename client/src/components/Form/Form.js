import React, { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, updatePosts } from "../../store/actions/posts";
export default function Form(props) {
  const post = useSelector((state) =>
    props.currentId ? state.posts.find((p) => p._id === props.currentId) : null
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    tags: "",
    image: "",
  });
  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post]);
  const handleSubmit = () => {
    if (props.currentId === 0) {
      dispatch(createPosts(formData));
      clear();
    } else {
      dispatch(updatePosts(props.currentId, formData));
      clear();
    }
  };
  const clear = () => {
    props.setCurrentId(0);
    setFormData({
      title: "",
      message: "",
      tags: "",
      image: "",
    });
  };
  return (
    <div className="flex justify-center items-center my-4 ">
      <div className="align-middle  flex items-center flex-col justify-evenly rounded-md shadow-2xl w-screen">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
          className="my-4 mx-4 border border-blue-400 outline-blue-500 rounded-md px-4 py-2 flex"
        />
        <input
          type="text"
          placeholder="Message"
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          value={formData.message}
          className="my-4 mx-4 border border-blue-400 outline-blue-500 rounded-md px-4 py-2 flex"
        />
        <input
          type="text"
          placeholder="Tags"
          onChange={(e) =>
            setFormData({ ...formData, tags: e.target.value.split(",") })
          }
          value={formData.tags}
          className="my-4 mx-4 border border-blue-400 outline-blue-500 rounded-md px-4 py-2 flex"
        />
        <FileBase64
          type="file"
          multiple={false}
          name="image"
          onDone={({ base64 }) => setFormData({ ...formData, image: base64 })}
        />
        <button
          onClick={handleSubmit}
          className="bg-sky-500 py-2 px-3 rounded-md text-white font-bold flex my-4 hover:bg-sky-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
