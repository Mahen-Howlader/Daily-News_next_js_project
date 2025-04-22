"use client"

import * as React from "react"
import Link from "next/link"
import { IoMenuSharp } from "react-icons/io5";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"


function Navbar() {
  return (
    <header className="shadow-2xl ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
        <div>
          <Link className="text-xl font-bold" href="/">Daily News</Link>
        </div>
        {/* desktop menu */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="">
            <NavigationMenuLink href="/news">News</NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Service</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="min-w-[250px] p-4 bg-white rounded-md ">
                  <ul>
                    <li>
                      <NavigationMenuLink href="/service/web">Web Development</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/service/app">Mobile Apps</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/service/seo">SEO</NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink href="/about" className={"hover:text-red-500"}>About</NavigationMenuLink>
            <NavigationMenuLink href="/contact">Contact Us</NavigationMenuLink>

          </NavigationMenuList>
        </NavigationMenu>
        {/* Color switcher and login button */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-5">
            <small className="font-semibold">Dark Mode</small>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>
        {/* mobile hamber menu */}
        <div className="lg:hidden">
          <IoMenuSharp size={30} />
        </div>
      </nav>
    </header>
  )
}


export default Navbar;