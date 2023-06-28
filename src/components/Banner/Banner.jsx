import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner_img">
      <div className="banner-content">
        <h2 className="text-8xl bg-blue-600 italic">Good Food...<br />Good Feeling...</h2>
        
        <p className="text-2xl mt-16 leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          corrupti ea tempore eos, dolorem corporis fugiat. Saepe sunt, neque.
        </p>
        <button className="btn btn-outline border-orange-500 text-white text-3xl mt-10">
          Start A plan
        </button>
      </div>
    </div>
  );
};

export default Banner;
