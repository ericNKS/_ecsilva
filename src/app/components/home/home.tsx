import PagesLayout from "../layout/pagesLayout";
import About from "./about";
import Me from "./me";
import Technologies from "./technologies";
import Technology from "./thecnology";

export default function Page() {
    return(
        <>
            <PagesLayout id="home">
                <article className="h-full">
                    <div className="flex flex-col lg:flex-row justify-evenly place-items-center">
                            <Me />
                            <About />
                    </div>
                    <div className="hidden md:flex relative mt-auto ">
                        <Technologies>
                            <Technology />
                        </Technologies>
                    </div>
                </article>
            </PagesLayout>
        </>
    );
}