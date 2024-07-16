'use client'

import { useRouter } from "next/navigation"
import { FormEvent, SetStateAction, useEffect, useState } from "react"

interface FormProps {
    isFormOpen: boolean
    setIsFormOpen: React.Dispatch<SetStateAction<boolean>>
    utm_term: string
    utm_medium: string
    utm_content: string
    utm_campaign: string
    utm_source: string
}

interface dataProps {
    name: string
    email: string
    phone: string
    utm_term: string
    utm_medium: string
    utm_content: string
    utm_campaign: string
    utm_source: string
}
let initialData = {
    name: '',
    email: '',
    phone: '',
    cnpj: '',
    utm_term: '',
    utm_medium: '',
    utm_content: '',
    utm_campaign: '',
    utm_source: ''
}

export function Form({ utm_campaign, utm_content, utm_medium, utm_source, utm_term, isFormOpen, setIsFormOpen }: FormProps) {
    const [data, setData] = useState(initialData)
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const router = useRouter()

    function handleChange(type: keyof typeof initialData, value: string) {
        let hlp = { ...data }
        if (type === 'phone') {
            hlp[type] = formatPhoneNumber(value)
        } else {
            hlp[type] = value
        }
        setData(hlp)
    }

    function formatPhoneNumber(value: string) {
        if (value.length > data.phone.length) {
            if (value.length <= 1) {
                value = `(${value}`
            } else if (value.length <= 3) {
                value = `${value}) 9 `
            } else if (value.length === 11) {
                value = `${value}-`
            }
        }

        return value
    }

    async function formSubmited(e: FormEvent) {
        e.preventDefault()
        let dataHlp = data

        setData(dataHlp)
        setLoading(true)

        dataHlp['utm_campaign'] = window.location.href.split('?')[1]?.split("&")[0]?.split("=")[1] || 'AQUI'
        dataHlp['utm_content'] = window.location.href.split('?')[1]?.split("&")[1]?.split("=")[1] || 'AQUI'
        dataHlp['utm_medium'] = window.location.href.split('?')[1]?.split("&")[1]?.split("=")[1] || 'AQUI'
        dataHlp['utm_source'] = window.location.href.split('?')[1]?.split("&")[2]?.split("=")[1] || 'AQUI'
        dataHlp['utm_term'] = window.location.href.split('?')[1]?.split("&")[3]?.split("=")[1] || 'AQUI'

        await fetch("https://webhook.sellflux.com/webhook/v2/form/lead/a6e1e573af474bb4a6f84740f4344f3a?redirect_url=google.com", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(async res => {
            setLoading(false)
            setMessage('Muito bem! Nossa equipe entrará em contato com você pelo WhatsApp!')
        }).catch(e => console.log(e))
    }

    return (
        <>
            <button className="uppercase py-3 px-12 bg-[#01b013] hover:bg-[#01b013de] transition text-white font-bold rounded-full text-sm" onClick={() => setIsFormOpen(!isFormOpen)}>Quero levar minha revenda ao próximo nível</button>
            <div className={`fixed top-0 left-0 h-full w-full flex items-center justify-center ${isFormOpen ? 'z-50' : 'opacity-0 -z-50'}`}>
                <div onClick={() => setIsFormOpen(!isFormOpen)} className="absolute h-full w-full bg-black/60"></div>
                <form
                    className="relative rounded-md w-full sm:max-w-xl z-50 px-6 sm:mx-0 mx-2 bg-white py-6"
                    onSubmit={(e) => formSubmited(e)}
                >
                    {!message.length ? (
                        <div className="flex flex-col gap-2">
                            <div className="pb-2">
                                <h2 className="text-2xl font-bold text-center">Quase lá!</h2>
                                <p className="text-zinc-700 text-lg font-medium text-center">Preencha os campos abaixo para agendar a demonstração.</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <input onChange={(e) => handleChange('name', e.target.value)} value={data.name} className="text-zinc-600 text-sm outline-none rounded-md py-2 px-3 bg-zinc-100" type="text" id="name" name="name" placeholder="Insira seu nome" min={2} required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <input onChange={(e) => handleChange('email', e.target.value)} value={data.email} className="text-zinc-600 text-sm outline-none rounded-md py-2 px-3 bg-zinc-100" type="text" id="email" name="email" placeholder="Insira seu melhor e-mail" required autoComplete="email" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <input onChange={(e) => handleChange('phone', e.target.value)} value={data.phone} className="text-zinc-600 text-sm outline-none rounded-md py-2 px-3 bg-zinc-100" type="tel" id="tel" name="phone" maxLength={16} placeholder="WhatsApp: (00) 00000-0000" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <input onChange={(e) => handleChange('cnpj', e.target.value)} value={data.cnpj} className="text-zinc-600 text-sm outline-none rounded-md py-2 px-3 bg-zinc-100" type="cnpj" name="cnpj" minLength={18} maxLength={18} placeholder="CNPJ" required />
                                <p className="text-xs text-zinc-500 translate-x-3">Para CNPJ, siga o formato: 00.000.000/0001-00</p>
                            </div>
                            <button className="w-full text-sm sm:text-base text-center flex items-center justify-center gap-2 px-6 py-2 font-semibold text-white bg-[#01b013] hover:bg-[#01b013de] transition rounded-md" type="submit">
                                {!loading ? (
                                    <span>Agendar demonstração</span>
                                ) : (
                                    <>
                                        <div className="flex flex-row gap-1 py-1">
                                            <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce"></div>
                                            <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce [animation-delay:-.3s]"></div>
                                            <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce [animation-delay:-.5s]"></div>
                                        </div>
                                    </>
                                    // <div className="w-5 h-5 border-2 text-blue-400 animate-spin flex items-center justify-center border-t-[#1b2d51] rounded-full"></div>
                                )}
                            </button>
                            <div>
                                <input type="hidden" id="utm_term" value={utm_term || 'AQUI'} name="utm_term" placeholder="utm_term" />
                                <input type="hidden" id="utm_medium" value={utm_medium || 'AQUI'} name="utm_medium" placeholder="utm_medium" />
                                <input type="hidden" id="utm_content" value={utm_content || 'AQUI'} name="utm_content" placeholder="utm_content" />
                                <input type="hidden" id="utm_campaign" value={utm_campaign || 'AQUI'} name="utm_campaign" placeholder="utm_campaign" />
                                <input type="hidden" id="utm_source" value={utm_source || 'AQUI'} name="utm_source" placeholder="utm_source" />
                            </div>
                        </div>
                    ) : (
                        <div className="h-[356px] sm:h-[576px] flex flex-col justify-center text-center gap-2">
                            <h4 className="text-2xl ">Dados enviados com sucesso!</h4>
                            <p className="text-center text-zinc-700 text-xl font-medium">{message}</p>
                        </div>
                    )}

                </form>
            </div>
        </>
    )
}

     