import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'
import HeroGradient from './components/herosection/HeroGradient'
import HeroMain from './components/herosection/HeroMain'
import SubHeroSection from './components/herosection/SubHeroSection'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectsMain from './components/projectSections/ProjectsMain'
import SkillsMain from './components/skillSection/SkillsMain'
import SubSkills from './components/skillSection/SubSkills'

function App() {
 

  return (
   <main className="font-body text-white relative overflow-hidden">
    < NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroSection/>
    <AboutMeMain/>
    <SkillsMain/>
    <SubSkills/>
    <ProjectsMain/>
    <ContactMeMain/>
    <FooterMain/>
    
    
   </main>
  )
}

export default App
