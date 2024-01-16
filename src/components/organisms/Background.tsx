"use client"
import { useMousePosition } from "@/hooks/useMousePosition"
import { useEffect } from "react"

const Background: React.FC = () => {
    const position = useMousePosition()
    let curX: number = 0
    let curY: number = 0

    useEffect(() => {
        curX += (position.tgX - curX) / 20
        curY += (position.tgY - curY) / 20
    }, [position])

    console.log({position})
    //transform usando tailwind
    //translate(${Math.round(curX)}px, ${Math.round(curY)}px)
    //passar o x e y do mouse como props para o interactive

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