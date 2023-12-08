const Title: React.FC<{ children: string, size: string }> = (props) => {
    return (
        <h1 className={`${props.size} text-white font-semibold`}>{props.children}</h1>
    )
}

export default Title