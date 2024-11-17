import { NavBar } from "@/components";
import React, { ReactNode } from "react";


export default function NewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavBar />
            <main className="flex flex-col h-screen justify-center items-center">
                <h1>Hola mundo desde el nuevo layout</h1>
                {children}
            </main>
        </>

    );
}