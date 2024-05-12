"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const NewSidebar = ({ collapsed }) => {
  // Structure => {sectionTitle: null, items: [{title: "Home", Icon: "home", selected: true, collapsedMenuItem: true}, {title: "Subscriptions", Icon: "subscribe", selected: false, collapsedMenuItem: true}]}
  const SidebarItems = [
    {
      sectionTitle: null,
      items: [
        {
          title: "Home",
          Icon: "home",
          selected: true,
          collapsedMenuItem: true,
        },
        {
          title: "Subscriptions",
          Icon: "subscribe",
          selected: false,
          collapsedMenuItem: true,
        },
      ],
    },
    {
      sectionTitle: null,
      items: [
        {
          title: "Library",
          Icon: "library",
          selected: false,
          collapsedMenuItem: true,
        },
        {
          title: "History",
          Icon: "history",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "Watch Later",
          Icon: "watchlater",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "Liked Videos",
          Icon: "like",
          selected: false,
          collapsedMenuItem: false,
        },
      ],
    },
    {
      sectionTitle: "Explore",
      items: [
        {
          title: "Treanding",
          Icon: "trending",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "Shopping",
          Icon: "shopping",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "Music",
          Icon: "music",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "Movies",
          Icon: "movies",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "Gaming",
          Icon: "gaming",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "News",
          Icon: "news",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "Sports",
          Icon: "sports",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "Learning",
          Icon: "learning",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "Fashion & Beauty",
          Icon: "fashion",
          selected: false,
          collapsedMenuItem: false,
        },
      ],
    },
    {
      sectionTitle: null,
      items: [
        {
          title: "Settings",
          Icon: "setting",
          selected: false,
          collapsedMenuItem: true,
        },
        {
          title: "Help",
          Icon: "help",
          selected: false,
          collapsedMenuItem: false,
        },
        {
          title: "Send feedback",
          Icon: "feedback",
          selected: false,
          collapsedMenuItem: false,
        },
      ],
    },
  ];

  const [selected, setSelected] = useState("Home");

  return (
    <>
      <motion.aside 
        layout
        initial={{ width: '250px'}}
        animate={{ width: collapsed ? '100px' : '250px' }}
        transition={{ duration: 0.2, ease: "easeInOut" , delay: collapsed ? 0.2  : 0 }}
        className="h-auto py-2 pb-0 px-3 mt-14 flex flex-col gap-2.5 overflow-x-hidden overflow-y-scroll scrollbar-animation">
        {SidebarItems.map((items, index) => {
          return (
            <div key={index} className="">
              <div className={`flex flex-col ${collapsed ? 'gap-2.5' : 'gap-0'} `}>
                {items.sectionTitle && !collapsed && (
                  <h3 className="text-base font-medium text-gray px-1.5 py-2">
                    {items.sectionTitle}
                  </h3>
                )}
                {items.items.map((item, index) => {
                  return (
                    <SidebarItem
                      key={index}
                      Icon={item.Icon}
                      title={item.title}
                      selected={selected === item.title}
                      setSelected={setSelected}
                      collapsed={collapsed}
                      collapsedMenuItem={item.collapsedMenuItem}
                    />
                  );
                })}
              </div>
              {
                !collapsed && <hr className="border-border mt-2.5" />
              }
            </div>
          );
        })}
      </motion.aside>
    </>
  );
};

export default NewSidebar;

const SidebarItem = ({ Icon, title, selected, setSelected, collapsed, collapsedMenuItem }) => {
    const shouldDisplay = ["Home", "Subscriptions", "Library", "History"].includes(title);
    const x = collapsed && !shouldDisplay ? "-100%" : 0;
    // const y = collapsed && shouldDisplay ? "20px" : 0;
  
    if(collapsed && !collapsedMenuItem) return null;

    return (
      <motion.div
        layout
        onClick={() => setSelected(title)}
        animate={{ x }}
        transition={{ duration: 0.2, ease: "easeInOut" , delay: collapsed ? 0 : 0.5 , when: "beforeChildren" }}
        className={` parent flex items-center px-2 py-2 hover:bg-hover rounded-lg cursor-pointer ${
          selected && "bg-hover"
        } ${collapsed ? 'flex-col gap-0.5' : 'flex-row gap-6'} `}
      >
        <Image
          src={"/icons/" + (selected ? Icon + "_active" : Icon) + ".svg"}
          alt={"/icons/" + Icon + ".svg"}
          width={25}
          height={25}
        />
        <motion.p
          animate={{ fontSize: collapsed ? '10px' : '14px' }}
          transition={{ duration: 0.2, ease: "easeInOut" , delay: collapsed ? 0 : 0.5 }}
          className={` children text-base ${selected ? "font-bold" : "font-medium"} `}
        >
          {title}
        </motion.p>
      </motion.div>
    );
  };
