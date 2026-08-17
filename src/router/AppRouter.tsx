
import { BrowserRouter, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./RoutesWithNotFound";
import { PrivateGuard } from "../guards/PrivateGuard";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export function AppRouter(){

    return(
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/*" element={<PublicRouter />}/>
                <Route element={<PrivateGuard />}>
                    <Route path="/private/*" element={<PrivateRouter />} />
                </Route>
            </RoutesWithNotFound>
        </BrowserRouter>
    )
} 