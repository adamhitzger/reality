"use client";

import { PortableText } from "next-sanity";
import { Button } from "./ui/button";
import { useState } from "react";
import { newsletter, } from "@/lib/actions";
import { components } from "@/sanity/lib/components";
export default function FormComponent({ heading, text, pageName }: { heading?: string, text: any, pageName: string }) {
    const [form, setForm] = useState({
        jmeno: "",
        prijmeni: "",
        email: "",
        tel: "",
        msg: "",
        rights: true,
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    //handle checkboxů
    const handleChangeCheckbox = () => {
        setForm({ ...form, rights: !form.rights });
    }
    const sendNewsletter = async (formData: FormData) => {
        await newsletter(formData, pageName);
        setForm({
            jmeno: "",
            prijmeni: "",
            email: "",
            tel: "",
            msg: "",
            rights: true,
        })
    }
    return (
        <section className="flex flex-wrap md:flex-nowrap md:min-h-screen py-10">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-black text-xl px-5 font-light text-center space-y-5">
                <h1 className="text-4xl text-center">{heading}</h1>
                <PortableText value={text} components={components} />
            </div>
            <div className="w-full md:w-1/2 flex flex-col px-5 md:px-0">
                <form className="m-auto w-full md:w-3/4" action={sendNewsletter}>
                    <label htmlFor="jmeno" className="">Jméno</label>
                    <input type="text" name="jmeno" id="jmeno" required className="border w-full border-gray-400 p-3 my-3" value={form.jmeno} placeholder="Vaše jméno" onChange={handleChange} />
                    <label htmlFor="prijmeni">Přijmení</label>
                    <input type="text" name="prijmeni" id="prijmeni" required className="border w-full border-gray-400 p-3 my-3" value={form.prijmeni} placeholder="Vaše příjmení" onChange={handleChange} /><br />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required className="border w-full border-gray-400 p-3 my-3" value={form.email} placeholder="Váš email" onChange={handleChange} /><br />
                    <label htmlFor="tel">Telefonní číslo</label>
                    <input type="tel" name="tel" id="tel" required className="border w-full border-gray-400 p-3 my-3" value={form.tel} placeholder="Vaše telefonní číslo" onChange={handleChange} /><br />
                    <label htmlFor="msg">Zpráva</label><br />
                    <textarea name='msg' className="border w-full border-gray-400 p-3 my-3" id='msg' value={form.msg} onChange={handleChange} required></textarea><br />

                    <input type="checkbox" id="rights" name="rights" value="ano" className="my-3" onChange={handleChangeCheckbox} checked={form.rights} />
                    <label htmlFor="rights"> Souhlasím s Podmínkami a Zásadami ochrany osobních údajů</label><br />
                    <Button className="w-full my-3">Odeslat</Button>
                </form>
            </div>
        </section>
    )
}

