export default {
    name: 'main',
    title: 'Main',
    type: 'document',
    fields: [
      {
        name: 'poster',
        title: 'Poster',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'vidcdn',
        title: 'Video CDN',
        type: 'string',
      },
      {
        name: 'platforms',
        type: 'document',
        title: 'Platforms',
        fields: [
          {
            name: 'images',
            type: 'array', // supports drag'n'drop of multiple files
            options: {
              layout: 'grid'
            },
            of: [{
              type: 'image'
            }]
          }
        ]
    },
    {
        name: 'description',
        title: 'Description',
        type: 'string'
    },
    {
        name: 'rate',
        type: 'string',
        title: 'Rate',
    },
    ],
    preview: {
        select: {
          title: 'description',
          media: 'poster',
        },
      },
  }
  