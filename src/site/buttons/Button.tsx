import React from "react";
import {type} from "os";
import {stringify} from "querystring";
type Button3 = {
    name: string
    callBack:()=>void
}
// const myFirstSubs
export function Button2(props:Button3) {
// const mySecondSubscriber=()=>{
//     console.log('Hello! im Ivan')
// }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
const onClickHuhdler=()=>{
  props.callBack()
}
    return (
        <div className="button1">

            {/*<button onClick={(event) => {*/}
            {/*    console.log('Hello!')*/}
            {/*}}>MyYouTubeChanel*/}
            {/*</button>*/}
            {/*<button onClick={() => onClickHandler('i am vasia')}>MyYouTubeChanel-1*/}
            {/*</button>*/}
            {/*<button onClick={() => onClickHandler("i am vova")}>MyYouTubeChanel-2*/}
            {/*</button>*/}
            <button onClick={onClickHuhdler}>{props.name}</button>
        </div>
    )
}
