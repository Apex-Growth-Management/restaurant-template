import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.documentTypeListItem('menuItem').title('Menu Items'),
      S.documentTypeListItem('review').title('Guest Reviews'),
    ])
