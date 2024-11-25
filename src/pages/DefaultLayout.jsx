import { Outlet } from "react-router-dom";

// componenti
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Main />
            <Footer />
        </>
    )
}