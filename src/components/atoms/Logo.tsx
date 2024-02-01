const Logo: React.FC<{ link: string, src: string, description: string }> = (props) => {
    return (
        <a href={props.link} target="blank"><img className="w-10 drop-shadow-xl" src={props.src} alt={props.description} /></a>
    )
}

export default Logo