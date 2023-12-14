import Hero from "../organisms/Hero"
import NavBar from "../organisms/NavBar"
import Skills from "../organisms/Skills"

const HomePage: React.FC = () => {
    return (
        <>
            <NavBar />
            <main className="mt-24">
                <Hero />
                <div className="w-full mt-28 h-0.5 bg-pink-300" />
                <Skills />
            </main>
        </>
    )
}

export default HomePage