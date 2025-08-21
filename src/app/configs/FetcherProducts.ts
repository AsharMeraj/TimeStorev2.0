import { ProdList } from "./ProdListType";

export async function FetcherProducts(): Promise<ProdList[]> {
  try {
    // Always fetch fresh data on client side
    const res = await fetch(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/allproducts`);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: ProdList[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}