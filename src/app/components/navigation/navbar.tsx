'use client'

import { useEffect } from "react";
import Links from "./links";


export default function Navbar() {
    useEffect(() => {
        const handleSmoothScroll = (e: Event) => {
            const target = (e.target as HTMLAnchorElement)?.hash;
            if (target) {
                e.preventDefault();
                const element = document.querySelector(target);
                if (element) {
                    const offset = 56;
                    const top = element.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                }
            }
        };

        const links = document.querySelectorAll("a[href^='#']");
        links.forEach(link => link.addEventListener("click", handleSmoothScroll));
        return () => links.forEach(link => link.removeEventListener("click", handleSmoothScroll));
    }, []);

    return (
        <header className="bg-neutral-800 h-14 w-dvw z-10 sticky top-0">
            <nav className="flex justify-center h-full">
                <Links />
            </nav>
        </header>
    );
}