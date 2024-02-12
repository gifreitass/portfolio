const Logo: React.FC<{ link: string, src: string, description: string }> = (props) => {
    return (
        <a href={props.link} target="blank"><img className="w-10 drop-shadow-xl hover:-translate-y-1 hover:scale-110 duration-300" src={props.src} alt={props.description} /></a>
    )
}

export default Logo