"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";


export interface IActiveLink {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: IActiveLink) => {
    const pathName = usePathname();
    return (
        <Link
            className={`hover:underline hover:text-blue-400 transition-all duration-75 ${pathName === path ? "text-blue-500" : ""}`}
            href={path}
        >{text}</Link>
    );
};