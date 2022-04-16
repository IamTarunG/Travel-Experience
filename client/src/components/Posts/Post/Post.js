import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePosts } from "../../../store/actions/posts";
export default function Post(props) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deletePosts(id));
  };
  console.log(props.post);
  return props.post.length === 0 ? (
    <div className="text-center">Loading...</div>
  ) : (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {props.post.map((ele) => {
        return (
          <div className="rounded overflow-hidden shadow-lg" key={ele._id}>
            <img className="w-full" src={ele.image} alt="Mountain" />
            <small className="mx-4">{moment(ele.createdAt).fromNow()}</small>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{ele.title}</div>
              <p className="text-gray-700 text-base">{ele.message}</p>
            </div>
            <div className="px-6 ">
              {ele.tags.map((tag) => {
                return (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >{`#${tag} `}</span>
                );
              })}
            </div>
            <div className="flex justify-around my-4">
              <button
                onClick={() => props.setCurrentId(ele._id)}
                className="bg-sky-400 py-2 px-4 text-white font-bold rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(ele._id)}
                className="bg-red-400 py-2 px-4 text-white font-bold rounded-md "
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
