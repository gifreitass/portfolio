import Hero from "../organisms/Hero"
import NavBar from "../organisms/NavBar"
import ProjectsSection from "../organisms/ProjectsSection"
import Skills from "../organisms/Skills"

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <video className="w-full h-full object-cover" src="videos/background.mp4" autoPlay loop muted/>
            <main className="mt-24">
                <Hero />
                <div className="w-full mt-28 h-0.5 bg-pink-300" />
                <Skills />
                <ProjectsSection />
            </main>
        </>
    )
}

export default HomePage