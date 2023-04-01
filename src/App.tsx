import React from 'react';
import logo from './logo.svg';
import './App.css';

class Welcome extends React.Component {
  render() {
    return <h1>The Joel Hilton Film Collection</h1>;
  }
}

function App() {
  return (
    <div>
      <Welcome />
      <img src="JoelHiltonHeadshot.jpg" alt="Joel Hilton"></img>
    </div>
  );
}

export default App;
