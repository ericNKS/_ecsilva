export default function Footer() {
    return(
        <>
            <footer className="flex h-44 justify-center place-items-center bg-gray-800 mt-20">
                <div>
                    <div>
                        <h4 className="text-lg font-semibold">
                            Informações Importantes
                        </h4>
                    </div>
                    <div className="flex justify-center py-4">
                        <ul className="text-zinc-400 text-md font-bold text-center">
                            <li className="hover:text-teal-800 hover:pointer">
                                <a href="https://www.linkedin.com/in/eric-ssantos/" target="linkedin" rel="noopener noreferrer">
                                    Linkedin
                                </a>
                            </li>
                            <li className="hover:text-teal-800">
                                <a href="https://github.com/ericNKS" target="linkedin" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>
                            <li className="hover:text-teal-800">
                                <a href="mailto:ec.silva2002@gmail.com">ec.silva2002@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}