const Text: React.FC<{ children: React.ReactNode, margin?: string, size: string }> = (props) => {
    return (
        <span className={`${props.size} drop-shadow-xl ${props.margin}`}>{props.children}</span>
    )
}

export default Text