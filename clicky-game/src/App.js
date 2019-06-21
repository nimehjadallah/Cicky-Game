import React from "react";
import Jumbotron from "./components/Jumbotron";
import EmojiCard from "./components/EmojiCard";
import emojis from "./emojis.json"
import './App.css';

class App extends React.Component{
  state = {emojis};

render(){
  return (
<div>
<Jumbotron/>
      {this.state.emojis.map(emoji => (
        <EmojiCard
        key={emoji.id}
        id = {emoji.id}
        image={emoji.image}
      />
      ))}
    
</div>

  );
}
}


export default App;

