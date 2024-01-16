const Text: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <span className="w-2/5 text-lg drop-shadow-md">{props.children}</span>
    )
}

export default Text