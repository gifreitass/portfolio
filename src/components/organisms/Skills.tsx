import { RefObject, forwardRef } from "react"
import SkillItem from "../molecules/SkillItem"

//deixar props mesmo se não usar?
const Skills = forwardRef((props, ref) => {
    return (
        <section ref={ref as RefObject<HTMLElement>} className="mx-12 sm:mx-20 md:mx-36 lg:mx-48 grid grid-cols-2 lg:grid-cols-4 gap-x-20 md:gap-x-36 md:gap-y-6">
            <SkillItem logo="images/html-5.png">HTML</SkillItem>
            <SkillItem logo="images/css-3.png">CSS</SkillItem>
            <SkillItem logo="images/javascript.png">JavaScript</SkillItem>
            <SkillItem logo="images/react.png">ReactJS</SkillItem>
            <SkillItem logo="images/next-js.svg">Next.js</SkillItem>
            <SkillItem logo="images/typescript.png">TypeScript</SkillItem>
            <SkillItem logo="images/tailwind.png">TailwindCSS</SkillItem>
        </section>
    )
})

export default Skills