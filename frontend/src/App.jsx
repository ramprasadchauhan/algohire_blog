import { Route, Routes } from "react-router-dom";
import Footer from "./pages/layout/Footer";
import CreatePost from "./pages/CreatePost";
import ShowPost from "./pages/ShowPost";
import EditPost from "./pages/EditPost";
import DeletePost from "./pages/DeletePost";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts/details/:id" element={<ShowPost />} />
          <Route path="/posts/edit/:id" element={<EditPost />} />
          <Route path="/posts/delete/:id" element={<DeletePost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
