import { useEffect, useState } from "react";
import styles from "./Input.module.css";
import { HiOutlineX } from "@react-icons/all-files/hi/HiOutlineX";

function Input({
  addItem,
  isToggle,
  editItem,
  resetEditItem,
  editItemList,
}: any) {
  const [item, setItem] = useState("");

  useEffect(() => {
    if (editItem != "") {
      setItem(editItem);
    }
  }, [editItem]);
  const close = () => {
    isToggle();
  };

  const submit = (e: any) => {
    e.preventDefault();
    if (editItem == "") {
      addItem(item);
    } else {
      editItemList(item, editItem);
    }
    isToggle();
    resetEditItem();
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
              onChange={(e) =>
                setItem(
                  e.target.value.charAt(0).toUpperCase() +
                    e.target.value.slice(1)
                )
              }
              className={styles.input}
              placeholder="to do item"
            />
            <button
              type="submit"
              onClick={submit}
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
