export default {
    name: 'discussion',
    title: 'Discussion',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
          },
      },
      {
        name: 'text',
        title: 'Text',
        type: 'text',
      },
      {
        name : 'responsible',
        title : 'Responsible',
        type : 'string',
      }
    ],
  }