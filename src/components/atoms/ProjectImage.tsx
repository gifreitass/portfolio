const ProjectImage: React.FC<{ image: string, description: string }> = (props) => {
    return (
        <img className="w-1/2" src={props.image} alt={props.description} />
    )
}

export default ProjectImage