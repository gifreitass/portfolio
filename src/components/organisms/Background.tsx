const Background: React.FC = () => {
    return (
        <video className="absolute w-screen h-full object-cover" autoPlay loop muted playsInline preload="auto" onContextMenu={() => false}>
            <source src="videos/sea.mp4" type="video/mp4" />
        </video>
    )
}

export default Background