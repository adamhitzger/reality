import {defineField, defineType} from 'sanity'

export const textWithImage = defineType({
    name: "textWithImage",
    title: "Modifikovatelná sekce s obrázkem a textem",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            title: "Nadpis sekce",
            type: "string",
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "array",
            of: [
                {type: "block"}
            ]
        }),
        defineField({
            name: "image",
            title: "Fotka",
            type: "image",
        }),
        defineField({
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
        }),
        defineField({
            name: "position",
            title: "Rozložení sekce",
            type: "string",
            options: {
                list: ["Text vlevo", "Obrázek vlevo"],
                layout: "dropdown",
            }
        }),
        defineField({
            name: "image_pos",
            title: "Rozložení obrázku",
            type: "string",
            options: {
                list: ["1/2 sekce", "1/4 sekce", "1/6 sekce"],
                layout: "dropdown"
            }
        }),
        defineField({
            name: "heading_cap",
            title: "Velikost nadpisu",
            type: "string",
            options: {
                list: ["Uppercase", "Lowercase"],
                layout: "dropdown"
            }
        }),
    ]
})