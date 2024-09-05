import "./rootlayout.scss";
import { useEffect, useRef } from "react";
import React from "react";

function InteractiveBubble() {
  const interBubbleRef = useRef(null);
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    if (interBubbleRef.current) {
      interBubbleRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }
    requestAnimationFrame(move);
  }

  const handleMouseMove = (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  };

  useEffect(() => {
    move();
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return React.createElement(
    "div",
    { className: "interactive", ref: interBubbleRef },
    // Add your content here
    null
  );
}

export default InteractiveBubble;
