import useMobile from "@/hooks/useMobile";

const Background: React.FC = () => {
    const isMobile = useMobile()

    const videoSource = isMobile ? "videos/seaMobile.mp4" : "videos/sea.mp4";
    
    return (
        <video className="absolute w-screen h-full object-cover" src="videos/sea.mp4" autoPlay loop muted playsInline preload="auto" onContextMenu={() => false} />
    )
}

export default Background