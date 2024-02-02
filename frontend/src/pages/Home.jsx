import Header from "./layout/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";

import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Post List</h1>
          <Link to="/posts/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">No</th>
                <th className="border border-slate-600 rounded-md">Title</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Post
                </th>
                <th className="border border-slate-600 rounded-md max-md:hidden">
                  Publish Year
                </th>
                <th className="border border-slate-600 rounded-md">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((post, index) => (
                <tr key={post._id} className="h-8">
                  <td className="border border-slate-700 rounded-md text-center">
                    {index + 1}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    {post?.title}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {post?.creater}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                    {post?.publishYear}
                  </td>
                  <td className="border border-slate-700 rounded-md text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/posts/details/${post._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/posts/edit/${post._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/posts/delete/${post._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-800" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Home;
