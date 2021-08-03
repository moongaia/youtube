import React, { Component } from "react";

class Search extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  searchVideo() {
    const value = this.inputRef.current.value;
    console.log(value);
    // const url = `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBJ-LCx7Kr9MSosB_2ht70xyPrg0yRp3Bc
    //     &part=snippet&maxResult=25&q=${queryString}`;
    // return fetch(url);
  }

  onClick = (event) => {
    event.preventDefault();
    this.searchVideo();
    this.inputRef.current.value = "";
  };
  onKeyPress = () => {
    console.log("Key Press");
  };

  render() {
    console.log(this.props.search);
    return (
      <form className="search">
        <i className="search__logo fab fa-youtube"></i>
        <span>YouTube</span>
        <input
          ref={this.inputRef}
          type="text"
          className="search__input"
          placeholder="Search Videos"
          onKeyPress={this.onKeyPress}
        />
        <button className="search__button" onClick={this.onClick}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    );
  }
}

export default Search;
