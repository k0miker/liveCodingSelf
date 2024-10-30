const Results = ({ results }) => {
  return (
    <ul>
      {results.map((result) => {
        return (
          <li key={result.id}>
            <a href={result.html_url} target="_blank">
              {result.full_name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Results;
