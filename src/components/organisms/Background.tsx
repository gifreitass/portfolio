"use client"
import { useMousePosition } from "@/hooks/useMousePosition"

const Background: React.FC = () => {
    const position = useMousePosition()
    console.log(position)
    //passar o x e y do mouse como props para o interactive,

    return (
        <div className="gradient-bg">
            <div className="gradients-container">
                <div className="g1"></div>
                <div className="g2"></div>
                <div className="g3"></div>
                <div className="g4"></div>
                <div className="g5"></div>
                <div className="interactive"></div>
            </div>
        </div>
    )
}

export default Background