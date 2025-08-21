import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';


export default defineConfig({
  out: './drizzle',
  schema: './src/app/configs/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://asharmeraj55:Lx2oUfXkQrb9@ep-shiny-sun-a1p1gb20-pooler.ap-southeast-1.aws.neon.tech/TimeStoreBase?sslmode=require&channel_binding=require",
  },
});