import Contact from "./components/contact";
import Page from "./components/home/home";
import Navbar from "./components/navigation/navbar";
import Project from "./components/Project/project";

export default function Home() {
    return (
        <>
            <Navbar />

            <Page />
            <Project />
            <Contact />
        </>
    );
}
