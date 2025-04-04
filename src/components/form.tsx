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
    const [fieldsOk, setFieldsOk] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        let hlp = Object.values(data).slice(0, 4).map(item => item.length > 0 ? 'ok' : '')
        let cont = 0
        hlp.map(item => item.length > 0 && cont++)

        if (cont == 4) {
            setFieldsOk(true)
        } else {
            setFieldsOk(false)
        }


    }, [data])

    function handleChange(type: keyof typeof initialData, value: string) {
        let hlp = { ...data }
        if (type === 'phone') {
            hlp[type] = formatPhoneNumber(value)
        } else {
            hlp[type] = value
        }
        setData(hlp)
    }

    function formatPhoneNumber(phone: string): string {
        console.log('aq', phone.length)
        if (phone.length === 14) 
            return phone

        phone = phone.replace(/\D/g, '');

        phone = phone.replace(/^(\d{2})(\d)/, '($1) $2');
        phone = phone.replace(/(\d{5})(\d)/, '$1-$2');

        return phone;
    }

    // async function formSubmited(e: FormEvent) {
    async function formSubmited() {
        // e.preventDefault()
        let dataHlp = data

        setData(dataHlp)
        setLoading(true)

        const utm_campaign = new URLSearchParams(window.location.search).get('utm_campaign') || 'nao-traqueado'
        const utm_content = new URLSearchParams(window.location.search).get('utm_content') || 'nao-traqueado'
        const utm_medium = new URLSearchParams(window.location.search).get('utm_medium') || 'nao-traqueado'
        const utm_source = new URLSearchParams(window.location.search).get('utm_source') || 'nao-traqueado'
        const utm_term = new URLSearchParams(window.location.search).get('utm_term') || 'nao-traqueado'

        let newCnpj = data.cnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '')

        const formatedData = {
            "codigoApi": "4C0A71636E",
            "origemOportunidade": "Integração",
            "lead": {
                "nomeLead": data.name,
                "telefoneLead": data.phone,
                "emailLead": data.email,
                "cnpjLead": newCnpj,
                "origemLead": "Página de captura",
            },
            "tags": [`${utm_campaign}`, `${utm_source}`, `${utm_medium}`, `${utm_content}`, `${utm_term}`],
            "contato": {
                "nomeContato": data.name,
                "telefoneContato": data.phone,
                "emailContato": data.email,
                "codigoLead": null
            },
            "followups": [
                {
                    "textoFollowup": "Essa oportunidade foi criada a partir da API de integração da LeadFinder",
                    "dataFollwup": null,
                    "codigoOportunidade": null,
                    "notificar": true
                },
                {
                    "textoFollowup": "É possivel inserir followups com os historicos da oportunidade via API",
                    "dataFollwup": null,
                    "codigoOportunidade": null,
                    "notificar": true
                }
            ],
            "followup": null
        }

        // await fetch("https://api.leadfinder.com.br/integracao/v2/inserirOportunidade", {
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //         "Authorization": "F32300EDBAE823485E8132E084A0F0626AE1F3ED25B026C3980A7702C6EAFF30"
        //     },
        //     body: JSON.stringify(formatedData)
        // }).then(async res => {
        //     setLoading(false)
        //     setMessage('Muito bem! Nossa equipe entrará em contato com você pelo WhatsApp!')
        // }).catch(e => console.log(e))
    }

    return (
        <>
            {/* <button className="uppercase py-3 px-12 bg-[#01b013] hover:bg-[#01b013de] transition text-white font-bold rounded-full text-sm" onClick={() => setIsFormOpen(!isFormOpen)}>Quero levar minha revenda ao próximo nível</button> */}
            <div className={`fixed top-0 left-0 h-full w-full flex items-center justify-center ${isFormOpen ? 'z-50' : 'opacity-0 -z-50'}`}>
                <div onClick={() => setIsFormOpen(!isFormOpen)} className="absolute h-full w-full bg-black/60"></div>
                <form
                    id="data_form"
                    className="relative rounded-md w-full sm:max-w-xl z-50 px-6 sm:mx-0 mx-2 bg-white py-6"
                    // onSubmit={(e) => formSubmited(e)}
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
                                <input onChange={(e) => handleChange('phone', e.target.value)} value={data.phone} className="text-zinc-600 text-sm outline-none rounded-md py-2 px-3 bg-zinc-100" type="tel" id="tel" name="phone" maxLength={14} placeholder="WhatsApp: (00) 00000-0000" required />
                            </div>
                            <div className="flex flex-col gap-1">
                                <input onChange={(e) => handleChange('cnpj', e.target.value)} value={data.cnpj} className="text-zinc-600 text-sm outline-none rounded-md py-2 px-3 bg-zinc-100" type="cnpj" name="cnpj" minLength={18} maxLength={18} placeholder="CNPJ" required />
                                <p className="text-xs text-zinc-500 translate-x-3">Para CNPJ, siga o formato: 00.000.000/0001-00</p>
                            </div>
                            {fieldsOk ? (
                                <button onClick={() => formSubmited()} id={'btn-ok'} className="w-full text-sm sm:text-base text-center flex items-center justify-center gap-2 px-6 py-2 font-semibold text-white bg-[#01b013] hover:bg-[#01b013de] transition rounded-md" type="submit">
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
                                    )}
                                </button>
                            ) : (
                                <button className="w-full text-sm sm:text-base text-center flex items-center justify-center gap-2 px-6 py-2 font-semibold text-white bg-[#01b013] hover:bg-[#01b013de] transition rounded-md" type="submit">
                                    <span>Preencha os campos acima</span>
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="h-[356px] sm:h-[576px] flex flex-col justify-center text-center gap-2">
                            <h4 className="text-2xl ">Dados enviados com sucesso!</h4>
                            <p className="text-center text-zinc-700 text-xl font-medium">{message}</p>
                        </div>
                    )}
                </form >
            </div >
        </>
    )
}

