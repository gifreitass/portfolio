import { useEffect, useState } from "react";

const Background: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const videoSource = isMobile ? "videos/seaMobile.mp4" : "videos/sea.mp4";
    return (
        <video className="absolute w-screen h-full object-cover" src={videoSource} autoPlay loop muted />
    )
}

export default Background