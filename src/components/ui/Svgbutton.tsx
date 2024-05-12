import React from "react";
import { createRipple } from "@/utils/rippleEffect";

type SvgbuttonProps = {
  isactive?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Svgbutton = React.forwardRef<HTMLElement, SvgbuttonProps>(({ isactive, className, ...props }, ref) => {
  const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    createRipple(event);
  };

  return (
    <button
      className={`ripple-btn relative overflow-hidden w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-hover ${className} ${
        isactive && "bg-hover"
      }`}
      onClick={(event) => handleBtnClick(event)}
      ref={ref as React.RefObject<HTMLButtonElement>}
      {...props}
    >
      {props.children}
    </button>
  );
});

Svgbutton.displayName = "Svgbutton";

export default Svgbutton;
