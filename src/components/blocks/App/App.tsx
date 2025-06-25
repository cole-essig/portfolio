import "./App.css"
import { useState, useEffect, useRef } from "react"
import Header from "../Header/Header"
import Headline from "../Headline/Headline"
 
const App: React.FC = () => {
  const [visitors, setVisitors] = useState(0)
  return (
    <div className="App">
      <Header />
      <Headline />
    </div>
  )
}
 
export default App

