import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

export default function MinLayout({children}: {children: ReactNode}): JSX.Element {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}