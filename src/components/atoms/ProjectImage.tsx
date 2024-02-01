const ProjectImage: React.FC<{ image: string, description: string }> = (props) => {
    return (
        <img className="w-screen" src={props.image} alt={props.description} />
    )
}

export default ProjectImage