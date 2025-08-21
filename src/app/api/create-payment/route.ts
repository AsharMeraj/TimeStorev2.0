import { ProdList } from "@/app/configs/ProdListType";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY as string);

interface Product {
  data: ProdList;
  quantity: number;
  selectedSize: string;
  singlePrice: number;
}

interface ProductsType {
  products: Product[];
}

export async function POST(req: Request) {
  try {
    const body: ProductsType = await req.json();

    // Build Stripe line items
    // console.log(body.products.map((data)=> data.singlePrice))
    const lineItems = body.products.map((product) => ({
      price_data: {
        currency: "pkr",
        product_data: {
          name: product.data.Name,
        },
        unit_amount: Math.round(product.singlePrice * 100), // convert to cents
      },
      quantity: product.quantity,
    }));

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: { allowed_countries: ["PK"] },
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/payment/success`,
      cancel_url: `${process.env.CLIENT_URL}/payment/failed`,
      line_items: lineItems,
    });

    return NextResponse.json({ stripeSession: session.id });
  } 
  // catch (error: unknown) {
  //   console.error("Error in create-payment API:", error);
  //   return NextResponse.json(
  //     { error: error.message || "Something went wrong" },
  //     { status: 500 }
  //   );
  // }
  catch (error: unknown) {
  console.error("Error in create-payment API:", error);

  // Safely check if it's an Error object
  if (error instanceof Error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  // Fallback for non-Error cases
  return NextResponse.json(
    { error: "Something went wrong" },
    { status: 500 }
  );
}
}
