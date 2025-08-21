import { integer, json, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { ImageObj, sizeArray } from "./ProdListType";

export const ITEM_TABLE = pgTable('itemTable', {
    id: serial().primaryKey(),
    Name: varchar().notNull(),
    Price: integer().notNull(),
    Category: varchar().notNull(),
    sizeArray: json().$type<sizeArray[]>().notNull(),
    Image: json().$type<ImageObj[]>().notNull()
})