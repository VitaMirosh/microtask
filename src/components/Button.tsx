import React from 'react';


type ButtonProps = {
    name:string,
    callBack:()=>void
}


export const Button = (props:ButtonProps) => {
    const onclickButtonHandler =()=>{
       props.callBack()
    }
    return (
      <button onClick={onclickButtonHandler}>{props.name}</button>
    );
};

