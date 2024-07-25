'use client'
import { FloatButton } from 'antd'
import Navbar from '../../components/ui/NavbarSection'
import SectionHeader from '../../components/ui/SectionHeader'
import AboutSection from '../../components/ui/AboutSection'
import SkillsSection from '../../components/ui/SkillsSection'
import ProjectSection from '../../components/ui/ProjectSection'
import Contact from '../../components/ui/Contact'
export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar/>
      <SectionHeader/>
     <AboutSection/>
      <SkillsSection/>
      <ProjectSection/>
      <Contact/>
      <footer className="bg-muted py-8 bg-gray-100">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">&copy; 2024 Alex Fonseca. All rights reserved.</p>
        </div>
      </footer>
      <FloatButton.BackTop style={{
        backgroundColor:'#22d3ee',
      }}/>

    </div>
  )
}

