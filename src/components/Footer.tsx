"use client";
import { FunctionComponent } from "react";
import { DarkModeToggle } from "./DarkModeToggle";


export const Footer: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-between mt-8 md:mt-16 mb-12">
      
      <DarkModeToggle />
    </section>
  );
};
