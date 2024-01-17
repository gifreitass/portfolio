import SkillItem from "../molecules/SkillItem"

const Skills = () => {
    return (
        <section className="mt-24 grid grid-cols-4 gap-x-36 gap-y-7">
            <SkillItem logo="images/html-5.png">HTML</SkillItem>
            <SkillItem logo="images/css-3.png">CSS</SkillItem>
            <SkillItem logo="images/javascript.png">JavaScript</SkillItem>
            <SkillItem logo="images/react.png">ReactJS</SkillItem>
            <SkillItem logo="images/next-js.svg">Next.js</SkillItem>
            <SkillItem logo="images/typescript.png">TypeScript</SkillItem>
            <SkillItem logo="images/tailwind.png">TailwindCSS</SkillItem>
        </section>
    )
}

export default Skills