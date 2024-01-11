"use client";

import React, { useEffect, useRef } from "react";
import Tab from "./Tab";
import { createRipple } from "@/utils/rippleEffect";
import Svgbutton from "./ui/Svgbutton";

const TabNav = () => {
  // TODO: Add the left and right arrow functionality

  // function to handle the left arrow click
  const handleLeftArrowClick = (event) => {
    // createRipple(event);
    let scrollLeft = document.querySelector(".overflow-x-scroll").scrollLeft;
    let scrollWidth = document.querySelector(".overflow-x-scroll").scrollWidth;
    let clientWidth = document.querySelector(".overflow-x-scroll").clientWidth;
    let maxScrollLeft = scrollWidth - clientWidth;
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      document.querySelector(".overflow-x-scroll").scrollLeft -= 15;
      scrollAmount += 15;
      if (scrollAmount >= 200) {
        window.clearInterval(slideTimer);
      }
    }, 15);

    if (scrollLeft === 0) {
      document.querySelector(".left-arrow").classList.add("hide-arrow-btn");
    }
    if (scrollLeft !== 0) {
      // document.querySelector(".right-arrow").style.opacity = 1;
      document.querySelector(".left-arrow").classList.add("show-arrow-btn");
    }
  };

  // function to handle the right arrow click
  const handleRightArrowClick = (event) => {
    // createRipple(event);
    let scrollLeft = document.querySelector(".overflow-x-scroll").scrollLeft;
    let scrollWidth = document.querySelector(".overflow-x-scroll").scrollWidth;
    let clientWidth = document.querySelector(".overflow-x-scroll").clientWidth;
    let maxScrollLeft = scrollWidth - clientWidth;
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      document.querySelector(".overflow-x-scroll").scrollLeft += 15;
      scrollAmount += 15;
      if (scrollAmount >= 200) {
        window.clearInterval(slideTimer);
      }
    }, 15);

    if (scrollLeft === maxScrollLeft) {
      document.querySelector(".left-arrow").classList.add("hide-arrow-btn");
    }
    if (scrollLeft !== maxScrollLeft) {
      document.querySelector(".left-arrow").classList.add("show-arrow-btn");
    }
  };

  const scrollContainerRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const maxScrollLeft = scrollWidth - clientWidth - 1;

      leftArrowRef.current.style.opacity = scrollLeft > 0 ? 1 : 0;
      leftArrowRef.current.style.pointerEvents =
        scrollLeft > 0 ? "auto" : "none";
      rightArrowRef.current.style.opacity = scrollLeft < maxScrollLeft ? 1 : 0;
      rightArrowRef.current.style.pointerEvents =
        scrollLeft < maxScrollLeft ? "auto" : "none";
    };

    scrollContainerRef.current.addEventListener("scroll", handleScroll);
    return () =>
      scrollContainerRef?.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-background py-3 sticky top-0 z-40 flex items-center ">
      <div className="relative w-full flex items-center bg-background">
        <div
          className="left-arrow opacity-0 transition-opacity bg-background absolute left-0"
          ref={leftArrowRef}
          onClick={(event) => handleLeftArrowClick(event)}
        >
          <Svgbutton className="text-muted hover:text-foreground">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="24"
              width="24"
              focusable="false"
            >
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
            </svg>
          </Svgbutton>
        </div>
        <div
          ref={scrollContainerRef}
          className="overflow-x-scroll flex gap-4 hide-scrollbar mx-2 "
        >
          <Tab title="All" selected={true} />
          <Tab title="React" />
          <Tab title="Node" />
          <Tab title="MongoDB" />
          <Tab title="Express" />
          <Tab title="JavaScript" />
          <Tab title="TypeScript" />
          <Tab title="Python" />
          <Tab title="C++" />
          <Tab title="C#" />
          <Tab title="Java" />
          <Tab title="C" />
          <Tab title="Rust" />
          <Tab title="Go" />
          <Tab title="Dart" />
          <Tab title="Flutter" />
          <Tab title="Swift" />
          <Tab title="Kotlin" />
          <Tab title="Android" />
          <Tab title="iOS" />
          <Tab title="Machine Learning" />
          <Tab title="Artificial Intelligence" />
          <Tab title="Data Science" />
          <Tab title="Deep Learning" />
          <Tab title="Neural Networks" />
          <Tab title="Computer Vision" />
          <Tab title="Natural Language Processing" />
          <Tab title="Data Structures" />
          <Tab title="Algorithms" />
          <Tab title="Competitive Programming" />
          <Tab title="Coding Interview" />
          <Tab title="Software Engineering" />
          <Tab title="Software Development" />
          <Tab title="Web Development" />
        </div>
        <div
          className="right-arrow bg-background transition-opacity absolute right-0 "
          ref={rightArrowRef}
          onClick={(event) => handleRightArrowClick(event)}
        >
          <Svgbutton className="text-muted hover:text-foreground">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="24"
              width="24"
              focusable="false"
            >
              <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6-1.41-1.41z"></path>
            </svg>
          </Svgbutton>
        </div>
      </div>
    </div>
  );
};

export default TabNav;
