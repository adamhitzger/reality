import {defineField, defineType} from 'sanity'

export const button = defineType({
    name: "button",
    title: "Tlačítko",
    type: "object",
    fields: [
        defineField({
            name: "text",
            title: "Text na tlačítku",
            type: "string",
        }),
        defineField({
            name: "url",
            title: "Url adresa",
            type: "url",
        }),
    ]
    })