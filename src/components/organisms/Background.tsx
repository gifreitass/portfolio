const Background: React.FC = () => {
    return (
        <video className="absolute w-screen h-full object-cover" data-wf-ignore src="videos/sea.mp4" autoPlay loop muted playsInline preload="auto" onContextMenu={() => false} />
    )
}

export default Background