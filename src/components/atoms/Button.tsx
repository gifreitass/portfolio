const Button: React.FC<{ children: React.ReactNode, link: string }> = (props) => {
    return (
        <a className="font-semibold tracking-wide w-fit text-gray-500 hover:text-teal-500 duration-500 hover:translate-x-2" href={props.link} target="_blank">{props.children}</a>
    )
} 

export default Button