"use client";

import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

// mapping method
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: DocumentDuplicateIcon,
  },
  { name: "Invoices", href: "/dashboard/invoices", icon: UserGroupIcon },
];
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        // create a variable to hold the icon
        const LinkIcon = link.icon;
        return (
          <Link
            href={link.href}
            key={link.name}
            className={clsx(
              "flex items-center gap-2 h-[48px] border border-b-1 outline-none border-t-0 border-x-0 rounded-md shadow-sm px-4 transition-all duration-300",
              { "border-b-orange-400": pathname === link.href }
            )}
          >
            <LinkIcon className="w-6 text-gray-300" />
            <p className="text-slate-200">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
