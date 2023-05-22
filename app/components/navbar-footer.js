import Footer from "./footer";
import Navbar from "./navbar";

export default function NavbarFooter ({children}) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}