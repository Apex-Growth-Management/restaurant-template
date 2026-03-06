import { defineField, defineType } from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Guest Review',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Guest Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'text', title: 'Review Text', type: 'text', rows: 4 }),
    defineField({ name: 'stars', title: 'Stars', type: 'number', validation: (Rule) => Rule.min(1).max(5) }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})
