import { useEffect, useState } from "react"

export const useMousePosition = () => {
    const [position, setPosition] = useState<{ tgX: number; tgY: number }>({ tgX: 0, tgY: 0 })

    useEffect(() => {
        const setFromEvent = function (e: MouseEvent) {
            setPosition({ tgX: e.clientX, tgY: e.clientY })
        }
        window.addEventListener("mousemove", setFromEvent)
        return () => {
            window.removeEventListener("mousemove", setFromEvent)
        }
    }, [])

    return position
}