import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LinkInput = () => {
  const [link, setLink] = useState("");
  const navigate = useNavigate(); // React Router navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!link.trim()) return;

    try {
      await axios.post("https://gate-marks.onrender.com/api/links/add", { url: link });
      setLink("");
      navigate("/404"); // Redirect to 404 page after submission
    } catch (error) {
      console.error("Failed to save link.", error);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col md:flex-row w-full items-center bg-white p-4 rounded-lg shadow-lg"
    >
      <input
        type="url"
        placeholder="Enter your link here..."
        className="w-full p-3 border border-gray-300 rounded-lg text-gray-900 outline-none md:mr-2"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
      />
      <button
        type="submit"
        className="mt-2 md:mt-0 bg-yellow-400 text-blue-900 px-5 py-2 rounded-lg hover:bg-yellow-500 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default LinkInput;
