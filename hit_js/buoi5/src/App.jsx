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

  render() {
    return (
      <div className="modal">
        <input
          type="text"
          placeholder="Enter your name..."
          value={this.state.text}
          onChange={this._onChange}
        />
        <button onClick={() => this.props.onSubmit(this.state.text)}>
          submit
        </button>
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
      text: "",
      isEnteringUsername: true,
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", (e) => {
      if (e.key.toLowerCase() === "enter") this._onClick();
    });
  }

  _onClick = () => {
    if (this.state.text)
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { message: prevState.text, name: prevState.currentUser },
        ],
        text: "",
      }));
  };

  _onChange = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  };

  enterUsername = (username) => {
    this.setState((prevState) => ({
      ...this.state,
      isEnteringUsername: false,
      currentUser: username,
    }));
  };

  render() {
    return (
      <div className="app">
        {this.state.isEnteringUsername ? (
          <Modal onSubmit={this.enterUsername} />
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
            <div className="message-typer">
              <input
                type="text"
                name="input-box"
                id="input-box"
                value={this.state.text}
                onChange={this._onChange}
                placeholder="Type your message here..."
              />
              <button onClick={this._onClick}>Send</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
