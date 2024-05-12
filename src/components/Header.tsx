"use client";

import React, { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarContext } from "@/app/Provider/SidebarContextProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import VideoIcon from "@/svgs/VideoIcon";
import Notification from "@/components/Notification";

const Header: React.FC = () => {
  const { handleSidebar, slideSidebar, permanentCollapse } =
    useContext(SidebarContext);

  const { status, data } = useSession();

  console.log(data);

  const path = usePathname();

  const shouldShowHeader = !["/login", "/signup"].includes(path);

  return (
    <nav
      className={`z-50 px-4 py-2 flex items-center justify-between gap-5 fixed top-0 left-0 bg-white right-0 `}
    >
      {slideSidebar || permanentCollapse ? (
        <Sheet>
          <SheetTrigger asChild>
            <div className="flex gap-4">
              <Image
                src="/icons/hamburger.svg"
                alt="logo"
                width={38}
                height={38}
                className=" hover:bg-hover p-2 rounded-full cursor-pointer"
              />
              <Link href="/" className="flex items-center justify-center">
                <Image
                  priority={true}
                  src="/youtube-icon.svg"
                  alt="logo"
                  width={90}
                  height={20}
                />
              </Link>
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="w-[250px]">
            <Sidebar slided={true} />
          </SheetContent>
        </Sheet>
      ) : (
        <div className="flex gap-4">
          <Image
            onClick={handleSidebar}
            src="/icons/hamburger.svg"
            alt="logo"
            width={38}
            height={38}
            className=" hover:bg-hover p-2 rounded-full cursor-pointer"
          />
          <Link href="/" className="flex items-center justify-center">
            <Image
              priority={true}
              src="/youtube-icon.svg"
              alt="logo"
              width={90}
              height={20}
            />
          </Link>
        </div>
      )}
      {shouldShowHeader && (
        <>
          <div className="flex flex-1 max-w-xl gap-4 ">
            <div className="relative flex-1 h-fit overflow-hidden">
              <input
                type="text"
                className="w-full h-9 px-3 rounded-3xl outline-none border-border border"
                placeholder="Search"
                name="search"
                id="search"
              />
              <CiSearch className="absolute bg-secondary transition-colors cursor-pointer hover:bg-hover h-full w-16 p-1.5 overflow-hidden border-s rounded-r-3xl border text-2xl top-1/2 right-0 -translate-y-1/2" />
            </div>
            <FaMicrophone className="text-[2.4rem] transition-colors cursor-pointer bg-secondary p-2.5 hover:bg-hover rounded-full" />
          </div>
          <div className="flex items-center justify-center gap-4">
            {status === "loading" ? (
              <div className="animate-pulse w-10 h-10 bg-gray-300 rounded-full"></div>
            ) : status === "authenticated" ? (
              <>
                <VideoIcon />

                <Notification />

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer ml-1 hover:shadow-xl">
                      <AvatarImage src={data?.user?.image || 'abc'} alt="avatar" />
                      <AvatarFallback>{data?.user?.name ? data.user.name[0] : 'pqr'}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => signOut()}>
                      <DropdownMenuLabel>Logout</DropdownMenuLabel>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Link
                href="/login"
                className="p-2 border border-black rounded-lg"
              >
                Login
              </Link>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
