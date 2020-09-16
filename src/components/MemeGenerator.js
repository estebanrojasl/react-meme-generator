import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      image: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        console.log("memes:", memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  render() {
    return <h2>Generator section</h2>;
  }
}

export default MemeGenerator;