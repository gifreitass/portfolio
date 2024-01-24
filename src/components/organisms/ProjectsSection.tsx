import DivisionBar from "../atoms/DivisionBar"
import Title from "../atoms/Title"
import LeftProject from "../molecules/LeftProject"
import RightProject from "../molecules/RightProject"

const ProjectsSection = () => {
    return (
        <section className="mt-24 mx-48">
            <div className="flex flex-col gap-24">
                <RightProject text="Projeto para exibição de filmes utilizando a API DronaHQ" descriptionImage="movie streaming project cover" link="https://movie-streaming-project.vercel.app/" image="images/watchflix.png" />
                <LeftProject text="Criação de uma página de formulário com diversos passos e opções de personalização" descriptionImage="multi step form project cover" link="https://multi-step-form-lake.vercel.app/" image="images/multistep.png" />
            </div>
        </section>
    )
}

export default ProjectsSection