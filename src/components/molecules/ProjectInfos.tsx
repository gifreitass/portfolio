import Button from "../atoms/Button"
import Text from "../atoms/Text"
import Title from "../atoms/Title"
import UsedTechnology from "./UsedTechnology"

const ProjectInfos: React.FC<{ title: string, technologies: string[], text: string, link: string }> = (props) => {
    const { title, technologies, text, link } = props

    return (
        <div className="flex flex-col gap-y-8 justify-center">
            <Title size="text-2xl">{title}</Title>
            <UsedTechnology technologies={technologies} />
            <Text size="text-base sm:text-lg">{text}</Text>
            <Button link={link}>VISUALIZAR PROJETO ➜</Button>
        </div>
    )
}

export default ProjectInfos