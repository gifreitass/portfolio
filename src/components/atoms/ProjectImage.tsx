const ProjectImage: React.FC<{ link: string, image: string, description: string }> = (props) => {
    return (
        <a target="_blank" href={props.link}><img className="mt-12 h-4/5" src={props.image} alt={props.description} /></a>
    )
}

export default ProjectImage