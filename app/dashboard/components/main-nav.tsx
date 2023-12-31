"use client";

import React from "react";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Caravan,
  SigmaIcon,
  CloudSun,
  ShirtIcon,
  Orbit,
  Stethoscope,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Overview",
      path: "/dashboard",
      icon: <LayoutDashboard />,
      active: pathname === "/dashboard",
    },
    {
      label: "Categories",
      path: "/dashboard/categories",
      icon: <Caravan />,
      active: pathname === "/dashboard/categories",
    },
    {
      label: "Sizes",
      path: "/dashboard/sizes",
      icon: <SigmaIcon />,
      active: pathname === "/dashboard/sizes",
    },
    {
      label: "Color",
      path: "/dashboard/colors",
      icon: <CloudSun />,
      active: pathname === "/dashboard/colors",
    },
    {
      label: "Product",
      path: "/dashboard/products",
      icon: <ShirtIcon />,
      active: pathname === "/dashboard/products",
    },
    {
      label: "Product Entry",
      path: "/dashboard/product_entrys",
      icon: <Stethoscope />,
      active: pathname === "/dashboard/product_entrys",
    },
    {
      label: "Orders",
      path: "/dashboard/orders",
      icon: <Orbit />,
      active: pathname === "/dashboard/orders",
    },
  ];

  return (
    <nav className="my-6 px-3">
      <div className="font-semibold text-sm pl-4 text-gray-400 tracking-wide mb-3">
        E-commerce
      </div>
      {routes.map((route) => (
        <Link href={route.path} key={route.path}>
          <div
            className={cn(
              "py-3 px-4 flex gap-2 items-center font-semibold transition",
              route.active
                ? "ring-1 ring-slate-300 shadow-sm rounded-md"
                : "text-gray-400 hover:text-black"
            )}
          >
            {route.icon}
            <span className="text-sm">{route.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
