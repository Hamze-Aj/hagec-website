import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('HAGEC Content')
    .items([
      S.listItem()
        .title('Projects')
        .child(
          S.documentTypeList('project')
            .title('All Projects')
        ),
      S.divider(),
      S.listItem()
        .title('Gallery Images')
        .child(
          S.documentTypeList('galleryImage')
            .title('Gallery Images')
        ),
    ])

