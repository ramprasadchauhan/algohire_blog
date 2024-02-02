import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [creater, setCreater] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSavePost = () => {
    const data = { title, creater, publishYear };
    setLoading(true);
    axios
      .post("http://localhost:3000/posts", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happen. Please check console");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Post</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-200 rounded-xl w-[600px] p-4 mx-auto">
        <lebel className="text-xl mr-4 text-gray-500">Title</lebel>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="flex flex-col border-2 border-sky-200 rounded-xl w-[600px] p-4 mx-auto">
        <lebel className="text-xl mr-4 text-gray-500">Write Your Post</lebel>
        <textarea
          rows="4"
          cols="40"
          value={creater}
          onChange={(e) => setCreater(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <div className="flex flex-col border-2 border-sky-200 rounded-xl w-[600px] p-4 mx-auto">
        <lebel className="text-xl mr-4 text-gray-500">Publish Year</lebel>
        <input
          type="text"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full"
        />
      </div>
      <button className="p-2 bg-sky-300 m-8" onClick={handleSavePost}>
        Save
      </button>
    </div>
  );
};

export default CreatePost;
