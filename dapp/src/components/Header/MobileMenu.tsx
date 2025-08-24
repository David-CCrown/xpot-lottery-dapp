import { useCallback, useState, type MouseEvent } from "react";
import styles from "./Header.module.css"
import { createPortal } from "react-dom";
import { navLinks } from "../../lib/constants";
import { Link } from "react-router";

const MobileMenu = ()=> {

    const [open, setOpen] = useState<boolean>();
    const toggleSideMenu = useCallback((ev: MouseEvent)=> {
        if(ev.currentTarget.hasAttribute("data-closable")){
            setOpen(!open);
        }
        
        
    }, [open])

    return (
        <div className={styles.menu_wrapper}>
            <button style={{transform: open ? "translate(100%)" : "translate(0)", transition: "0.3s ease-out all", opacity: open ? "0" : "1"}} className={styles.hamburger} onClick={toggleSideMenu} data-closable>
                <span style={{transform: open ? "translate(-5px, 5px) rotate(-45deg)": "rotate(0deg)"}}></span>
                <span style={{transform: open ? "translate(0, -5px) rotate(45deg)": "rotate(0deg)"}}></span>
            </button>
            {
                createPortal(
                    <div onClick={toggleSideMenu} style={{"--open": open ? 0 : "-100%", "--visibility": open ? "visible" : "hidden"}} className={styles.overlay}>
                        <div className={styles.menu}>
                            <p className={styles.menu_title}>\\ Menu</p>
                            <button style={{transform: open ? "translate(30%)" : "translate(0)", transition: "0.3s ease-out 0.4s all", opacity: open ? "1" : "0"}} className={styles.hamburger} onClick={toggleSideMenu} data-closable>
                                <span style={{transform: open ? "translate(-5px, 5px) rotate(-45deg)": "rotate(0deg)"}}></span>
                                <span style={{transform: open ? "translate(0, -5px) rotate(45deg)": "rotate(0deg)"}}></span>
                            </button>
                             {
                                navLinks.map(({link, label}, idx)=> (
                                    <Link key={idx} to={link} style={{"--delay": `${(idx/10)+0.3}s`, transform: open ? "translate(0, 0)" : "translate(-20%, -10%)", opacity: open ? "1" : "0"}}>{label}</Link>
                                ))
                            }
                        </div>
                    </div>,
                    document.body
                )
            }
        </div>
    )
}

export default MobileMenu;