"use client"
import * as React from "react"
import Link from "next/link"
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
import Mobilemenu from "./Mobilemenu";
import { usePathname } from "next/navigation"


function Navbar() {
  const pathName = usePathname();
  console.log(pathName)
  return (
    <header className="shadow-2xl ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2">
        <div>
          <Link className="text-xl font-bold" href="/">Daily News</Link>
        </div>
        {/* desktop menu */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="">
            <NavigationMenuLink className={`${pathName === "/news" ? "text-red-600" : ""}`} href="/news">News</NavigationMenuLink>
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
            <NavigationMenuLink className={`${pathName === "/about" ? "text-red-600" : ""}`} href="/about" >About</NavigationMenuLink>
            <NavigationMenuLink className={`${pathName === "/contact" ? "text-red-600" : ""}`} href="/contact">Contact Us</NavigationMenuLink>

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
        <Mobilemenu></Mobilemenu>
      </nav>
    </header>
  )
}


export default Navbar;