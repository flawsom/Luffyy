import React from "react";
import "./LoadingSpinner.css"; // Import your CSS file for spinner styling

export default function LoadingSpinner() {
  return (
    <div className="loading-container">
      {/* An animated character or gif can be placed here */}
      <div className="anime-character"></div>
      {/* Example: You can use an animated GIF or any other animation for the character */}
      <h4 className="loading-text">Hang in there...</h4>
    </div>
  );
}