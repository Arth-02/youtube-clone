"use client";

import React, { useContext, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SidebarContext } from "@/app/Provider/SidebarContextProvider";
import { usePathname } from "next/navigation";

interface SidebarProps {
  slided?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ slided }) => {

  const path: string = usePathname();

  const { collapsed } = useContext(SidebarContext);

  const [selected, setSelected] = useState<string>("Home");

  const shouldShowSidebar: boolean = ['/'].includes(path);

  if (slided) {
    return (
      <motion.aside
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
        className={`parent h-[95%] py-4 pr-1 -mr-3 flex flex-col gap-3.5 overflow-x-hidden overflow-y-scroll scrollbar-animation`}
      >
        <div className={`flex flex-col gap-0 `}>
          <SidebarItem
            Icon="home"
            title="Home"
            selected={selected === "Home"}
            setSelected={setSelected}
            collapsed={false}
            collapsedMenuItem
          />
          <SidebarItem
            Icon="subscribe"
            title="Subscriptions"
            selected={selected === "Subscriptions"}
            setSelected={setSelected}
            collapsed={false}
            collapsedMenuItem
          />
        </div>
        <hr className="border-border" />
        <div className={`flex flex-col gap-0 `}>
          <SidebarItem
            Icon="library"
            title="Library"
            selected={selected === "Library"}
            setSelected={setSelected}
            collapsed={false}
            collapsedMenuItem
          />
          <SidebarItem
            Icon="history"
            title="History"
            selected={selected === "History"}
            collapsed={false}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="watchlater"
            title="Watch Later"
            selected={selected === "Watch Later"}
            collapsed={false}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="like"
            title="Liked Videos"
            selected={selected === "Liked Videos"}
            collapsed={false}
            setSelected={setSelected}
          />
        </div>
        <hr className="border-border" />
        <div className={`flex flex-col gap-0 `}>
          <p className="text-base font-medium text-gray px-1.5 py-2">Explore</p>
          <SidebarItem
            Icon="trending"
            title="Trending"
            selected={selected === "Trending"}
            collapsed={false}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="movies"
            title="Movies"
            selected={selected === "Movies"}
            collapsed={false}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="gaming"
            title="Gaming"
            selected={selected === "Gaming"}
            collapsed={false}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="fashion"
            title="Fashion & Beauty"
            selected={selected === "Fashion & Beauty"}
            collapsed={false}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="learning"
            title="Learning"
            selected={selected === "Learning"}
            collapsed={false}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="sports"
            title="Sports"
            selected={selected === "Sports"}
            collapsed={false}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="news"
            title="News"
            selected={selected === "News"}
            collapsed={false}
            setSelected={setSelected}
          />
        </div>
        <hr className="border-border" />
        <div className={`flex flex-col gap-0 `}>
          <SidebarItem
            Icon="setting"
            title="Settings"
            selected={selected === "Settings"}
            collapsed={false}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="help"
            title="Help"
            selected={selected === "Help"}
            collapsed={false}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="feedback"
            title="Send Feedback"
            selected={selected === "Send Feedback"}
            collapsed={false}
            setSelected={setSelected}
          />
        </div>
      </motion.aside>
    );
  }

  if(!shouldShowSidebar){
    return false;
  }

  return (
    <>
      <motion.aside
        layout
        data-isopen={!collapsed}
        initial={{ width: "270px" }}
        animate={{
          width: collapsed ? "70px" : "270px",
          overflow: collapsed ? "hidden" : "auto",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          gap: { duration: 0.3, delay: 0.2 },
          overflow: { duration: 0.3, delay: 0.2 },
        }}
        className={`Sidebar parent h-auto py-2 px-3 mt-14 flex flex-col gap-3 scrollbar-animation`}
      >
        <div className={` ${collapsed && "flex flex-col gap-3"} `}>
          <SidebarItem
            Icon="home"
            title="Home"
            selected={selected === "Home"}
            setSelected={setSelected}
            collapsed={collapsed}
            collapsedMenuItem
          />
          <SidebarItem
            Icon="subscribe"
            title="Subscriptions"
            selected={selected === "Subscriptions"}
            setSelected={setSelected}
            collapsed={collapsed}
            collapsedMenuItem
          />
        </div>

        {!collapsed && <hr className="border-border" />}

        <div className={` ${collapsed && "flex flex-col gap-0"} `}>
          <SidebarItem
            Icon="library"
            title="Library"
            selected={selected === "Library"}
            setSelected={setSelected}
            collapsed={collapsed}
            collapsedMenuItem
          />
          <SidebarItem
            Icon="history"
            title="History"
            selected={selected === "History"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="watchlater"
            title="Watch Later"
            selected={selected === "Watch Later"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="like"
            title="Liked Videos"
            selected={selected === "Liked Videos"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
        </div>

        {!collapsed && <hr className="border-border" />}

        <div className={` ${collapsed && "gap-0"} `}>
          {!collapsed && (
            <p className="text-base font-medium text-gray px-1.5 py-2">
              Explore
            </p>
          )}
          <SidebarItem
            Icon="trending"
            title="Trending"
            selected={selected === "Trending"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="movies"
            title="Movies"
            selected={selected === "Movies"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="gaming"
            title="Gaming"
            selected={selected === "Gaming"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="fashion"
            title="Fashion & Beauty"
            selected={selected === "Fashion & Beauty"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="learning"
            title="Learning"
            selected={selected === "Learning"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="sports"
            title="Sports"
            selected={selected === "Sports"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="news"
            title="News"
            selected={selected === "News"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
        </div>

        {!collapsed && <hr className="border-border" />}

        <div className={` ${collapsed && "flex flex-col gap-4"} `}>
          <SidebarItem
            Icon="setting"
            title="Settings"
            selected={selected === "Settings"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="help"
            title="Help"
            selected={selected === "Help"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
          <SidebarItem
            Icon="feedback"
            title="Send Feedback"
            selected={selected === "Send Feedback"}
            collapsed={collapsed}
            setSelected={setSelected}
          />
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;

// Sidebar Item

interface SidebarItemProps {
  Icon: string;
  title: string;
  selected: boolean;
  setSelected: (title: string) => void;
  collapsed: boolean;
  collapsedMenuItem?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  Icon,
  title,
  selected,
  setSelected,
  collapsed,
  collapsedMenuItem,
} ) => {
  if (!collapsedMenuItem && collapsed)
    return (
      <motion.div
        layout
        animate={{
          opacity: collapsed ? 0 : 1,
          x: collapsed ? -10 : 0,
          y: collapsed ? -10 : 0,
          // scale: collapsed ? 0.8 : 1,
          transitionEnd: {
            display: collapsed ? "none" : "flex",
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        onClick={() => {
          setSelected(title);
        }}
        className={`parent flex items-center gap-6 px-2 py-2 hover:bg-hover rounded-lg cursor-pointer ${
          selected && "bg-hover"
        }
        `}
      >
        <Image
          src={"/icons/" + (selected ? Icon + "_active" : Icon) + ".svg"}
          alt={"/icons/" + Icon + ".svg"}
          width={25}
          height={25}
        />
        <motion.p
          layout
          animate={{
            opacity: collapsed ? 0 : 1,
            x: collapsed ? -10 : 0,
            y: collapsed ? -10 : 0,
            // scale: collapsed ? 0.8 : 1,
            display: !collapsedMenuItem && collapsed ? "none" : "flex",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            when: "afterParent",
            delay: 0.5,
          }}
          className={`text-base font-medium ${selected && "font-bold"} `}
        >
          {title}
        </motion.p>
      </motion.div>
    );

  return (
    <motion.div
      layout
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        when: "afterParent",
        delay: 0.3,
      }}
      animate={{
        transitionEnd: {
          display: "flex",
        },
      }}
      onClick={() => {
        setSelected(title);
      }}
      className={`children relative flex items-center px-2 py-2 gap-6 hover:bg-hover rounded-lg cursor-pointer ${
        selected && "bg-hover"
      }
      `}
    >
      <Image
        src={"/icons/" + (selected ? Icon + "_active" : Icon) + ".svg"}
        alt={"/icons/" + Icon + ".svg"}
        width={25}
        height={25}
      />
      <motion.p
        layout
        animate={{
          opacity: collapsed ? 0 : 1,
          x: collapsed ? -10 : 0,
          y: collapsed ? -10 : 0,
          // scale: collapsed ? 0.8 : 1,
          display: collapsed ? "none" : "flex",
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          delay: collapsed ? 0.1 : 0.5,
        }}
        className={`text-base ${selected ? "font-bold" : "font-medium"} `}
      >
        {title}
      </motion.p>
    </motion.div>
  );
};

export { SidebarItem };
