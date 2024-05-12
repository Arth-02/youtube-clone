import Image from "next/image";
import React from "react";
import Comment from "./Comment";

const CommentSection: React.FC = () => {
  return (
    <div className=" mt-5 p-2 ">
      <h1 className=" text-xl font-bold">395 Comments</h1>
      <div className="flex gap-2 mt-2 py-3">
        <Image
          src="/profile.jpg"
          alt="user"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-1 w-full">
          <input
            type="text"
            placeholder="Add a public comment..."
            className="w-full p-1 border-b-2 outline-none focus:outline-none hover:border-gray-600 focus:border-gray-600 transition-all duration-300 ease-in-out "
          />
        </div>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default CommentSection;
