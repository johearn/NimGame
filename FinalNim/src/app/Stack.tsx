import React from "react"
import { IStone } from "./IStone";



interface IProps{
    stones: IStone[];
}

export function Stack(input: IProps){
    return (
        <div>
            {input.stones.map( (stone,index) => {
                if(stone.selected)
                    return <button key={stone.key} onClick={stone.onClick}>selected</button>
                else
                    return <button key={stone.key} onClick={stone.onClick}>free</button>
            } )}
            <br/>
        </div>
    )
}