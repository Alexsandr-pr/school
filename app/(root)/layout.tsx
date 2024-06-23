import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className="font-inter w-full h-full">
            <Header/>
            {children}
            <Footer/>
        </main>
    )
}