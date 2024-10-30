import { useEffect, useState } from "react";

const ReactFormObject = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // console.log(formData);
  }, [formData]);

  return (
    <div>
      <h2>2. Form with Object State</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default ReactFormObject;

// static key syntax:
//   const obj = { username: "JohnDoe" };
// dynamic key syntax:
//   const username = "username";
//   const obj2 = { [username]: "JohnDoe" };
