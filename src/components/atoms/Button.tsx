const Button: React.FC<{ children: React.ReactNode, link: string }> = (props) => {
    //passar href como props pois o botão vai ser usado várias vezes
    return (
        <a className="font-semibold tracking-wide w-fit text-gray-500 hover:text-pink-500 duration-500 hover:translate-x-2" href={props.link}>{props.children}</a>
    )
}

export default Button