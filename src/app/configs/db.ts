import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// Create the connection
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_CONNECTION_STRING as string);

// Pass it into drizzle
export const db = drizzle(sql);