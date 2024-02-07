import ProjectImage from "../atoms/ProjectImage"
import ProjectInfos from "./ProjectInfos"

const LeftProject: React.FC<{ link: string, image: string, descriptionImage: string, text: string, title: string, technologies: string[] }> = (props) => {
    const { link, image, descriptionImage, text, title, technologies } = props

    return (
        <div className="flex flex-col lg:flex-row items-center gap-10">
            <ProjectInfos link={link} technologies={technologies} text={text} title={title} />
            <ProjectImage image={image} description={descriptionImage} />
        </div>
    )
}

export default LeftProject