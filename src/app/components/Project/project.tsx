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
                            title="bla"
                            body="bla"
                            imageLink="/projects/mailGo.jpg"
                            links={
                                <ProjectButtons href="https://github.com/ericNKS/managerVarejo" title="Read" />
                            }
                            technology={
                                <>
                                    <Image alt="teste" src={'/tech-logo/Laravel.png'}  width={50} height={50} />
                                    <Image alt="teste" src={'/tech-logo/Go.png'} width={50} height={50} />
                                    <Image alt="teste" src={'/tech-logo/php.png'} width={50} height={50} />
                                </>
                            } />
                    </div>
                </article>
            </PagesLayout>
        </>
    );
}