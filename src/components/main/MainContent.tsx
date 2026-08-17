import type { ReactNode } from "react";
import './Main.css'
interface Props{
    children: ReactNode
}

export function MainContent({children}: Props){
    return(
        <main>
            {children}
        </main>
    )
}