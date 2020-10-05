import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MemeGenerator = () => {
  const [text, setText] = useState({ topText: "", bottomText: "" });
  const [image, setImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemes, setAllMemes] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setText({ ...text, [name]: value });
  };

  const generate = (event) => {
    event.preventDefault();
    const position = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[position];
    setImage(url);
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        setAllMemes(response.data.memes);
      });
  }, []);

  return (
    <main>
      <form>
        <input
          type="text"
          name="topText"
          placeholder="Top Text"
          value={text.topText}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom Text"
          value={text.bottomText}
          onChange={handleChange}
        />
        <br />
        <button onClick={generate}>Generate</button>
      </form>
      <div className="meme">
        <img src={image} alt="" />
        <h2>{text.topText}</h2>
        <h2>{text.bottomText}</h2>
      </div>
    </main>
  );
};

// class MemeGenerator extends Component {
//   constructor() {
//     super();
//     this.state = {
//       topText: "",
//       bottomText: "",
//       image: "http://i.imgflip.com/1bij.jpg",
//       allMemeImgs: [],
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.generate = this.generate.bind(this);
//   }

//   componentDidMount() {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((response) => response.json())
//       .then((response) => {
//         const { memes } = response.data;
//         this.setState({ allMemeImgs: memes });
//       });
//   }

//   handleChange(event) {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   }

//   generate(event) {
//     event.preventDefault();
//     const position = Math.floor(Math.random() * this.state.allMemeImgs.length);
//     const { url } = this.state.allMemeImgs[position];
//     this.setState({ image: url });
//   }

//   render() {
//     return (
//       <main>
//         <form>
//           <input
//             type="text"
//             name="topText"
//             placeholder="Top Text"
//             value={this.state.topText}
//             onChange={this.handleChange}
//           />
//           <br />
//           <input
//             type="text"
//             name="bottomText"
//             placeholder="Bottom Text"
//             value={this.state.bottomText}
//             onChange={this.handleChange}
//           />
//           <br />
//           <button onClick={this.generate}>Generate</button>
//         </form>
//         <div className="meme">
//           <img src={this.state.image} alt="" />
//           <h2>{this.state.topText}</h2>
//           <h2>{this.state.bottomText}</h2>
//         </div>
//       </main>
//     );
//   }
// }

export default MemeGenerator;
