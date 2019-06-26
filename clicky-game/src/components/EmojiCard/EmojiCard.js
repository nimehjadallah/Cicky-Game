import React from "react";
import "./EmojiCard.css";

//pass the image into each card so all 12 are rendered
const EmojiCard = props => (
    <div className = "card" onClick={props.imageClick}>
        <div className = "imgContainer">
            <img alt={props.image.replace(".jpg","")} src={require("../../images/" + props.image)}/>
        </div>
    </div>
);

export default EmojiCard;