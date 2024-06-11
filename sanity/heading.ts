import {defineField, defineType} from 'sanity'

export const heading = defineType({
    name: "heading",
    title: "Nadpis podsekcí",
    type: "object",
    fields: [
        defineField({
            name: "text",
            title: "Nadpis",
            type: "string",
        }),
    ]})