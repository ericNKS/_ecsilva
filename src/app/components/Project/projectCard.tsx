import Image from "next/image";
import { ReactNode } from "react";

interface projectCardProps {
     imageLink: string,
     title: string,
     body: string,
     links: ReactNode,
     technology: ReactNode
}

export default function ProjectCard({imageLink, title, body, technology, links}: projectCardProps) {
    return(
        <div className="flex gap-14">
            <div className="relative flex flex-col my-6 bg-gray-900 shadow-sm border-slate-200 rounded-lg w-96">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <Image width={400} height={400} alt="Card" src={imageLink} style={{scale: .9, borderRadius: '1rem'}} />
                    
                </div>
                <div className="p-4">
                    <h6 className="mb-2 text-2xl font-semibold">
                        {title}
                    </h6>
                    <p className="">
                        {body}
                    </p>
                </div>
                <div className="px-4 pb-4 pt-0 mt-2 flex justify-around gap-4 overflow-x-auto">
                    {technology}
                </div>
                <div className="px-4 pb-4 pt-0 mt-2">
                    {links}
                </div>
            </div>  
        </div>
    );
}