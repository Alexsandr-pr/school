import Footer from "@/components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className="font-inter w-full h-full">
            {children}
            <Footer/>
        </main>
    )
}