import { defineConfig } from 'drizzle-kit';
import { env } from './src/env.ts';

// This configuration file sets up Drizzle ORM with PostgreSQL for a TypeScript project.
export default defineConfig({
  dialect: 'postgresql',
  casing: 'snake_case',
  schema: './src/db/schema/**.ts',
  out: './src/db/migrations',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
