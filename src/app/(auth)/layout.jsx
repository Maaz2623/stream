import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import {Poppins} from 'next/font/google';
import { dark } from "@clerk/themes";

const poppins = Poppins({weight: "500", subsets: ["latin"]})

export default function RootLayout({ children }){
    return (
        <ClerkProvider appearance={{baseTheme: dark}}>
            <html lang="en">
                <body className={`${poppins.className} bg-primary`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
