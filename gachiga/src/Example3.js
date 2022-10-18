import React from "react";

export default class Example3 extends React.Component {
  state = {
    text: "",
  };

  handlChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onclick = () => {
    const textbox = {
      inText: this.state.text,
    };
    fetch("http://localhost:3001/text", { //text 주소에서 받을 예정
      method: "post", //통신방법
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(textbox), //textbox라는 객체를 보냄
    });
  };

  render() {
    return (
      <div>
        <input name="text" onChange={this.handlChange}></input>
        <button onClick={this.onclick}>전송</button>
        <h3>{this.state.text}</h3>
      </div>
    );
  }
}