import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-slate-300">
      <div>
        <p className="text-4xl">Blog App</p>
      </div>
      <div>
        <ul className="flex gap-2">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Contect</li>
          <li
            onClick={handleSignUpClick} // Use the function reference
            className="cursor-pointer hover:underline"
          >
            SignUp
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
