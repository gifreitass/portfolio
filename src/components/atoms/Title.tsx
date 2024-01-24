const Title: React.FC<{ children: React.ReactNode, size: string, margin?: string }> = (props) => {
    return (
        <h1 className={`${props.size} ${props.margin} font-semibold drop-shadow-lg`}>{props.children}</h1>
    )
}

export default Title