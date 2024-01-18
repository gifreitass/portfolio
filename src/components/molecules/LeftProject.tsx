import Button from "../atoms/Button"
import InfoButton from "../atoms/InfoButton"
import ProjectImage from "../atoms/ProjectImage"
import Text from "../atoms/Text"
import Title from "../atoms/Title"

const LeftProject: React.FC<{ link: string, image: string, descriptionImage: string, text: string }> = (props) => {
    return (
        <div className="flex gap-10">
            <div className="flex flex-col gap-y-8 justify-center">
                <Title size="text-2xl">MOVIE STREAMING PROJECT</Title>
                <div className="flex gap-7">
                    <InfoButton>CSS</InfoButton>
                    <InfoButton>TYPESCRIPT</InfoButton>
                    <InfoButton>REACTJS</InfoButton>
                </div>
                <Text>{props.text}</Text>
                <Button link="https://movie-streaming-project.vercel.app/">VISUALIZAR PROJETO ➜</Button>
            </div>
            <ProjectImage image={props.image} description={props.descriptionImage} />
        </div>
    )
}

export default LeftProject