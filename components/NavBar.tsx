import Image from "next/image";
import React from "react";

export function NavBar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
            <Image src={"/logo_full.svg"} width={160} height={60} alt="The Logo" className="ml-2" />
            </div>
        </div>
    )
}