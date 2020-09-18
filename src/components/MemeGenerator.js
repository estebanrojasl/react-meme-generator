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
    this.handleChange = this.handleChange.bind(this);
    this.generate = this.generate.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  generate(event) {
    event.preventDefault();
    const position = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const { url } = this.state.allMemeImgs[position];
    this.setState({ image: url });
  }

  render() {
    return (
      <main>
        <form>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.generate}>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.image} alt="" />
          <h2>{this.state.topText}</h2>
          <h2>{this.state.bottomText}</h2>
        </div>
      </main>
    );
  }
}

export default MemeGenerator;
