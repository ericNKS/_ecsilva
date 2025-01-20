import PagesLayout from "../layout/pagesLayout";
import About from "./about";
import Me from "./me";
import Technologies from "./technologies";
import Technology from "./thecnology";

export default function Page() {
    return(
        <>
            <PagesLayout id="home">
                <section className="flex h-full flex-col relative">
                    <article className="flex flex-col lg:flex-row justify-evenly place-items-center">
                        <Me />
                        <About />
                    </article>
                    <article className="relative my-auto ">
                        <Technologies>
                            <Technology />
                        </Technologies>
                    </article>
                </section>
            </PagesLayout>
        </>
    );
}