import Image from "next/image";

export default function Me() {
    return(
        <div className=" flex my-12 lg:mb-0 flex-col justify-center place-items-center">
            <div className="mb-12">
                <Image src={'/me2.jpg'} alt="Minha foto de apresentação" height={0} width={500} className="rounded-md" />
            </div>
        </div>
    );
}