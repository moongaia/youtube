import React, { memo } from "react";
import styles from "./search.module.css";

const Search = memo(({ onSearch }) => {
  const inputRef = React.createRef();

  const searchVideo = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = (event) => {
    event.preventDefault();
    searchVideo();
    inputRef.current.value = "";
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      searchVideo();
    }
  };
  console.log("Header");

  return (
    <header className={styles.search}>
      <div className={styles.logo} onClick={onClick}>
        <i className="fas fa-cloud"></i>
      </div>
      <div className={styles.title}>NuTube</div>
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder="Search Videos..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} onClick={onClick}>
        <i className="fas fa-search"></i>
      </button>
    </header>
  );
});

export default Search;
