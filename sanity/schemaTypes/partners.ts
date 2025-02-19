export default {
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
