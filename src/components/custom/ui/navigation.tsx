"use client";

import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-1">
      {routes.map((item) => {
        const isActive = pathname == item.href;
        const Icon = isActive ? item.activeIcon : item.icon;
        return (
          <Link key={item.id} href={item.href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:bg-muted",
                isActive && "bg-muted-foreground shadow-sm hover:opacity-100"
              )}
            >
              <Icon className="size-5" />
              {item.title}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
