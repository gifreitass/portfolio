import Text from "../atoms/Text"
import Title from "../atoms/Title"

const Footer = () => {
    return (
        <footer className="bg-teal-950 w-screen h-[45vh] sm:h-[25vh] lg:h-[30vh] mt-20 text-white flex flex-col sm:flex-row pt-10 gap-6">
            <div className="flex flex-col gap-6">
                <Text margin="mx-12 md:ml-28 lg:mx-48" size="text-sm sm:text-lg">Obrigada por chegar até aqui :)</Text>
                <div className="mx-12 md:ml-28 lg:mx-48 flex flex-col gap-2">
                    <Text size="text-sm sm:text-lg">ENTRE EM CONTATO 💌</Text>
                    <a href="mailto:giovannadefreitasaraujo@hotmail.com"><Text size="text-sm sm:text-base"><b>giovannadefreitasaraujo@hotmail.com</b></Text></a>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <Text size="mx-12 text-sm sm:text-lg">CONECTE-SE COMIGO 🤝</Text>
                <div className="mx-12 flex flex-col gap-5">
                    <a target="_blank" href="https://www.linkedin.com/in/gifreitasss/"><Text size="text-sm sm:text-base"><b>Linkedin</b></Text></a>
                    <a target="_blank" href="https://docs.google.com/document/d/1Eyv_4tFL0x06-bBIZ3Y0IxLMcbtbKfef7ug1C55PaVo/edit?usp=sharing"><Text size="text-sm sm:text-base"><b>Currículo</b></Text></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer