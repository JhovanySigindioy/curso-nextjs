import Link from "next/link";
import { ActiveLink } from "../activeLink/ActiveLink";
import path from "path";
import { text } from "stream/consumers";

const navItems = [
    { path: "/", text: "Home" },
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
    { path: "/pricing", text: "Pricing" },
]

export const NavBar = () => {
    return (
        <nav className="flex justify-between px-20 py-5 bg-blue-800 bg-opacity-30 m-2 rounded-md">
            <section>
                <span>Logo</span>
            </section>
            <section>
                <ul className="flex gap-6">
                    {
                        navItems.map((item) => (
                            <ActiveLink key={item.path} path={item.path} text={item.text} />
                        ))
                    }
                </ul>
            </section>
        </nav>
    );
}