import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LinkInput from "./LinkInput";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white text-center p-6">
      {/* Heading at the Top */}
      <h1 className="text-4xl md:text-5xl font-bold mt-6">
        GATE 2025 Marks Predictor
      </h1>
      <h2 className="text-xl md:text-2xl mt-2">
        Estimate Your Score Instantly!
      </h2>

      {/* Description */}
      <p className="text-lg md:text-xl mt-6 max-w-2xl">
        Preparing for <strong>GATE 2025</strong> and eager to estimate your potential score?  
        Our <strong>GATE 2025 Marks Predictor</strong> helps you analyze your performance instantly!  
        Just enter your responses, and our intelligent algorithm will provide an accurate prediction based on the latest marking scheme.
      </p>

      {/* Link Input Section */}
      <div className="w-full max-w-lg mt-8">
        <LinkInput />
      </div>
    </div>
  );
};

export default Hero;
