import React from "react";
import imageUrl1 from "../assets/images/body-img1.jpeg";
import imageUrl2 from "../assets/images/body-img2.png";
import { text1, text2 } from "./text";
import "./app.css";
const Body = () => {
  // Define an array of image URLs
  const imagesWithText = [
    { src: `${imageUrl1}`, text: `${text1}` },
    { src: `${imageUrl2}`, text: `${text2}` },
  ];

  return (
    <div className="body1">
      <h1>
        Our roadmap will ultimately enable 100 billion-parameter models in a
        chip the size of a thumbnail.
      </h1>
      <p>
        We are the world leaders in algorithm/hardware co-design for artificial
        intelligence. Every product on our roadmap utilizes this innovative
        approach.
      </p>
      <p>
        Our engineering roadmap enables multi-generation progress, and we will
        enter the market at volume with a Gen 1 product 100x better than the
        status quo.
      </p>
      <p>
        See the About Us section for more information on our technology and
        team.
      </p>
    </div>
  );
};

export default Body;
