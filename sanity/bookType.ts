import { defineField, defineType } from "sanity";

export const bookType = defineType({
    type: "document",
    name: "book",
    title: "Stránka knížky",
    fields: [
        defineField({
            name: "front",
            title:"Přední strana",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "back",
            title: "Zadní strana",
            type: "image",
            options: {
                hotspot: true
            }
        })
    ]

})