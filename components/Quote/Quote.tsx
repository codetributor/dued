import { useEffect, useState } from "react";
import styles from "./Quote.module.css";

function Quote() {
  const [randomQuote, setRandomQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://type.fit/api/quotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const rand = Math.floor(Math.random() * (res.length - 1));
        setRandomQuote(res[rand].text);
        setAuthor(res[rand].author);
      });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <div className={styles.quote1}>
          <img src="/quote.png" height={50} width={50} />
        </div>
        <div className={styles.quote2}>
          <img src="/quote.png" height={50} width={50} />
        </div>
        <p className={styles.para}>{randomQuote}</p>
        <div className={styles.author__container}>
          {author ? (
            <p className={styles.author}>~ {author}</p>
          ) : (
            <p className={styles.author}>~ anonymous</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quote;
