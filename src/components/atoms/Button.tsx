const Button: React.FC<{ children: React.ReactNode }> = (props) => {
    //passar href como props pois o botão vai ser usado várias vezes
    return (
        <a className="tracking-wide w-fit border-b-2 border-white hover:text-pink-300 hover:border-pink-300 duration-500 hover:animate-pulse" href="mailto:giovannadefreitasaraujo@hotmail.com">{props.children}</a>
    )
}

export default Button