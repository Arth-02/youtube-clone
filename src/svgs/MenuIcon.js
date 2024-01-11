import Svgbutton from "@/components/ui/Svgbutton";
import React from "react";

const MenuIcon = React.forwardRef(( props , ref) => {
  return (
    <Svgbutton>
      <svg
        enableBackground="new 0 0 24 24"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        focusable="false"
        ref={ref}
        {...props}
      >
        <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"></path>
      </svg>
    </Svgbutton>
  );
});

export default MenuIcon;
