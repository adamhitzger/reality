import { defineField, defineType } from "sanity";

export const mainType = defineType({
    name: "main",
    type: "document",
    title: "Sekce na hlavní stránce",
    fields: [
        defineField({
            name: "poradi",
            title: "Pořadí",
            type: "number",
        }),
        defineField({
            name: "textWithImage",
            title: "Sekce s obrázkem",
            type: "textWithImage",
        }),
    ]
})