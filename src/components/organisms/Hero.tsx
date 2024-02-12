import { RefObject } from "react"
import ScrollDownButton from "../atoms/ScrollDownButton"
import Text from "../atoms/Text"
import Title from "../atoms/Title"
import UnderlinedText from "../atoms/UnderlinedTitle"
import Background from "./Background"
import NavBar from "./NavBar"
import Typewriter from 'typewriter-effect';

const Hero: React.FC<{ skillsRef: RefObject<HTMLElement> }> = (props) => {
    const scrollToSection = () => {
        if (!props.skillsRef.current) {
            return
        }
        window.scrollTo({
            top: props.skillsRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return (
        <section className="w-full h-screen text-white flex flex-col gap-20 md:gap-6 relative ">
            <Background />
            <NavBar />
            <div className="z-10 font-semibold drop-shadow-xl mx-12 mt-12 sm:mt-20 md:mt-28 lg:mt-36 sm:mx-20 md:mx-28 lg:mx-48 text-5xl md:text-6xl">
                <Typewriter
                    options={{
                        strings: ['Giovanna de Freitas'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <Text size="text-xl" margin="mt-4 mx-12 sm:mx-20 md:mx-28 lg:mx-48">estudante de desenvolvimento web front-end.</Text>
            <ScrollDownButton onClick={scrollToSection} />
        </section>
    )
}

export default Hero