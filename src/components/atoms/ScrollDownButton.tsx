const ScrollDownButton: React.FC<{ onClick: any }> = (props) => {

    return (
        <img onClick={props.onClick} className="w-14 mx-auto sm:mt-10 md:mt-44 cursor-pointer drop-shadow-xl hover:-translate-y-1 hover:scale-110 duration-300" src="images/down-arrow.png" alt="down arrow" />
    )
}

export default ScrollDownButton