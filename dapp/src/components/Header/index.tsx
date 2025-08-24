import { Link } from "react-router";
import { navLinks } from "../../lib/constants";
import WalletButton from "../WalletButton";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";

const Header = ()=> {

    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <h2 className={styles.logo}>x.pot</h2>
                <nav className={styles.navigation}>
                    {
                        navLinks.map(({link, label}, idx)=> (
                            <Link key={idx} to={link}>{label}</Link>
                        ))
                    }
                </nav>
                <div className={styles.right_navigation}>
                    <WalletButton />
                    <MobileMenu />
                </div>
            </div>
        </header>
    )
}

export default Header;