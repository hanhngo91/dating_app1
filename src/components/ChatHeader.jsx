import React from "react";
import "./ChatHeader.css";

function ChatHeader() {
  return (
    <div className="chat-container-header">
      <div className="profile">
        <div className="img-container">
          <img src="" />
        </div>
        <h3>Username</h3>
      </div>
      <i class="fa-solid fa-right-from-bracket"></i>
    </div>
  );
}

export default ChatHeader;
