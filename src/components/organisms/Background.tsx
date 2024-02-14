const Background: React.FC = () => {
    return (
        <video className="absolute w-screen h-full object-cover" src="videos/sea.mp4" autoPlay={true} loop muted playsInline preload="auto" onContextMenu={() => false} />
    )
}

export default Background