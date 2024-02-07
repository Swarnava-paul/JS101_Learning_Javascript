import { Sidebar } from "./sidebar.jsx"
import { Main } from "./main.jsx"
export function Middlesection(){
    return (
        <>
        <div style={{border:"1px solid red"}}>
        <p>Middlesection</p>
        <div style={{border:"1px solid red", display:"flex", gap:"4%"}}>
        <Sidebar/>
        <Main/>
        </div>
        </div>
        </>
    )
}