import Repo from "./Repo.jsx";
import { useEffect, useState } from "react";
import "./Organization.css";

function Organization({ orgs, currentOrg, currentOrgData, setCurrentOrg }) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => {
      fetch("https://api.github.com/orgs/" + currentOrg + "/repos")
        .then((response) => response.json())
        .then((result) => setRepos(result));
    }, 15 * 1000);
    return () => {
      setRepos([]);
      clearTimeout(id);
    };
  }, [currentOrg]);

  function handleNext() {
    let nextOrg = orgs[orgs.indexOf(currentOrg) + 1];
    if (!nextOrg) {
      nextOrg = orgs[0];
    }
    setCurrentOrg(nextOrg);
  }

  return (
    <div className="org">
      <button onClick={handleNext}>Next</button>

      <h2>{currentOrgData.name}</h2>
      <img src={currentOrgData.avatar_url} alt="" />
      <p>{currentOrgData.description}</p>
      <p>
        {currentOrgData.location} {currentOrgData.followers} followers
      </p>
      <ul>
        {repos?.map((r) => (
          <Repo key={r.id} repo={r} />
        ))}
      </ul>
    </div>
  );
}

export default Organization;
