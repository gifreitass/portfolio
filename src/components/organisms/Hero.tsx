import { RefObject } from "react"
import ScrollDownButton from "../atoms/ScrollDownButton"
import Text from "../atoms/Text"
import Title from "../atoms/Title"
import UnderlinedText from "../atoms/UnderlinedTitle"
import Background from "./Background"
import NavBar from "./NavBar"

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
        <section className="w-full h-screen text-white flex flex-col gap-12 relative">
            <Background />
            <NavBar />
            <Title margin="mx-48 mt-32" size='text-6xl'>Sou <UnderlinedText>Giovanna de Freitas</UnderlinedText>,</Title>
            <Text size="text-xl" margin="mx-48">estudante de Desenvolvimento Web Front-end.</Text>
            <ScrollDownButton onClick={scrollToSection} />
        </section>
    )
}

export default Hero