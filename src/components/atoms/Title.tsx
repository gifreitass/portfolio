const Title: React.FC<{ children: React.ReactNode, size: string }> = (props) => {
    return (
        <h1 className={`${props.size} font-semibold drop-shadow-md`}>{props.children}</h1>
    )
}

export default Title