import React, { useState } from "react";
import "./ChatInput.css";

function ChatInput() {
  const [textArea, setTextArea] = useState(null);
  return (
    <div className="chat-input">
      <input
        type="text"
        value={textArea}
        placeholder="Type a message..."
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button className="secondary-button">Send</button>
    </div>
  );
}

export default ChatInput;
