import Header from "./components/Header"
import styles from "./App.module.css"
import LotteryCard from "./components/LotteryCard"
import LotteryStatus from "./components/LotteryStatus"

function App() {

  return (
    <>
      <Header />
      <div className={styles.body}>
        <LotteryCard />
        <LotteryStatus />
      </div>
    </>
  )
}

export default App
