const Title: React.FC<{ children: string }> = (props) => {
    return (
        <h1 className="text-3xl font-bold underline">{props.children}</h1>
    )
}

export default Title