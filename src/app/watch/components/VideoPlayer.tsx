import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const VideoPlayer: React.FC = () => {
  return (
    <>
      <div className="video_player py-4 w-full rounded-xl">
        <video
          src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          controls
          className="w-full aspect-video object-cover rounded-xl"
        ></video>
      </div>
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
        laudantium doloremque quis sed facere optio sapiente aperiam enim
      </h1>
      <div className="flex my-2 justify-between">
        <div className="flex items-center gap-2 my-2">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="flex flex-col">
            <h3 className="text-lg font-bold">Channel Name</h3>
            <span className="text-sm text-gray-500">
              Published on 12/12/2021
            </span>
          </div>
          <Button className="ml-2">Subscribe</Button>
        </div>
        <div className="flex items-center space-x-2 my-2">
          <Button variant="outline">
            <span className="flex justify-center items-center gap-1">
              <Image
                src="/icons/like.svg"
                width="22"
                height="22"
                alt="like"
              ></Image>
              <span className="hidden md:flex">Like</span>
            </span>
          </Button>
          <Button variant="outline">
            <span className="flex justify-center items-center gap-1">
              <Image
                src="/icons/dislike.svg"
                width="22"
                height="22"
                alt="dislike"
              ></Image>
              <span className="hidden md:flex">Dislike</span>
            </span>
          </Button>
          <Button
            variant="outline"
            className="flex justify-center items-center gap-[5px]"
          >
            <Image
              src="/icons/share.svg"
              width="22"
              height="22"
              alt="share"
            ></Image>{" "}
            <span className="hidden md:flex">Share</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
