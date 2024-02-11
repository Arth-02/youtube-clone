"use client";

import Setting from "@/svgs/Setting";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import NotificationIcon from "@/svgs/NotificationIcon";
import Image from "next/image";
import MenuIcon from "@/svgs/MenuIcon";

const Notification = () => {
  const [isactive, setIsactive] = useState(false);

  //To check which notification is hovered
  const [hoveredNotification, setHoveredNotification] = useState(null);

  const handleNotificationIcon = () => {
    setIsactive(!isactive);
  };

  return (
    <DropdownMenu
      modal={false}
      open={isactive}
      onOpenChange={handleNotificationIcon}
    >
      <DropdownMenuTrigger asChild>
        <NotificationIcon isactive={isactive} />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuItem className="flex justify-between items-center py-0 focus:bg-inherit">
          <DropdownMenuLabel className="text-lg px-0 py-0 font-medium">
            Notifications
          </DropdownMenuLabel>
          <Setting />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <div className="max-h-[550px] overflow-y-auto flex flex-col gap-2 w-full">
          {[...Array(10)].map((_, i) => (
            <NotificationItem
              key={i}
              id={i}
              hoveredNotification={hoveredNotification}
              setHoveredNotification={setHoveredNotification}
            />
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Notification;

const NotificationItem = ({
  id,
  hoveredNotification,
  setHoveredNotification,
}) => {
  return (
    <div
      className="flex mx-1 px-1 items-center justify-start rounded-lg gap-2 cursor-pointer hover:bg-hover"
      onMouseOver={() => setHoveredNotification(id)}
      onMouseLeave={() => setHoveredNotification(null)}
    >
      <DropdownMenuItem className="flex gap-6 px-3 hover:bg-transparent focus:bg-transparent">
        <Image
          src="/profile.jpg"
          alt="logo"
          width={50}
          height={50}
          className="rounded-full object-cover aspect-square"
        />
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe
            ullam, recusandae tempora impedit unde beatae odio doloremque
            commodi
          </div>
          <div className="text-sm text-muted">23 minutes ago</div>
        </div>
        <Image
          src="/image.jpg"
          alt="video-thumbnail"
          width={100}
          height={100}
          className="aspect-video object-cover"
        />
      </DropdownMenuItem>
      <div
        className={`${
          hoveredNotification === id ? "opacity-100" : "opacity-0"
        } pr-4`}
      >
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <MenuIcon />
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent side="right" align="center">
              <DropdownMenuItem>
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <DropdownMenuLabel>Logout</DropdownMenuLabel>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </div>
    </div>
  );
};
