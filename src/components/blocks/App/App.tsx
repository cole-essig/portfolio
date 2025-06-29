import "./App.css"
import { useState, useEffect } from "react"
import Header from "../Header/Header"
import Headline from "../Headline/Headline"
import StatsBlock from "../StatsBlock/StatsBlock"
import FeaturedProjects from "../FeaturedProjects/FeaturedProjects"
import AttributeBlock from "../AttributeBlock/AttributeBlock"
import WorkExp from "../WorkExp/WorkExp"
import StrengthSkills from "../StrengthSkills/StrengthSkills"
import ContactSection from "../ContactSection/ContactSection"
import Footer from "../Footer/Footer"
import Meteor from "../Meteor/Meteor"
 
const App: React.FC = () => {
  const [startMeteor, setIsMeteor] = useState(false)
  const [stopCreating, setStopCreating] = useState(false)

  useEffect(() => {
    if (!startMeteor) return
    const timer = setTimeout(() => {
      setIsMeteor(false)
    }, 6000);
    const timer_two = setTimeout(() => {
      setStopCreating(true)
    }, 4000)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer_two)
    }
  }, [startMeteor])

  return (
    <>
    <div className="App">
      <div className="w-screen h-screen p-[80px]">
        <Header setMeteor={setIsMeteor} />
        <Headline />
      </div>
      <div className="p-[80px]">
        <StatsBlock />
        <div className="flex flex-col items-center justify-center">
          <FeaturedProjects />
          <AttributeBlock />
          <WorkExp />
          <StrengthSkills />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </div>
    {startMeteor? <Meteor stopCreation={stopCreating? 0 : 0.1}/> : ""}
    </>
  )
}
 
export default App

