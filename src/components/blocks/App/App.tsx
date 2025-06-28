import "./App.css"
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
  return (
    <div className="App">
      <div className="w-screen h-screen p-[80px]">
        <Header />
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
     <Meteor />
    </div>
  )
}
 
export default App

