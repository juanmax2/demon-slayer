import type { ReactNode } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { MainContent } from "../main/MainContent";


interface Props{
    children: ReactNode
}

export function Layout({children}: Props) {
    return (
        <>
            <Header />
            <MainContent>
                {children}
            </MainContent>
            <Footer />
        </>
    )
}