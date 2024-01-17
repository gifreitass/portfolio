import Text from "../atoms/Text"
import Title from "../atoms/Title"

const SkillItem: React.FC<{ children: string, logo: string }> = (props) => {
    return (
        <div className="mt-14 flex items-center gap-4">
            <img className="w-16 drop-shadow-lg" src={props.logo} alt="logo da tecnologia" />
            <Title size="text-2xl">{props.children}</Title>
        </div>
    )
}

export default SkillItem