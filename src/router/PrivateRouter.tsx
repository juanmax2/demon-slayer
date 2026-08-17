import { Route, Routes } from "react-router-dom";
import { CharactersPage} from "../pages/CharacterPage";
import { DetailPage } from "../pages/DetailPage";
import { CombatPage } from "../pages/CombatPage";
import { CombatDetailPage } from "../pages/CombatDetailPage";


export function PrivateRouter() {

    return (
        <Routes>
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/combatStyles" element={<CombatPage />} />
            <Route path="/cdetail" element={<CombatDetailPage />} />
        </Routes>
    )
}