import { useEffect, useState } from "react"

const ScrollUpButton: React.FC = () => {
    const [showButton, setShowButton] = useState<boolean>(false)

    const handleScroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }

    const backToTop = () => {
        document.documentElement.style.scrollBehavior = "smooth";
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            {showButton &&
                <img onClick={backToTop} className='fixed w-7 m-4 bottom-2 right-6 cursor-pointer drop-shadow-lg hover:-translate-y-1 hover:scale-110 duration-300' src="images/top-arrow.png" alt="top arrow" />}
        </>
    )
}

export default ScrollUpButton