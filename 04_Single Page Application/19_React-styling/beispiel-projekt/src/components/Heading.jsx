const Heading = () => {
  const divStyle = {
    color: "rebeccapurple",
    backgroundColor: "lightpink",
    padding: `10px`,
    // wir können Javascript logik in unserem style einfügen
    rotate: `${(Math.random() - 0.5) * 15}deg`,
  };

  return <h1 style={divStyle}>Wonky</h1>;
};

export default Heading;
