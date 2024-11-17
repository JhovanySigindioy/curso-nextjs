import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page",
    description: "Test page woooooo!!",
    keywords: ["Pricing"]
}

export default function AboutPage() {
    return (
        <>
            <h1 className="text-lg">AboutPage</h1>
        </>
    );
}