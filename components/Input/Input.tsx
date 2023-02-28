import { useState } from "react";
import styles from "./Input.module.css";
import { HiOutlineX } from "react-icons/Hi";

function Input({ addItem, isToggle }: any) {
  const [item, setItem] = useState("");

  const close = () => {
    isToggle();
  };

  return (
    <div className={styles.input__container}>
      <div className={styles.modal__container}>
        <div className={styles.modal}>
          <div onClick={close} className={styles.x__container}>
            <HiOutlineX />
          </div>
          <form className={styles.form}>
            <input
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className={styles.input}
              placeholder="to do item"
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                addItem(item);
                isToggle();
              }}
              className={styles.input__button}
            >
              add item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Input;
