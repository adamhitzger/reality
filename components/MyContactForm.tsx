"use client";
import React, { useState } from 'react'
import { Button } from './ui/button';
import { newsletter } from '@/lib/actions';


export default function MyContactForm() {
    const [form, setForm] = useState({
        jmeno: "",
        prijmeni: "",
        email: "",
        tel: "",
        msg: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    const sendNewsletter = async (formData: FormData) => {
        await newsletter(formData, "Kontakt");
        setForm({
            jmeno: "",
            email: "",
            tel: "",
            prijmeni: "",
            msg: "",
        })
    }
    return (
        <form className="m-auto w-full md:w-3/4" action={sendNewsletter}>
            <label htmlFor="jmeno" className="">Jméno</label>
            <input type="text" name="jmeno" id="jmeno" value={form.jmeno} required className="border w-full border-gray-400 p-3 my-3" placeholder="Vaše jméno" onChange={handleChange} />
            <label htmlFor="prijmeni">Přijmení</label>
            <input type="text" name="prijmeni" id="prijmeni" value={form.prijmeni} required className="border w-full border-gray-400 p-3 my-3" placeholder="Vaše příjmení" onChange={handleChange} /><br />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required className="border w-full border-gray-400 p-3 my-3" value={form.email} placeholder="Váš email" onChange={handleChange} /><br />
            <label htmlFor="tel">Telefonní číslo</label>
            <input type="tel" name="tel" id="tel" required className="border w-full border-gray-400 p-3 my-3" value={form.tel} placeholder="Vaše telefonní číslo" onChange={handleChange} /><br />

            <label htmlFor="msg">Zpráva</label>
            <textarea name="msg" id="msg" required className="border w-full border-gray-400 p-3 my-3" value={form.msg} placeholder="Vaše zpráva..." onChange={handleChange} /><br />
            <Button className="w-full my-3">Odeslat</Button>
        </form>
    )
}

