const Logo: React.FC<{ link: string, src: string, description: string }> = (props) => {
    return (
        <a href={props.link} target="blank"><img className="w-9" src={props.src} alt={props.description} /></a>
    )
}

export default Logo