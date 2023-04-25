import React, { useState } from "react";
import "./MatchesDisplay.css";

function MatchesDisplay() {
  const [messages, setMessages] = useState([
    {
      timestamp: "2022-01-01T18:28:40+00:00",
      from_id: 1,
      to_id: 2,
      message: "hey there!",
    },
    {
      timestamp: "2022-01-02T19:28:40+00:00",
      from_id: 2,
      to_id: 1,
      message: "hi!",
    },
  ]);
  return <div className="matches-display"></div>;
}

export default MatchesDisplay;
