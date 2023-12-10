const Button: React.FC<{ children: React.ReactNode }> = (props) => {
    //passar href como props pois o botão vai ser usado várias vezes
    return (
        <a className="text-white tracking-wide w-fit border-b-2 border-white" href="mailto:giovannadefreitasaraujo@hotmail.com">{props.children}</a>
    )
}

export default Button