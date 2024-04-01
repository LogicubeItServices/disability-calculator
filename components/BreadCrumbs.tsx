"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export const BreadCrumbs = () => {
    const path = usePathname()
return     <div className="flex justify-start items-center gap-2 text-sm">
Available Tests :
<div className="flex ">
  {["hearing", "speech", "language"].map((e, i) => {
    return (
      <Link
      href={"./"+e}
        key={e}
        className={`p-2 border cursor-pointer  hover:bg-black/20 border-gray-500/50 duration-100 ${
          i === 0 && "rounded-s-lg"
        } ${i === 2 && "rounded-e-lg"}
        ${path.includes(e) && "bg-black/10"}
        `}
      >
        {e}
      </Link>
    );
  })}
</div>
</div>}