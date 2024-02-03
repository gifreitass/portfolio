import Text from "../atoms/Text"
import Title from "../atoms/Title"

const SkillItem: React.FC<{ children: string, logo: string }> = (props) => {
    return (
        <div className="mt-24 sm:mt-28 flex items-center gap-1.5 sm:gap-3">
            <img className="w-10 sm:w-16 drop-shadow-lg" src={props.logo} alt="logo da tecnologia" />
            <Title size="text-sm sm:text-xl">{props.children}</Title>
        </div>
    )
}

export default SkillItem