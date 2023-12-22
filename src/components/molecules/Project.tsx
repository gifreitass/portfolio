import Text from "../atoms/Text"
import Title from "../atoms/Title"

const Project: React.FC<{ image: string }> = (props) => {
    return (
        <div>
            <img className="mt-12 h-4/5" src={props.image} />
            <Title size="text-lg">MOVIE STREAMING PROJECT</Title>
            <Text>TYPESCRIPT</Text>
        </div>
    )
}

export default Project