import { ReactNode } from "react";

interface technologiesProps {
    children: ReactNode
}
export default function Technologies({children}: technologiesProps) {
    return(
        <div className="flex w-dvw relative bottom-0">
            {children}
        </div>
    )
}