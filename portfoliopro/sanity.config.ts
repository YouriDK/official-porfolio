import { defineConfig, ConfigContext } from 'sanity';
import { deskTool, StructureBuilder } from 'sanity/desk';
import schema from './schemas/schema';
import { visionTool } from '@sanity/vision';

export default defineConfig({
  title: 'portfolio_pro',
  projectId: 'dmdjos1g',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: (S: StructureBuilder, context: ConfigContext) => {
        const { getClient } = context;
        // ! TO avoid not use Error
        getClient({ apiVersion: '2024-01-01' });
        // use client to to build the structure, for instance
        return S.defaults();
      },
    }),
    visionTool(),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    return prev;
    // return prev.filter((tool) => tool.name !== 'vision');
  },
  schema: {
    types: schema,
  },
});
