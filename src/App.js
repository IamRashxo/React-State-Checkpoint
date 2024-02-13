import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: 'Oladele Rasheed',
        bio: 'a software developer and a Film director.',
        imgSrc: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.arsenal.com%2Fmen%2Fplayers%2Fbukayo-saka&psig=AOvVaw2JnkUjEnoUAGhfrws7s6hz&ust=1707953335500000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjeiJS8qYQDFQAAAAAdAAAAABAD', // Use any image URL you like
        profession: 'Software Developer',
      },
      show: false,
      timeSinceMount: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1>React Profile App</h1>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
