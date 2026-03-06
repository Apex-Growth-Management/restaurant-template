import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'restaurantName', title: 'Restaurant Name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', description: 'e.g. Raleigh, NC — Est. 2019' }),
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 2 }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'hoursWeekday', title: 'Weekday Hours', type: 'string', description: 'e.g. Mon–Thu: 5pm – 10pm' }),
    defineField({ name: 'hoursWeekend', title: 'Weekend Hours', type: 'string', description: 'e.g. Fri–Sat: 5pm – 11pm' }),
    defineField({ name: 'hoursSunday', title: 'Sunday Hours', type: 'string', description: 'e.g. Sun: 4pm – 9pm' }),
  ],
})
