import React, { Component } from "react";
import "./App.scss";

const Message = ({ username, content }) => {
  return (
    <li className="message">
      <h4 className="message__username">{username}</h4>
      <div className="message__detail">
        <div className="message__avatar"></div>
        <p className="message__content">{content}</p>
      </div>
    </li>
  );
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    console.log(props);
  }

  _onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  _onClick = () => {
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="message-typer">
        <input
          type="text"
          name="input-box"
          id="input-box"
          value={this.state.text}
          onChange={this._onChange}
          placeholder={this.props.placeholder}
        />
        <button onClick={this._onClick}>Send</button>
      </div>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      currentUser: "",
      isEnteringUsername: true,
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", (e) => {
      if (e.key.toLowerCase() === "enter") this.sendMessage();
    });
  }

  sendMessage = (message) => {
    if (message)
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { message: message, name: prevState.currentUser },
        ],
        text: "",
      }));
  };

  _onChange = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  };

  setUsername = (username) => {
    this.setState((prevState) => ({
      isEnteringUsername: false,
      currentUser: username,
    }));
  };

  render() {
    return (
      <div className="app">
        {this.state.isEnteringUsername ? (
          <Modal onSubmit={this.setUsername} placeholder="Nhập tên..." />
        ) : (
          <div className="chat-window">
            <ul className="messages">
              {this.state.messages.map((item, idx) => (
                <Message
                  key={idx}
                  username={item.name}
                  content={item.message}
                />
              ))}
            </ul>
            <Modal onSubmit={this.sendMessage} placeholder="Nhập tin nhắn..." />
          </div>
        )}
      </div>
    );
  }
}
