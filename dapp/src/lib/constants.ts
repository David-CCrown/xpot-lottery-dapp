import { createContext } from "react";

export const AppContext = createContext(null);

export const navLinks = [
        {
            label: "About",
            link: "/about"
        },
        {
            label: "Lotteries",
            link: "/lotteries"
        },
        {
            label: "Winners",
            link: "/winners"
        }
    ]