import Title from "../atoms/Title"
import Project from "../molecules/Project"

const ProjectsSection = () => {
    return (
        <section className="mt-24">
            <Title size='text-6xl'>Projetos</Title>
            <div className="grid grid-cols-2 gap-24">
                <Project image="images/watchflix.png" />
                <Project image="images/multistep.png" />
                
            </div>
        </section>
    )
}

export default ProjectsSection