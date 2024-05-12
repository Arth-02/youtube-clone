"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Comment: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="overflow-hidden flex py-2 gap-3">
      <Image
        src="/profile.jpg"
        alt="user"
        width={40}
        height={40}
        className="w-10 h-10 my-1 rounded-full object-cover"
      />
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1 text-base font-bold">
          <span>@razor-wd2pc</span>
          <span className="font-normal">1 day ago</span>
        </div>
        <motion.div
          className="text-base overflow-hidden"
          initial={{ height: 20 }}
          animate={{ height: isExpanded ? "auto" : 20 }}
          transition={{ duration: 0.2 }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
          molestiae!
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          aliquid, eligendi incidunt corrupti reiciendis illum quisquam. Cumque
          voluptates suscipit asperiores.
        </motion.div>
        {isExpanded ? (
        <span onClick={() => setIsExpanded(false)} className="pt-1 w-fit text-my font-bold cursor-pointer hover:underline">Read less</span>
      ) : (
        <span onClick={() => setIsExpanded(true)} className="pt-1 w-fit text-my font-bold cursor-pointer hover:underline">Read more</span>
      )}
      </div>
    </div>
  );
};

export default Comment;
