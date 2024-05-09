import Image from "next/image"
import { ReactNode } from "react"
import { Button } from "./button"

interface HeroflexProps {
    title: ReactNode
    children: ReactNode
    imagePath: string
    reverse?: boolean
    thrueReverse?: boolean
}

export default function Heroflex({ children, imagePath, title, reverse, thrueReverse }: HeroflexProps) {
    let reverseThru

    if (thrueReverse) {
        reverseThru = true
    } else if (typeof window !== 'undefined') {
        reverseThru = window.screen.width > 500 && reverse ? true : false
    }
    
    return (
        <div className={`max-w-5xl sm:grid sm:grid-cols-2 gap-6 sm:gap-12 sm:items-center flex flex-col items-start`}>
            {reverseThru && (
                <div className="">
                    <Image
                        src={`/images/hero/${imagePath}.png`}
                        alt="Imagem hero demonstrativa da Solutio Gás"
                        width={512}
                        height={512}
                        layout="responsive"
                    />
                </div>
            )}
            <div className="flex flex-col gap-4 sm:gap-6">
                <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
                {children}
                <Button />
            </div>
            {!reverseThru && (
                <div className="">
                    <Image
                        src={`/images/hero/${imagePath}.png`}
                        alt="Imagem hero demonstrativa da Solutio Gás"
                        width={512}
                        height={512}
                        layout="responsive"
                    />
                </div>
            )}
        </div>
    )
}