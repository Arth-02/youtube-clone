import React from "react";

const VideoPlayer = () => {
  return (
    <>
      <div className="video_player py-4 w-full h-[530px] rounded-xl">
        <video
          src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          controls
          className="w-full h-full object-cover rounded-xl"
        ></video>
      </div>
      <h1 className="text-2xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
        laudantium doloremque quis sed facere optio sapiente aperiam enim
      </h1>
      <div className="flex justify-between">
      <div className="flex items-center space-x-2 my-2">
        <div className="w-12 h-12 rounded-full bg-gray-300"></div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Channel Name</h3>
          <span className="text-sm text-gray-500">Published on 12/12/2021</span>
        </div>
      </div>
      <div className="flex items-center space-x-2 my-2">
        
      </div>
      </div>
    </>
  );
};

export default VideoPlayer;
