import React from "react";
import "./ChatContainer.css";
import MatchesDisplay from "./MatchesDisplay";
import ChatDisplay from "./ChatDisplay";
import ChatHeader from "./ChatHeader";

function ChatContainer() {
  return (
    <div className="chat-container">
      <ChatHeader />
      <div>
        <button className="option">Matches</button>
        <button className="option">Chat</button>
      </div>
      <MatchesDisplay />
      <ChatDisplay />
    </div>
  );
}

export default ChatContainer;
