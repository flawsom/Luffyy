import React from "react";
import "./share.css";
import share from "../../media/share.gif";

export default function Share(props) {
  const sharePage = async () => {
    try {
      if (navigator.share) {
        // Check if Web Share API is supported
        await navigator.share({
          title: document.title,
          text: 'Check out this link!',
          url: 'https://aniluffyy.vercel.app',
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        alert('Web Share API is not supported in this browser.');
        // Implement your custom share functionality here for unsupported browsers
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div
      className="share-app d-flex a-center f-poppins"
      style={props?.style}
      onClick={sharePage}
    >
      <img src={share} alt="share" />
      <div>
        <p className="primary">Share Luffy</p>
        <p>to your friends</p>
      </div>
    </div>
  );
}
