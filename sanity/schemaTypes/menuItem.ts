import { defineField, defineType } from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Dish Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'price', title: 'Price', type: 'string', description: 'e.g. $32' }),
    defineField({ name: 'tag', title: 'Tag', type: 'string', description: "e.g. Chef's Pick, Fan Favorite, Vegetarian" }),
    defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'category', title: 'Category', type: 'string', description: 'e.g. Entrees, Appetizers, Desserts' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})
