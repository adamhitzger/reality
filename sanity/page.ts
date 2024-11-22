import {defineField, defineType, defineArrayMember } from "sanity"

export const pageType = defineType({
    name: "page",
    type: "document",
    title: "Podstránky",
    fields: [
        defineField({
            name: "name",
            type: "string",
            title: "Název stránka",
        }),
        defineField({
            name: "overview",
            type: "string",
            title: "Popisek pro Google(důležité!)",
        }),
        defineField({
            name: "color",
            type: "string",
            title: "Barva nadpisu celé stránky",
            options: {
                list: ["Černá", "Bílá"],
                layout: "dropdown",
            }
        }),
        defineField({
            name: "slug",
            title: "Url adresa",
            type: "slug",
            options: {
                source: "name"
            },
        }),
        defineField({
            name: "heading",
            title: "Nadpis stránky",
            type: "string",
        }),
        defineField({
            title: "Titulní obrázek",
            name: "image",
            type: "image",
        }),
        defineField({
            name: "sections",
            title: "Sekce stránky",
            type: "array",
            of: [
                defineArrayMember({
                    name: "textWithImage",
                    type: "textWithImage",
                }),
                defineArrayMember({
                    name: "heading",
                    type: "heading",
                }),
                defineArrayMember({
                    name: "steps",
                    type: "steps",
                }),
                defineArrayMember({
                    name: "button",
                    type: "button",
                }),
                defineArrayMember({
                    name: "accorditions",
                    type: "accorditions",
                }),
                defineArrayMember({
                    name: "form",
                    type: "form",
                }),
            ]
        }),
    ]
})