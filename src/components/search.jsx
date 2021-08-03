import React, { useEffect, useState } from "react";

const Search = (props) => {
  const [searchItem, setSearchItem] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=BTS&key=AIzaSyBJ-LCx7Kr9MSosB_2ht70xyPrg0yRp3Bc",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  const formRef = React.createRef();
  const inputRef = React.createRef();

  const searchVideo = () => {
    const value = inputRef.current.value;
    console.log(value);
  };

  const onClick = (event) => {
    event.preventDefault();
    searchVideo();
    inputRef.current.value = "";
  };
  const onKeyPress = () => {
    console.log("Key Press");
  };

  return (
    <form className="search">
      <i className="search__logo fab fa-youtube"></i>
      <span>YouTube</span>
      <input
        ref={inputRef}
        type="text"
        className="search__input"
        placeholder="Search Videos"
        onKeyPress={onKeyPress}
      />
      <button className="search__button" onClick={onClick}>
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
