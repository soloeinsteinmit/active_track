import "./rootlayout.scss";
import "./rootlayout.css";
import { useEffect, useState } from "react";
import InteractiveBubble from "./InteractiveBubble";
import React from "react";

function ComponentA() {
  return React.createElement("div", null, "This is Component A");
}

function ComponentB() {
  return React.createElement("div", null, "This is Component B");
}

function GradientBackground({ children }) {
  return (
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <InteractiveBubble />
      </div>

      <div className="outlet-container">{children}</div>
    </div>
  );
}

export default GradientBackground;
