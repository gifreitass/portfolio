const Text: React.FC<{ children: string }> = (props) => {
    return (
        <span className="text-lg text-white">{props.children}</span>
    )
}

export default Text