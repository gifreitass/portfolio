import DivisionBar from "../atoms/DivisionBar"
import Title from "../atoms/Title"
import LeftProject from "../molecules/LeftProject"
import RightProject from "../molecules/RightProject"

const ProjectsSection = () => {
    return (
        <section className="mt-24 mx-48">
            <div className="flex flex-col gap-24">
                <RightProject title="MOVIE STREAMING PROJECT"
                    text="Site desenvolvido para exibição de filmes utilizando a API do Movie Data Base. O projeto possui página inicial, página de top filmes, filmes recentes e favoritos."
                    descriptionImage="movie streaming project"
                    link="https://movie-streaming-project.vercel.app/"
                    image="images/watchflix.png"
                    technologies={['REACTJS', 'TYPESCRIPT', 'STYLED COMPONENTS', 'REDUX', 'FORMIK']} />
                <LeftProject title="MULTI STEP FORM"
                    text="Criação de uma página de formulário com diversos passos e opções de personalização. Projeto baseado em um modelo do site Frontend Mentor."
                    descriptionImage="multi step form project"
                    link="https://multi-step-form-lake.vercel.app/"
                    image="images/multistep.png"
                    technologies={['REACTJS', 'TYPESCRIPT', 'STYLED COMPONENTS', 'REDUX', 'FORMIK']} />
                <RightProject title="WEATHER APP"
                    text="Aplicação voltada para mobile que mostra a previsão geral do tempo em um local para os próximos 5 dias, e a previsão detalhada de cada um desses dias. Para a exibição das previsões foi feita uma integração com as APIs disponibilizadas pelo OpenWeather."
                    descriptionImage="weather app projetct"
                    link="https://weather-project-app-eight.vercel.app/"
                    image="images/weather.png"
                    technologies={['REACTJS', 'TYPESCRIPT', 'STYLED COMPONENTS', 'REDUX']} />
                <div className="m-auto text-lg animate-pulse">NEW PROJECTS COMING SOON...</div>
            </div>
        </section>
    )
}

export default ProjectsSection