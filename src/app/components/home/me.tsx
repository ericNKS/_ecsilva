import Image from "next/image";

export default function Me() {
    return(
        <div className=" flex my-12 lg:mb-0 flex-col justify-center place-items-center">
            <div className="mb-12">
            <Image
                src="/me2.jpg"
                alt="Minha foto de apresentação"
                sizes="(max-width: 600px) 95vw, (max-width: 1200px) 30vw, 30vw"
                width={350}
                height={0}
                className="rounded-md object-cover w-full"
            />
            </div>
        </div>
    );
}