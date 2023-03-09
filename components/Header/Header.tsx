import styles from "./Header.module.css";
import { HiOutlinePlus } from "@react-icons/all-files/Hi/HiOutlinePlus";

function Header({ isToggle }: any) {
  return (
    <div className={styles.header__container}>
      <h1 className={styles.title}>Dued</h1>
      <HiOutlinePlus
        onClick={() => {
          isToggle();
        }}
        color="white"
      />
    </div>
  );
}

export default Header;
