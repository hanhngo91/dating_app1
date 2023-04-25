import React, { useState } from "react";
import "./DashBoard.css";
import TinderCard from "react-tinder-card";
import ChatContainer from "../../components/ChatContainer";

function DashBoard() {
  const characters = [
    {
      name: "Elon Musk",
      url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
    },
    {
      name: "Kim Kardashian",
      url: "https://upload.wikimedia.org/wikipedia/commons/0/08/President_Trump_Meets_with_Sentencing_Commutation_Recipients_%2849624188912%29_%28cropped%29.jpg",
    },
    {
      name: "Dwayne Johnson",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg/640px-Dwayne_Johnson_2014_%28cropped%29.jpg",
    },
    {
      name: "Taylor Swift",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png",
    },
  ];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
