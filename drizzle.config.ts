import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv'

const url = dotenv.config().parsed?.NEXT_PUBLIC_DATABASE_CONNECTION_STRING as string



export default defineConfig({
  out: './drizzle',
  schema: './src/app/configs/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: url,
  },
});