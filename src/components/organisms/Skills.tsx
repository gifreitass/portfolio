import SkillItem from "../molecules/SkillItem"

const Skills = () => {
    return (
        <section className="mt-10 grid grid-cols-3 gap-x-36">
            <SkillItem>HTML</SkillItem>
            <SkillItem>CSS</SkillItem>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>ReactJS</SkillItem>
            <SkillItem>Next.js</SkillItem>
            <SkillItem>TypeScript</SkillItem>
            <SkillItem>Tailwind CSS</SkillItem>
        </section>
    )
}

export default Skills