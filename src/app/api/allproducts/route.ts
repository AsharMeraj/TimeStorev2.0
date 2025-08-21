import { NextResponse } from "next/server";
import { db } from "@/app/configs/db";
import { ITEM_TABLE } from "@/app/configs/schema";

export async function GET() {
  try {
    const allItems = await db.select().from(ITEM_TABLE)
    return NextResponse.json(allItems);
  } catch (error) {
    console.error(error);
    console.log("YE nahi chala")
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}