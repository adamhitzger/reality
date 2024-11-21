import { type SchemaTypeDefinition } from 'sanity'
import { realityType } from './reality'
import { staffType } from './realtor'
import { textWithImage } from './textWithImage'
import { pageType } from './page'
import { heading } from './heading'
import { steps } from './steps'
import { button } from './button'
import { accordition } from './accordition'
import { bookType } from './bookType'
import { form } from './form'
import { mainType } from './main'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [realityType, staffType, pageType, bookType, textWithImage,  heading, steps, button, accordition, form, mainType],
}
