export default {
    name: 'supported',
    title: 'Supported',
    type: 'document',
    fields: [
      {
        name: 'supportedtitle',
        title: 'Supported Title',
        type: 'string',
      },
      {
        name: 'supportedlist',
        title: 'Supported List',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'discussions',
        title: 'Discussions',
        type: 'array',
        of: [{type: 'discussion'}]
      },
      {
        name: 'centeredvector',
        title: 'Centered Vector',
        type: 'image',
        options: {
            hotspot: true,
          },
      },
      {
        name: 'image',
        title :'Image',
        type: 'image',
        options: {
            hotspot: true,
          },
      },
    ],
    preview: {
        select: {
          title: 'supportedtitle',
        },
      },
  }
  