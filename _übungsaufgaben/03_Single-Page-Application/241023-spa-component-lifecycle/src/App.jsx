import { useEffect, useState } from "react";
import Organization from "./components/Organization";

function App() {
  const [orgs, setOrgs] = useState(null);
  const [currentOrg, setCurrentOrg] = useState(null);
  const [currentOrgData, setCurrentOrgData] = useState(null);

  useEffect(() => {
    fetch("orgs.csv")
      .then((response) => response.text())
      .then((result) => setOrgs(result.split(",")));
  }, []);

  useEffect(() => {
    if (orgs) {
      setCurrentOrg(orgs[0]);
    }
  }, [orgs]);

  useEffect(() => {
    if (currentOrg) {
      fetch("https://api.github.com/orgs/" + currentOrg)
        .then((response) => response.json())
        .then((result) => setCurrentOrgData(result));
    }
  }, [currentOrg]);

  if (currentOrgData) {
    return (
      <Organization
        orgs={orgs}
        currentOrg={currentOrg}
        currentOrgData={currentOrgData}
        setCurrentOrg={setCurrentOrg}
      />
    );
  }

  return <p>Loading...</p>;
}

export default App;
