import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './Modal';
import './App.css';

class NavBar extends Component {
  render() {
    return (
      <div className="banner">
        <nav>
          <ul className="nav-bar">
            <li className="nav-link"> <a href="">HOME</a></li>
            <li className="nav-link"> <a href="">ABOUT</a> </li>
            <li className="nav-link"> <a href="">CONTACT</a></li>
            <li className="nav-link"> <a href="">HISTORY</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = { style: { 'background-color': 'cyan' } }
  }

  toggleColor = () => {
    this.setState({
      style: { 'background-color': 'pink' }
    })
  }

  render() {
    return (
      <div
        className="main-header main-container"
        onMouseEnter={this.toggleColor}
        onClick={this.props.handler}
        style={this.state.style}
      >
        <div className="main-header">
          <h1 className="h1-header"> Welcome <br /> to <br /> Wyndmoor </h1>
        </div>
      </div>
    );
  }
}

class InfoContent extends Component {
  constructor(props) {
    super(props);
    this.state = { text1: 'Stroll the paths',
                   message: 'Modal text' }
  }

  setText = () => {
    this.setState({
      text1: 'Awesome new text'
    })
  }

  useText = (message) => {
    this.props.handler();
    console.log(message);
    this.props.outText(message);
  }

  render() {
    console.log(this.props)
    return (
      <div className="image-container">
        <div
          className="nature-image"
          onClick={() => this.useText("Nature image modal text")}
        >
          <h2
            className="image-quote"> Stroll the paths </h2>
        </div>
        <div
          className="shops-image"
          onClick={() => this.useText("Shops image modal text")}
        >
          <h2 className="image-quote"> Savor the Delights</h2>
        </div>
        <div
          className="home-image"
          onClick={() => this.useText("Home image modal text")} >
          <h2 className="image-quote"> Live the Dream </h2>
        </div>
        <div
          className="college-image"
          onClick={() => this.useText("College image modal text")} >
          <h2 className="image-quote"> Find your Future </h2>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.renderText = this.renderText.bind(this);
    this.state =
      {
        isOpen: false,
        text: 'Here\'s some content for the modal'
      };
  }

  toggleModal = (e) => {
    console.log('toggle modal');
    console.log(this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderText = (message) => {
    console.log('inside renderText',message)
    this.setState({
      text: message
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContent />
        <InfoContent handler={this.toggleModal} outText={this.renderText} />
        <Modal
          show={this.state.isOpen}
          onClose={this.toggleModal}
          message={this.state.text}
        >
          This is my modal
        </Modal>
      </div>
    );
  }
}

export default App;
