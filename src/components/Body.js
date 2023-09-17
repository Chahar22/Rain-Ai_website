import React from "react";
import imageUrl1 from "../assets/images/body-img1.jpeg";
import imageUrl2 from "../assets/images/body-img2.png";
import {text1,text2} from "./text"
import "./app.css"
const Body = () => {
  // Define an array of image URLs
  const imagesWithText = [
    { src: `${imageUrl1}`, text: `${text1}` },
    { src: `${imageUrl2}`, text: `${text2}` },
  ];

  return (
    <div className="body">
      <h1>Cloud-based AI falls short when deploying AI en masse.</h1>

      <div className="image-container">
        {imagesWithText.map((imageData, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={imageData.src}
              alt={`Image ${index + 1}`}
              className="image"
            />
            <p className="image-description">{imageData.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;