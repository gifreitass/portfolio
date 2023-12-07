const Subtitle: React.FC<{ children: string }> = (props) => {
    return (
        <span className="text-3xl font-bold underline">{props.children}</span>
    )
}

export default Subtitle