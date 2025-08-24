
import WalletButton from "../WalletButton";
import styles from "./LotteryCard.module.css";

const LotteryCard = ()=> {
    return (
        <>
            <div className={styles.welcome_card}>
                <h1 className={styles.welcome_heading}>Good evening!!</h1>
                <p className={styles.welcome_paragraph}>Join a lottery or start a new one.</p>
                <WalletButton size="lg" />
            </div>
        </>
    )
}

export default LotteryCard;