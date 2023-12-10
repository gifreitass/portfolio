const Text: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <span className="w-2/5 text-lg text-white">{props.children}</span>
    )
}

export default Text