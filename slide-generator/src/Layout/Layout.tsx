import { CallToAction, Footer } from "@/root/components";
import NavBar from "@/root/components/navbar/NavBar";
import ProductSection from "@/root/components/product-section1/ProductSection";

import { ReactNode, useRef } from "react";

type LayoutProps = {
    children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {

    const appRef = useRef();

    return (
        <main className=" bg-gray-900 text-white body-font">
            <NavBar/>
            <CallToAction />
            <ProductSection/>
            <main id="app" className="bg-gray-900 flex justify-center items-center  ">{children}</main>

            
            <Footer/>
        </main>
    );
};
export default Layout;
