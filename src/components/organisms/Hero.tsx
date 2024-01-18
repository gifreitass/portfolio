import Button from "../atoms/Button"
import Text from "../atoms/Text"
import Title from "../atoms/Title"
import UnderlinedText from "../atoms/UnderlinedTitle"

const Hero = () => {
    return (
        <section className="mt-40 text-white flex flex-col gap-12">
            <Title size='text-6xl'>Prazer em conhecer você! <br /> Sou <UnderlinedText>Giovanna de Freitas</UnderlinedText>.
            </Title>
            <Button link="mailto:giovannadefreitasaraujo@hotmail.com">ENTRE EM CONTATO</Button>
        </section>
    )
}

export default Hero