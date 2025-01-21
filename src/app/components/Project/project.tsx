import Image from "next/image";
import PagesLayout from "../layout/pagesLayout";
import ProjectButtons from "./projectButtons";
import ProjectCard from "./projectCard";

export default function Project() {
    return (
        <>
            <PagesLayout id="projects">
                <article className="min-h-screen mt-14 relative">
                    <div className="gap-20 h-full flex flex-wrap justify-center place-items-center mx-14">
                        <ProjectCard 
                            title="MailGO"
                            body="Esse projeto é um serviço de envio de Email. Nele voce vai conseguir fazer envio de campanhas de email a partir de um servidor SMTP como do Gmail."
                            imageLink="/projects/mailGo.jpg"
                            technology={
                                <>
                                    <Image alt="Golang" src={'/tech-logo/Go.png'} width={50} height={50} />
                                    <Image alt="Git" src={'/tech-logo/git.png'}  width={50} height={50} />
                                    <Image alt="RabbitMQ" src={'/tech-logo/Rabbitmq.png'} width={50} height={50} />
                                </>
                            }
                            links={
                                <ProjectButtons href="https://github.com/ericNKS/MailGo" title="GitHub" />
                            }
                        />

                        <ProjectCard 
                            title="MyEstoque"
                            body="Gerenciador de estoque pensando em empresas do ramo de varejo. Desenvolvido um sistema escalavel e open-source com intuito de facilitar a administração de estoque em pequenas empresas."
                            imageLink="/projects/MyEstoque.jpg"
                            technology={
                                <>
                                    <Image alt="Golang" src={'/tech-logo/Go.png'} width={50} height={50} />
                                    <Image alt="Git" src={'/tech-logo/git.png'}  width={50} height={50} />
                                    <Image alt="RabbitMQ" src={'/tech-logo/Rabbitmq.png'} width={50} height={50} />
                                    <Image alt="PostgresSQL" src={'/tech-logo/Postgresql.png'} width={50} height={50} />
                                    <Image alt="Redis" src={'/tech-logo/Redis.png'} width={50} height={50} />
                                </>
                            }
                            links={
                                <ProjectButtons href="https://github.com/ericNKS/estoque" title="GitHub" />
                            }
                        />

                        <ProjectCard 
                            title="Just Talk"
                            body="Essa é uma rede social parecida com o Twitter, criada para que todos os usuários possam ter sua liberdade de expressão. Além de ter uma interface semelhante ao TikTok para aumentar a imerção dentro da plataforma."
                            imageLink="/projects/justTalk.jpg"
                            technology={
                                <>
                                    <Image alt="Javascript" src={'/tech-logo/Javascript.png'} width={50} height={50} />
                                    <Image alt="Git" src={'/tech-logo/git.png'}  width={50} height={50} />
                                    <Image alt="CSS3" src={'/tech-logo/CSS3.png'} width={50} height={50} />
                                    <Image alt="MySQL" src={'/tech-logo/mysql.svg'} width={50} height={50} />
                                </>
                            }
                            links={
                                <ProjectButtons href="https://github.com/ericNKS/Just-Talk" title="GitHub" />
                            }
                        />
                    </div>
                </article>
            </PagesLayout>
        </>
    );
}