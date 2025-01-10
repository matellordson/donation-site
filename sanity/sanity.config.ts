import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'donation-site',

  projectId: 'eoqk3tv9',
  dataset: 'production',

  // plugins: [structureTool(), visionTool()],

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
