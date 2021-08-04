import React from "react";
import styles from "./search.module.css";

const Search = ({ onSearch }) => {
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

  return (
    <form className={styles.search}>
      <i className={`fab fa-youtube ${styles.logo}`}></i>
      <span>YouTube</span>
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        placeholder="Search Videos"
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} onClick={onClick}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
