"use client";
import * as React from "react";
import { Logo } from "./Logo";
import { NavigationItem } from "./NavigationItem";
import Button from "./Button";

export const Navigation: React.FC = () => {
  return (
    <header>
      <nav className="flex flex-row mb-auto">
        <div>
          <Logo className="box-border flex relative flex-col shrink-0 mb-auto" />
        </div>
        <div />
        <NavigationItem className="invisible my-auto mr-10 ml-10 text-2xl font-bold">
  &nbsp;
</NavigationItem>
<NavigationItem className="invisible my-auto mr-10 ml-10 text-2xl font-bold">
  &nbsp;
</NavigationItem>
<NavigationItem className="invisible my-auto mr-10 ml-10 text-2xl font-bold">
  &nbsp;
</NavigationItem>
<NavigationItem className="invisible my-auto mr-10 ml-10 text-2xl font-bold">
  &nbsp;
</NavigationItem>
<NavigationItem className="invisible my-auto mr-10 ml-10 text-2xl font-bold">
  &nbsp;
</NavigationItem>



        <NavigationItem className="my-auto mr-10 ml-10 text-xl font-bold text-cyan-800 max-md:text-xl max-sm:text-lg">
          Home
        </NavigationItem>
        
        <NavigationItem className="my-auto mr-10 ml-10 text-xl font-bold text-cyan-800 max-md:text-xl max-sm:text-lg">
          About
        </NavigationItem>
        
        <NavigationItem className="my-auto mr-10 ml-10 text-xl font-bold text-cyan-800 max-md:text-xl max-sm:text-lg">
        Blog
        </NavigationItem>

        <NavigationItem className="my-auto mr-10 ml-10 text-xl font-bold text-cyan-800 max-md:text-xl max-sm:text-lg">
        Services
        </NavigationItem>
        
        <NavigationItem className="my-auto mr-10 ml-10 text-xl font-bold text-cyan-800 max-md:text-xl max-sm:text-lg">
        Contact us
        </NavigationItem>
        
        <Button className="my-auto text-xl mr-10 ml-10">
  Book a free consultation
</Button>

      </nav>
  </header>
  );
};
export default Navigation;
export { NavigationItem } from "./NavigationItem";
export { Logo } from "./Logo";
