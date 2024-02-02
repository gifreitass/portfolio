'use client'
import { useRef } from "react"
import DivisionBar from "../atoms/DivisionBar"
import Hero from "../organisms/Hero"
import ProjectsSection from "../organisms/ProjectsSection"
import Skills from "../organisms/Skills"
import Footer from "../organisms/Footer"

const HomePage: React.FC = () => {
    const skills = useRef(null)

    return (
        <>
            <main>
                <Hero skillsRef={skills} />
                <Skills ref={skills} />
                <DivisionBar />
                <ProjectsSection />
                <Footer />
            </main>
        </>
    )
}

export default HomePage