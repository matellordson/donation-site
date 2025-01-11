export default {
  name: 'about-us',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
}
