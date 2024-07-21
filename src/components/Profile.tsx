"use client";

import React from "react";
import { FunctionComponent } from "react";
import { useStytch, useStytchSession, useStytchUser } from "@stytch/nextjs";
import SideBar from "./SideBar";
import { Sheet,SheetContent,SheetDescription,SheetHeader,SheetTrigger, } from "./ui/sheet";
import { ChevronLeft, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import ContentWindow from "./ui/content-window";
import Settings from "./Settings"
import Image from "next/image";
import WishList from "./WishList";



// Need a db call that pulls all of the Users' Wells -- maybe WellsList.tsx?

interface MenuItem {
    name: string;
    href: string;
    openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Login", href: "/" },
];
export const WellsNav: FunctionComponent = () => {
    const pathname = usePathname();
  
    return (
      <nav className="h-8">
        {/* Should actually be a filter that shows Available Wells/Wishes matching input */}
        
        <div id="mainNav" className="hidden md:flex items-center">
          {menuItems.map((item) => (
            <div key={item.href} className="ml-4 md:ml-8">
              <a
                href={item.href}
                target={item.openInNewTab ? "_blank" : "_self"}
                className={cn(
                  "hover:text-gray-900",
                  pathname === item.href && "font-semibold"
                )}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>


        <div id="mobileNav" className="md:hidden flex justify-between">
          
          <div id="wellListContainer">
            <a href="" className="flex">
              <ChevronLeft className="mt-[.15rem]"/>
              <h2 className="text-lg underline underline-offset-2 under">Father's Day</h2>
            </a>
          </div>

          <Sheet>
            <SheetTrigger>
              <Menu size="24" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
                    <div id="navSearch" className="mt-10">
                        <div className='max-w-md mx-auto'>
                            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                                <div className="grid place-items-center h-full w-12 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" id="search" placeholder="Search something.." /> 
                            </div>
                        </div>
                    </div>

                    <div className="mt-14">
                    {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target={item.openInNewTab ? "_blank" : "_self"}
                      className={cn(
                        "block py-2",
                        pathname === item.href && "font-semibold"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                    </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    );
};


const Profile = () => {
  const stytch = useStytch();
  const { user } = useStytchUser();
  const { session } = useStytchSession();

  return (
    <div className="p-5">
        <SideBar />
        <WellsNav />
        <ContentWindow>
            {/* Content Of course */}
            <WishList />
            {/* <h1 className='mx-auto h-[4rem] flex flex-col place-content-center'>Title of Content Goes Here</h1>
            <h3>Subtitle</h3>

            <Image src={`/images/first-fathers-day-paper-card.jpg`} alt="Maybe an Image?" width={400} height={1200} className="mx-auto my-5" />

            <p>
                A big paragraph

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur repellendus, numquam voluptatem libero, obcaecati similique tempore blanditiis suscipit saepe inventore. Veritatis, distinctio similique. Aspernatur alias, magni fugit harum corrupti repellendus eveniet quaerat minus minima suscipit quasi sequi, tenetur dolor nostrum? Quos fuga deserunt magnam non, amet alias est doloribus repudiandae dignissimos quod earum cupiditate laudantium facere dolore ipsum consectetur esse possimus sapiente. Dicta omnis accusantium fugit sed optio veniam dolores accusamus. Incidunt nobis, cupiditate harum exercitationem eos eveniet voluptatum adipisci aliquam dicta iure vitae, similique explicabo et? Aliquam deleniti aperiam doloribus fuga maxime dignissimos, repellendus aut officia voluptate veritatis eius ratione est soluta dolor magni magnam quas, et accusamus! Eius ad cumque assumenda aperiam cum! Eaque quam eveniet facilis!
            </p> */}
            
        </ContentWindow>
        <Settings />
    </div>
  );
};

export default Profile;

// onClick={() => stytch.session.revoke()}