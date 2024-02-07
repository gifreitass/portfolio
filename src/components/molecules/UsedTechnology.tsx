import InfoButton from "../atoms/InfoButton"

const UsedTechnology: React.FC<{ technologies: string[] }> = (props) => {
    return (
        <div className="flex flex-wrap gap-4 sm:gap-7 md:gap-4">
            {props.technologies.map((technology, key) => {
                return <InfoButton key={key}>{technology}</InfoButton>
            })}
        </div>
    )
}

export default UsedTechnology