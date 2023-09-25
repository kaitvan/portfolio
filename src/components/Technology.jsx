import styles from "./Technology.module.css";

const Technology = (props) => {
  return (
    <div className={`${styles.technology} ${styles[props.level]}`}>
      <p>{props.skill}</p>
    </div>
  );
};

export default Technology;
