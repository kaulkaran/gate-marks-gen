import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-5xl font-bold">503</h1>
      <p className="text-xl mt-4">Oops! Due to high usage the server has been paused for some minutes...</p>
      <Link 
        to="/" 
        className="mt-6 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
