const InfoButton: React.FC<{ children: string }> = (props) => {
    return (
        <div className="text-sm rounded shadow-md font-bold text-pink-400 bg-pink-100 px-4 py-2">{props.children}</div>
    )
}

export default InfoButton