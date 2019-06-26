import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import EmojiCard from "./components/EmojiCard";
import Footer from "./components/Footer";
import emojis from "./emojis.json"
import './App.css';



class App extends Component{
  state = {emojis,
  clickedEmoji: [],
  score:0
};

//when you click on a card ... the emoji is taken out of the array
imageClick = event=> {
  // console.log(event.target)
  const currentEmoji = event.target.alt;
  // console.log(currentEmoji);

  const EmojiAlreadyClicked = this.state.clickedEmoji.indexOf(currentEmoji) > -1;

  // if you click on an emoji that has already been selected, the game is reset and cards reordered
    if (EmojiAlreadyClicked) {
      this.setState({
        emojis: this.state.emojis.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedEmoji: [],
        score: 0
      });
        alert("You lose. Play again?");
        //if you click on an available emoji, your score is increased and cards reordered

    } else{
      this.setState(
        {
          emojis: this.state.emojis.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedEmoji: this.state.clickedEmoji.concat(
            currentEmoji
          ),
          score: this.state.score + 1
    },
    //if you get all 12 emojis corrent you get a congrats message and the game resets        
    () => {
      if (this.state.score === 12) {
        alert("Yay! You Win!");
        this.setState({
          emojis: this.state.emojis.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedEmoji: [],
          score: 0
        });
      }
    }
  );
}
}

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
        imageClick={this.imageClick}
        key={emoji.id}
        id = {emoji.id}
        image={emoji.image}
      />
      ))}
    </div>
    <Footer/>
</div>

  );
}
}


export default App;

