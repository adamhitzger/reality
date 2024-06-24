import {defineField, defineType} from 'sanity'

export const form = defineType({
    type: "object",
    name: "form",
    title: "Kontaktní formulář",
    fields: [
        defineField({
            name: "heading",
            title: "Nadpis",
            type: "string",
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "string",
        })
    ]

})