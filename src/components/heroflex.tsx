import Image from "next/image"
import { ReactNode, SetStateAction } from "react"
import { Button } from "./button"

interface HeroflexProps {
    title: ReactNode
    children: ReactNode
    imagePath: string
    reverse?: boolean
    thrueReverse?: boolean
    isFormOpen: boolean
    setIsFormOpen: React.Dispatch<SetStateAction<boolean>>
}

export default function Heroflex({ children, imagePath, title, reverse, thrueReverse, isFormOpen, setIsFormOpen }: HeroflexProps) {
    return (
        <div className={`w-full max-w-5xl gap-6 sm:gap-12 sm:items-center flex items-start ${thrueReverse ? 'sm:flex-row flex-col-reverse' : reverse ? 'sm:flex-row-reverse flex-col' : 'sm:flex-row flex-col'}`}>
            <div className="w-full sm:w-1/2 flex flex-col gap-4 sm:gap-6">
                <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
                {children}
                <Button 
                    isFormOpen={isFormOpen}
                    setIsFormOpen={setIsFormOpen}
                />
            </div>
            <div className="w-full sm:w-1/2">
                <Image
                    src={`/images/hero/${imagePath}.png`}
                    alt="Imagem hero demonstrativa da Solutio Gás"
                    width={512}
                    height={512}
                    layout="responsive"
                />
            </div>
        </div>
    )
}