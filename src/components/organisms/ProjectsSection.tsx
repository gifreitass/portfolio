import Title from "../atoms/Title"
import Project from "../molecules/Project"

const ProjectsSection = () => {
    return (
        <section className="mt-24">
            <Title size='text-6xl'>Projetos</Title>
            <div className="grid grid-cols-2 gap-24">
                <Project description="movie streaming project cover" link="https://movie-streaming-project.vercel.app/" image="images/watchflix.png" />
                <Project description="multi step form project cover" link="https://multi-step-form-lake.vercel.app/" image="images/multistep.png" />
                
            </div>
        </section>
    )
}

export default ProjectsSection