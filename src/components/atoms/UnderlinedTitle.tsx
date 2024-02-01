const UnderlinedText: React.FC<{ children: React.ReactNode }> = (props) => {
    return (
        <span className="border-b-4 leading-relaxed border-teal-500 drop-shadow-xl">{props.children}</span>
    )
}

export default UnderlinedText