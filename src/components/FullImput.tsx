import React, {ChangeEvent, useState} from "react";
 type CallInputType = {
   callInput: (title:string)=>void
 }
export const FullImput = (props:CallInputType) => {
    let [title, setTitle] = useState('')
    console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickButtonHundler = () => {
      props.callInput(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onClickButtonHundler}>+</button>
        </div>

    );
};

