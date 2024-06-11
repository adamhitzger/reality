import {defineField, defineType} from 'sanity'

export const steps = defineType({
    name: "steps",
    title: "Kroky",
    type: "object",
    fields: [
        defineField({
            name: "steps",
            title: "Kroky",
            type: "array",
            of:[
                {type: "object",
                fields: [
                    defineField({
                        name: "icon",
                        title: "Ikonka",
                        type: "image",
                    }),
                    defineField({
                        name: "number",
                        title: "Číslo kroku",
                        type: "number",
                    }),
                    defineField({
                        name: "desc",
                        title: "Popis kroku",
                        type: "string",
                    })
                ]
           
                }
            ]
             }),
    ]})