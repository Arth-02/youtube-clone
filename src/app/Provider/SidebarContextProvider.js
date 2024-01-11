"use client";

import React, { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

// Context object of Sidebar State
export const SidebarContext = createContext();

// Context Provider
const SidebarContextProvider = ({ children }) => {
  const path = usePathname();

  const [slideSidebar, setSlideSidebar] = useState(
    ["/login", "/watch", "/signup"].includes(path)
  );
  const [collapsed, setCollapsed] = useState(false);
  const [slided, setSlided] = useState(false);
  const [permanentCollapse, setPermanentCollapse] = useState(false);

  const handleCollapse = () => {
    console.log("handleCollapse");
    setCollapsed(!collapsed);
  };

  const handleSlide = () => {
    setSlided(!slided);
  };

  const handleSidebar = () => {
    if (slideSidebar) {
      handleSlide();
    } else {
      handleCollapse();
    }
  };

  useEffect(() => {
    if (path === "/watch") {
      setSlideSidebar(true);
    } else if (window.innerWidth < 1200 && window.innerWidth > 768) {
      setSlideSidebar(false);
      setCollapsed(true);
      setPermanentCollapse(true);
    } else if (window.innerWidth < 768) {
      setSlideSidebar(true);
    }
  }, [path]);

  const value = {
    slideSidebar,
    setSlideSidebar,
    collapsed,
    setCollapsed,
    slided,
    setSlided,
    permanentCollapse,
    setPermanentCollapse,
    handleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
