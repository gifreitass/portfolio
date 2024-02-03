import Button from "../atoms/Button"
import InfoButton from "../atoms/InfoButton"
import ProjectImage from "../atoms/ProjectImage"
import Text from "../atoms/Text"
import Title from "../atoms/Title"

const RightProject: React.FC<{ link: string, image: string, descriptionImage: string, text: string, title: string, technologies: string[] }> = (props) => {
    const { link, image, descriptionImage, text, title, technologies } = props

    return (
        <div className="flex flex-col lg:flex-row items-center gap-10">
            <ProjectImage image={image} description={descriptionImage} />
            <div className="flex flex-col gap-y-8 justify-center">
                <Title size="text-2xl">{title}</Title>
                <div className="flex flex-wrap gap-4 sm:gap-7 md:gap-4">
                    {technologies.map((technology, key) => {
                        return <InfoButton key={key}>{technology}</InfoButton>
                    })}
                </div>
                <Text size="text-base sm:text-lg">{text}</Text>
                <Button link={link}>VISUALIZAR PROJETO ➜</Button>
            </div>
        </div>
    )
}

export default RightProject