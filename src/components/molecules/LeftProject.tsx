import Button from "../atoms/Button"
import InfoButton from "../atoms/InfoButton"
import ProjectImage from "../atoms/ProjectImage"
import Text from "../atoms/Text"
import Title from "../atoms/Title"

const LeftProject: React.FC<{ link: string, image: string, descriptionImage: string, text: string, title: string }> = (props) => {
    const { link, image, descriptionImage, text, title } = props

    return (
        <div className="flex gap-10">
            <div className="flex flex-col gap-y-8 justify-center">
                <Title size="text-2xl">{title}</Title>
                <div className="flex gap-7">
                    <InfoButton>CSS</InfoButton>
                    <InfoButton>TYPESCRIPT</InfoButton>
                    <InfoButton>REACTJS</InfoButton>
                </div>
                <Text size="text-lg">{text}</Text>
                <Button link={link}>VISUALIZAR PROJETO ➜</Button>
            </div>
            <ProjectImage image={image} description={descriptionImage} />
        </div>
    )
}

export default LeftProject