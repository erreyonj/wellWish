"use client";

import React from "react";
import { FunctionComponent } from "react";
import { useStytch, useStytchSession, useStytchUser } from "@stytch/nextjs";
import SideBar from "./SideBar";
import { Sheet,SheetContent,SheetDescription,SheetHeader,SheetTrigger, } from "./ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import ContentWindow from "./ui/content-window";
import Settings from "./Settings"
import fathersdayimg from "../../public/images/first-fathers-day-paper-card.jpg"
import Image from "next/image";



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
      <nav>
        {/* Should actually be a filter that shows Available Wells/Wishes matching input */}
        <div id="navSearch"></div>
        <div className="hidden md:flex items-center">
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
        <div className="md:hidden flex justify-end">
          <Sheet>
            <SheetTrigger>
              <Menu size="24" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription>
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
    <div className="p-5 *:border border-slate-600">
        <SideBar />
        <WellsNav />
        <ContentWindow>
            {/* Content Of course */}
            <h1 className='mx-auto h-[4rem] border border-stone-500 flex flex-col place-content-center'>Title of Content Goes Here</h1>
            <h3>Subtitle</h3>

            {/* <img src="../../public/images/first-fathers-day-paper-card.jpg" alt="Maybe an image"  className="h-60"/> */}
            <Image src={`/images/first-fathers-day-paper-card.jpg`} alt="Maybe an Image?" width={200} height={600} className="mx-auto my-5" />

            <p>
                A big paragraph

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur repellendus, numquam voluptatem libero, obcaecati similique tempore blanditiis suscipit saepe inventore. Veritatis, distinctio similique. Aspernatur alias, magni fugit harum corrupti repellendus eveniet quaerat minus minima suscipit quasi sequi, tenetur dolor nostrum? Quos fuga deserunt magnam non, amet alias est doloribus repudiandae dignissimos quod earum cupiditate laudantium facere dolore ipsum consectetur esse possimus sapiente. Dicta omnis accusantium fugit sed optio veniam dolores accusamus. Incidunt nobis, cupiditate harum exercitationem eos eveniet voluptatum adipisci aliquam dicta iure vitae, similique explicabo et? Aliquam deleniti aperiam doloribus fuga maxime dignissimos, repellendus aut officia voluptate veritatis eius ratione est soluta dolor magni magnam quas, et accusamus! Eius ad cumque assumenda aperiam cum! Eaque quam eveniet facilis!
            </p>
            
        </ContentWindow>
        <Settings />
    </div>
  );
};

export default Profile;

// onClick={() => stytch.session.revoke()}