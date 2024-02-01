import Text from "../atoms/Text"
import Title from "../atoms/Title"

const SkillItem: React.FC<{ children: string, logo: string }> = (props) => {
    return (
        <div className="mt-24 md:mt-28 flex items-center gap-3">
            <img className="w-10 md:w-16 drop-shadow-lg" src={props.logo} alt="logo da tecnologia" />
            <Title size="text-xl">{props.children}</Title>
        </div>
    )
}

export default SkillItem