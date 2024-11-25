import { Outlet } from "react-router-dom";

// componenti
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <div className="vh">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}