"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Discription: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="bg-descriptionbg p-2 my-3 rounded-lg">
      <motion.div
        initial={{ height: 80 }}
        animate={{ height: showMore ? "auto" : 80 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col gap-2 overflow-hidden"
      >
        <div className="flex items-center gap-2 text-base font-bold">
          <span>50k views</span>
          <span>3 days ago</span>
        </div>
        <div className="text-base mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          aliquam quasi iste exercitationem placeat, esse consectetur deleniti
          ipsam totam quia dolores quam adipisci quos, ducimus explicabo cum
          reiciendis neque rem!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          suscipit iste accusantium similique possimus excepturi aliquid qui
          laborum consectetur vel.
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          expedita quod, iste numquam laudantium dolor deserunt aut facilis
          dignissimos ad labore recusandae blanditiis animi atque, optio alias
          soluta velit nobis?
        </div>
      </motion.div>
      {showMore ? (
        <span
          className="text-my font-bold hover:underline cursor-pointer"
          onClick={() => setShowMore(false)}
        >
          Show less...
        </span>
      ) : (
        <span
          className="text-my font-bold hover:underline cursor-pointer"
          onClick={() => setShowMore(true)}
        >
          Show more...
        </span>
      )}
    </div>
  );
};

export default Discription;
