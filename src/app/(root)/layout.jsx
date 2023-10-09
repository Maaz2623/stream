import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import {Poppins} from 'next/font/google';
import Topbar from "@/components/shared/Topbar";

const poppins = Poppins({weight: "400", subsets: ["latin"]})

export default function RootLayout({ children }){
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${poppins.className} bg-gray-800 text-white`}>
                    <Topbar />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
