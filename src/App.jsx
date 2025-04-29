import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import RetirementWithdrawal from "./container/RetirementWithdrawal"
// import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RetirementWithdrawal />
    </>
  )
}

export default App
