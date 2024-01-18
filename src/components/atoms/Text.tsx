const Text: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <span className="text-4x1 drop-shadow-md">{props.children}</span>
    )
}

export default Text