import Button from "../atoms/Button"
import Text from "../atoms/Text"
import Title from "../atoms/Title"
import UnderlinedText from "../atoms/UnderlinedTitle"

const Hero = () => {
    return (
        <section className="flex flex-col gap-12">
            <Title size='text-6xl'>Prazer em conhecer você! <br /> Sou <UnderlinedText>Giovanna de Freitas</UnderlinedText>.
            </Title>
            <Text>Sou estudante de Desenvolvimento Web Front-End. Busco aprimorar meus conhecimentos nesse ramo e a cada dia me interesso mais pela área de tecnologia. </Text>
            <Button>ENTRE EM CONTATO</Button>
        </section>
    )
}

export default Hero