import {defineField, defineType} from 'sanity'

export const accordition = defineType({
    name: "accorditions",
    title: "Dropdown nabídka",
    type: "object",
    fields: [
        defineField({
            name: "accorditions",
            title: "Položky",
            type: "array",
            of: [
                {type: "object",
                    fields:  [
                        defineField({
                            name: "heading",
                            title: "Nadpis položky",
                            type: "string",
                        }),
                        defineField({
                            name: "text",
                            title: "Text položky",
                            type: "string",
                        }),
                    ]
                }
            ]
        }),
    ]
})