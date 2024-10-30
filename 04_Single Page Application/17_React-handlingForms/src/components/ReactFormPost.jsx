import { useState } from "react";

const ReactFormPost = () => {
  const [formData, setFormData] = useState({ title: "", body: "", userId: "" });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending POST request with data:", formData);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log("Response from API:", data);
      setResponse(data);
    } catch (error) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <h2>3. Post Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body: </label>
          <input
            type="text"
            name="body"
            id="body"
            placeholder="Enter Body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="userId">userId: </label>
          <input
            type="text"
            name="userId"
            id="userId"
            placeholder="Enter userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h2>Response from API:</h2>
          <p>ID: {response.id}</p>
          <p>Title: {response.title}</p>
          <p>Body: {response.body}</p>
          <p>User ID: {response.userId}</p>
        </div>
      )}
    </div>
  );
};

export default ReactFormPost;
