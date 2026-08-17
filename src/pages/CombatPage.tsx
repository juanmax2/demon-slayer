
import { CombatStyleList } from "../combatStyles/components/combatsList/CombatStyleList";
import { Layout } from "../components/layout/Layout";
import './CombatPage.css'

export function CombatPage() {
   
    return (
       <>
            <Layout>
                <h1 className="combat-title">Combat Styles</h1>
                <CombatStyleList />
            </Layout>
       </>
    )
}