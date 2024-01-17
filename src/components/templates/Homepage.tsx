import DivisionBar from "../atoms/DivisionBar"
import Background from "../organisms/Background"
import Hero from "../organisms/Hero"
import NavBar from "../organisms/NavBar"
import ProjectsSection from "../organisms/ProjectsSection"
import Skills from "../organisms/Skills"

const HomePage: React.FC = () => {
    return (
        <>
            <div className="absolute w-screen h-screen bg-[#F249F2] bg-[radial-gradient(ellipse_farthest-side_at_bottom_center,_#F249F2_0%,_#EDDBB2_100%)]"></div>
            <NavBar />
            <main className="mx-48 my-8 relative mt-24">
                <Hero />
                <DivisionBar />
                <Skills />
                <DivisionBar />
                <ProjectsSection />
            </main>
        </>
    )
}

export default HomePage