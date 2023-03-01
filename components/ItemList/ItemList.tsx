import { useEffect, useState } from "react";
import { HiOutlineX, HiPencil, HiCheck } from "react-icons/Hi";
import styles from "./ItemList.module.css";

function ItemList({ itemList, deleteItem }: any) {
  return (
    <div className={styles.itemList__container}>
      <div>
        {itemList.map((item: string) => {
          return (
            <div className={styles.item} key={item}>
              <p className={styles.itemText}>{item}</p>
              <div className={styles.symbols__container}>
                <HiOutlineX
                  onClick={(e) => {
                    e.preventDefault();
                    deleteItem(item);
                  }}
                  className={styles.symbol}
                />
                <HiPencil className={styles.symbol} />
                <HiCheck className={styles.symbol} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
