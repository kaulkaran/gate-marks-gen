import { useState } from "react";

const LinkForm = ({ addLink }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    addLink(url);
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="url" 
        placeholder="Enter link..." 
        value={url} 
        onChange={(e) => setUrl(e.target.value)}
        required 
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default LinkForm;
