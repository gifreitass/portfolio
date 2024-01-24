const InfoButton: React.FC<{ children: string }> = (props) => {
    return (
        <div className="text-sm rounded shadow-md font-bold text-teal-500 bg-teal-100 px-4 py-2">{props.children}</div>
    )
}

export default InfoButton