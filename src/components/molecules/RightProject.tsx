import ProjectImage from "../atoms/ProjectImage"
import Text from "../atoms/Text"
import Title from "../atoms/Title"

const RightProject: React.FC<{ link: string, image: string, descriptionImage: string, text: string }> = (props) => {
    return (
        <div className="flex gap-10">
            <ProjectImage image={props.image} description={props.descriptionImage} />
            <div>
                <Title size="text-lg">MOVIE STREAMING PROJECT</Title>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores corporis molestias, debitis ab voluptatum eligendi quibusdam inventore natus earum deserunt quam minima! Quibusdam totam maxime assumenda sequi accusamus magni modi.</Text>
            </div>
        </div>
    )
}

export default RightProject