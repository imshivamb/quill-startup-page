"use client";

import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const components: { title: string; description: string }[] = [
  {
    title: "Sleek",
    description:
      "Minimalistic and elegant design for a clean and professional online presence.",
  },
  {
    title: "Martify",
    description:
      "Perfect for online shopping with advanced features to manage your e-commerce business effortlessly.",
  },
  {
    title: "Showcase",
    description:
      "Highlight your work with style, impress your visitors, and stand out in the crowd with this stunning portfolio template.",
  },
  {
    title: "Eventify",
    description:
      "Promote and manage events easily, whether it's a conference, workshop, or a grand celebration – this template has you covered.",
  },
  {
    title: "Delish",
    description:
      "Ideal for restaurant websites, featuring menus, reservations, and a captivating design to tantalize your visitors' taste buds.",
  },
  {
    title: "Blogify",
    description:
      "A versatile blogging platform with customizable layouts and features to share your thoughts, stories, and articles. Engage your readers with a captivating blog.",
  },
];

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <h2 className="text-5xl font-bold py-4">quill.</h2>
                    <div className="mb-2 mt-4 text-lg font-medium">Quill</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Online platform for websites themes and templates
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem title="Introduction">
                Learn about the basics of Quill
              </ListItem>
              <ListItem title="Demo">
                How to build a website with Quill
              </ListItem>
              <ListItem title="Community">
                Join the Community and get support from fellow members.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Templates</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="text-md">
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="text-md ml-6 hover:text-black">
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
export default NavMenu;
