const UnderlinedText: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <span className="border-b-4 border-pink-300">{props.children}</span>
    )
}

export default UnderlinedText