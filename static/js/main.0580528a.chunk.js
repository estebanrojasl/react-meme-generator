(this["webpackJsonpreact-meme-generator"]=this["webpackJsonpreact-meme-generator"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),m=a.n(r),o=(a(14),function(){return l.a.createElement("header",null,l.a.createElement("img",{src:"http://www.pngall.com/wp-content/uploads/5/Meme-Troll-PNG-Photo.png",alt:"Seriously?"}),l.a.createElement("h1",null,"Meme Generator"))}),c=a(4),i=a(5),u=a(6),s=a(1),h=a(8),g=a(7),p=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={topText:"",bottomText:"",image:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(s.a)(e)),e.generate=e.generate.bind(Object(s.a)(e)),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var a=t.data.memes;e.setState({allMemeImgs:a})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"generate",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t].url;this.setState({image:a})}},{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("form",null,l.a.createElement("input",{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.generate},"Generate")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.image,alt:""}),l.a.createElement("h2",null,this.state.topText),l.a.createElement("h2",null,this.state.bottomText)))}}]),a}(n.Component);var d=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(p,null))};m.a.render(l.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0580528a.chunk.js.map