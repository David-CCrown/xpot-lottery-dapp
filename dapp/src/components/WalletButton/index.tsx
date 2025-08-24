import styles from "./WalletButton.module.css"

const WalletButton = ({size="sm"}:{size?: "sm"|"lg"})=> {

    const connectWallet = async ()=> {
        const {ethereum} = window;
        if(ethereum){
            console.log("Ethereum Metamask")
            console.log(ethereum)
            const chainId = await ethereum.request({method: "eth_chainId"})
            console.log("Result")
            console.log(chainId)

            const accounts = await ethereum.request({method: "eth_requestAccounts"})
            console.log("Accounts")
            console.log(accounts)
        } else {
            alert("Ethereum not available")
        }
    }

    return (
        <div className={styles.wrapper}>
            <button className={`${styles.button} ${size === "sm" ? styles.button_sm : styles.button_lg}`} onClick={connectWallet}>
                &rarr; Connect Wallet
            </button>
        </div>
    )
}

export default WalletButton;