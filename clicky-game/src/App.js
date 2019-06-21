import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import EmojiCard from "./components/EmojiCard";
import emojis from "./emojis.json"
import './App.css';

class App extends React.Component{
  state = {emojis,};

render(){
  return (
<div>
  <Navbar
  score = {this.state.score}
  />
 <Jumbotron/>
    <div className="wrapper">
      {this.state.emojis.map(emoji => (
        <EmojiCard
        key={emoji.id}
        id = {emoji.id}
        image={emoji.image}
      />
      ))}
    </div>
</div>

  );
}
}


export default App;

