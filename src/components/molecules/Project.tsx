import ProjectImage from "../atoms/ProjectImage"
import Text from "../atoms/Text"
import Title from "../atoms/Title"

const Project: React.FC<{ link: string, image: string, description: string }> = (props) => {
    return (
        <div>
            <ProjectImage image={props.image} link={props.link} description={props.description} />
            <Title size="text-lg">MOVIE STREAMING PROJECT</Title>
            <Text>TYPESCRIPT</Text>
        </div>
    )
}

export default Project