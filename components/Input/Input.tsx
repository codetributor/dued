import styles from "./Input.module.css";

function Input() {
  return (
    <div className={styles.input__container}>
      <div className={styles.modal__container}>
        <div className={styles.modal}>
          <input className={styles.input} placeholder="to do item" />
          <button className={styles.input__button}>add item</button>
        </div>
      </div>
    </div>
  );
}

export default Input;
