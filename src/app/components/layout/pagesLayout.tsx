import { ReactNode } from "react";

interface pagesLayoutProps {
    children: ReactNode,
    id: string
}

export default function PagesLayout({ children, id }: pagesLayoutProps) {
    return(
        <section className="relative" id={id}>
            {children}
        </section>
    )
}