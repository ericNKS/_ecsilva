import { ReactNode } from "react";

interface technologiesProps {
    children: ReactNode
}
export default function Technologies({children}: technologiesProps) {
    return(
        <article className="flex w-dvw absolute bottom-24">
            {children}
        </article>
    )
}