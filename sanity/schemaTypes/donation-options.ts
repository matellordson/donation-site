export default {
  name: 'donation-options',
  type: 'document',
  title: 'Donation Options',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {source: 'title'},
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}],
    },
    {
      name: 'raised',
      type: 'number',
      title: 'Raised',
    },
    {
      name: 'total',
      type: 'number',
      title: 'Total',
    },
    {
      name: 'supporters',
      type: 'number',
      title: 'Supporters',
    },
  ],
}
