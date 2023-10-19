import Footer from "./footer";
import Header from "./header";

export default function MinLayout({children}) {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )
}