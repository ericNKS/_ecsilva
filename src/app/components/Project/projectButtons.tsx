interface projectButtonsProps {
    title: string,
    href: string
}

export default function ProjectButtons(props: projectButtonsProps) {
    return(
        <a target={props.title} href={props.href} className="rounded-md bg-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
            {props.title}
        </a>
    );
}