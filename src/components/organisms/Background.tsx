import useMobile from "@/hooks/useMobile";

const Background: React.FC = () => {
    const isMobile = useMobile()

    const videoSource = isMobile ? "videos/seaMobile.mp4" : "videos/sea.mp4";
    return (
        <video className="absolute w-screen h-full object-cover" src={videoSource} autoPlay loop muted />
    )
}

export default Background