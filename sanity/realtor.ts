import { defineType, defineField } from "sanity"

export const staffType = defineType({
    name: "staff",
    title: "Zaměstnanci",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Jméno a příjmení",
            type: "string",
        }),
        defineField({
            name: "position",
            title: "Pracovní pozice",
            type: "string",
        }),
        defineField({
            name: "image",
            title: "Fotka",
            type: "image",
        }),
        defineField({
            name: "url",
            title: "Odkaz na personální web",
            type: "url",
        }),
        defineField({
            name: "description",
            title: "Popis",
            type: "array",
            of: [
                {type: "block"}
            ]
        }),
    ]})