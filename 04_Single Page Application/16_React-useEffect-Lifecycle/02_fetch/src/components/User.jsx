import { useEffect, useState } from "react";

const User = ({ id }) => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("User useEffect - side-effect");
    setIsLoading(true);

    const timer = setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then((response) => response.json())
        .then((json) => {
          setDetails(json);
          setIsLoading(false);
        });
    }, 2000);
    return () => {
      clearTimeout(timer);
      console.log("cleanup");
    };
  }, [id]);

  console.log("Mounting");

  return <div>{isLoading ? <p>is Loading...</p> : <p>{details.name}</p>}</div>;
};

export default User;
