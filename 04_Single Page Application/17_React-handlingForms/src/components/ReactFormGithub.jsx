import { useState } from "react";
import Results from "./Results";

const ReactFormGithub = () => {
  const [searchParams, setSearchParams] = useState({ query: "", user: "" });
  const [results, setResults] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
    //  query: facebook
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { query, user } = searchParams;

    try {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=${query}%20user:${user}`
      );
      const data = await res.json();
      // gibt es data? Falls ja, gib mir die Items | Falls nicht, leeres Array
      setResults(data?.items || []);
    } catch (error) {
      console.error("Error fetching repo: ", error);
      setResults([]); // Optinal, clear ruslts on error
    }
  };

  return (
    <main>
      <h2>4. Github Search Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="query">Search for repo: </label>
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Search for a repo..."
            value={searchParams.body}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="user">Search for user: </label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="...by a specific user"
            value={searchParams.user}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <Results results={results} />
    </main>
  );
};

export default ReactFormGithub;

// https://api.github.com/search/repositories?q=react%20user:facebook

// https://api.github.com/search/repositories?q=angular%20user:google

// Basis URL: https://api.github.com/search/repositories
// Suchparameter: ?q=react%20user:facebook
// Abfrage (query) q=...
// Leerzeichen: %20
// user: user:facebook <- Benutzerspezifische Suche
