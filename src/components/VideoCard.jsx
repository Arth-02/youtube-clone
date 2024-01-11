import React from "react";

const VideoCard = () => {
  return (
    <div
      className=" min-w-[320px] min-h-[290px] rounded-md border-black border flex-1 max-w-[370px] max-h-[350px] flex flex-col">
      <video
        className="w-full h-[65%] object-cover rounded-t-md"
        src="https://www.youtube.com/watch?v=7XK7x0kWnB8"
        controls
      ></video>
      <div className="flex h-[35%] items-center gap-4 px-3 py-2">
        <img
          className="w-8 h-8 rounded-full"
          src="https://www.youtube.com/watch?v=7XK7x0kWnB8"
          alt=""
        />
        <div className="flex flex-col">
          <p className="text-sm font-medium text-gray">Title</p>
          <p className="text-sm font-medium text-gray">Channel Name</p>
          <p className="text-sm font-medium text-gray">
            1.5M Views . 1 Week Ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
