import Text from "../atoms/Text"
import Title from "../atoms/Title"

const SkillItem: React.FC<{ children: string }> = (props) => {
    return (
        <div className="mt-12">
            <Title size="text-4xl">{props.children}</Title>
            <Text>1 ano de experiência</Text>
        </div>
    )
}

export default SkillItem