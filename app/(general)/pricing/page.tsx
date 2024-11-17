import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Page",
    description: "Test page woooooo!!",
    keywords: ["Pricing"]
}

export default function PricingPage() {
    return (
        <>
            <h1 className="text-lg">PricingPage</h1>
        </>
    );
}