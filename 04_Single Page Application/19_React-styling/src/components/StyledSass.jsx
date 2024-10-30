import styles from "./styledSass.module.scss";

const StyledSass = () => {
  return (
    <div className={styles["form-container"]}>
      <ul>
        <li>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </li>
      </ul>
      <button className={styles["submit-button"]}>Submit</button>
    </div>
  );
};

export default StyledSass;
