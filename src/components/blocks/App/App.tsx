import "./App.css"
import { useState, useEffect, useRef } from "react"
import Header from "../Header/Header"
import Headline from "../Headline/Headline"
import StatsBlock from "../Stats/Stats"
 
const App: React.FC = () => {
  const [visitors, setVisitors] = useState(0)
  return (
    <div className="App">
      <div className="w-screen h-screen p-[80px]">
        <Header />
        <Headline />
      </div>
      <div className="p-[80px]">
        <StatsBlock />
      </div>
    </div>
  )
}
 
export default App

