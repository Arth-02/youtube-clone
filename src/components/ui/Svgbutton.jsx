import React from "react";
import { createRipple } from "@/utils/rippleEffect";

const Svgbutton = React.forwardRef(({ isactive, className, ...props }, ref) => {
  const handleBtnClick = (event) => {
    createRipple(event);
    // event.stopPropagation();
  };

  return (
    <button
      className={`ripple-btn relative overflow-hidden w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-hover ${className} ${
        isactive && "bg-hover"
      }`}
      onClick={(event) => handleBtnClick(event)}
      ref={ref}
      {...props}
    >
      {props.children}
    </button>
  );
});

Svgbutton.displayName = "Svgbutton";

export default Svgbutton;
