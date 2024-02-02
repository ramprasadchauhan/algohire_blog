import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowPost = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div
      className="p-4
  "
    >
      <BackButton />
      <h1 className="text-3xl my-4">Show post</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-200 rounded-xl p-4 w-fit">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{post._id} </span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{post.title} </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Post</span>
            <span>{post.creater} </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{post.publishYear} </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(post.createdAt).toLocaleString()} </span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(post.updatedAt).toLocaleString()} </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowPost;
