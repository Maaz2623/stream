import "../globals.css";
import {Poppins} from 'next/font/google';
import Topbar from "../../components/shared/Topbar";

const poppins = Poppins({weight: "400", subsets: ["latin"]})

export default function RootLayout({ children }){
    return (
            <html lang="en">
                <body className={`${poppins.className} bg-slate-800 text-white`}>
                    <Topbar />
                    {children}
                </body>
            </html>
    )
}
