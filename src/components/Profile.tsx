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
            
        </ContentWindow>
        <Settings />
    </div>
  );
};

export default Profile;

// onClick={() => stytch.session.revoke()}