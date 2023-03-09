import { useEffect, useState } from "react";
import { HiOutlineX } from "@react-icons/all-files/hi/HiOutlineX";
import { HiPencil } from "@react-icons/all-files/hi/HiPencil";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
import styles from "./ItemList.module.css";

function ItemList({ itemList, deleteItem, check, edit, toggle }: any) {
  return (
    <div className={styles.itemList__container}>
      <div>
        {itemList.map((item: any) => {
          console.log(item);
          return (
            <div key={item.todo} className={styles.item}>
              <p
                style={{
                  textDecoration: item.strikeOut,
                }}
                className={styles.itemText}
              >
                {item.todo}
              </p>
              <div className={styles.symbols__container}>
                <HiOutlineX
                  onClick={(e) => {
                    e.preventDefault();
                    deleteItem(item.todo);
                  }}
                  className={styles.symbol}
                />
                <HiPencil
                  onClick={(e) => {
                    e.preventDefault();
                    edit(item.todo);
                    toggle();
                  }}
                  className={styles.symbol}
                />
                <HiCheck
                  color={item.check}
                  onClick={(e) => {
                    e.preventDefault();
                    check(item.todo);
                  }}
                  className={styles.symbol}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
