import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'
import { menuItem } from './menuItem'
import { review } from './review'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, menuItem, review],
}
