import React from 'react'
import { ContextApivalue } from "../main"
export function Sidebar(){
    const v= React.useContext(ContextApivalue)
    console.log(v);
    return(
        <>

        <p></p>
        </>
    )
}