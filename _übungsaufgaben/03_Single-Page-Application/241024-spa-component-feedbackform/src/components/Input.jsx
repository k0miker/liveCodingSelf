const Input = (props) => {
  const isArea = props.type === "textarea";
  console.log(props);

  return (
    <>
      <label htmlFor={props.name}>{props.name}</label>
      {isArea ? <textarea {...props}> </textarea> : <input {...props}></input>}
    </>
  );
};

export default Input;
