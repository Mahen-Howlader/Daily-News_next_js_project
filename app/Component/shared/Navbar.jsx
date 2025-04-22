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


function Navbar() {
  return (
    <header>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <Link href="/">Daily News</Link>
        </div>
        <NavigationMenu>
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
            <NavigationMenuLink href="/contactus">Contact Us</NavigationMenuLink>

          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-5">
          <span>Dark Mode</span>
          <Switch />
        </div>
          <Button variant="default">Login</Button>
        </div>
      </nav>
    </header>
  )
}


export default Navbar;