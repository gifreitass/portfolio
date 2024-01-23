const ScrollDownButton: React.FC<{ onClick: any }> = (props) => {

    return (
        <img onClick={props.onClick} className="w-14 mx-auto mt-10 cursor-pointer drop-shadow-lg" src="images/down-arrow.png" alt="down arrow" />
    )
}

export default ScrollDownButton