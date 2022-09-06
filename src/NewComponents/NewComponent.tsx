import React from 'react';

type NewComponentType = {
    students: Array<every>
}
type every = {
    id: number,
    name: string,
    age: number
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            {props.students.map (el=> {
                return (
                    <div>
                        {el.id}
                        name:{el.name}
                        age:{el.age}
                    </div>
                )
            })}
        </div>
    )
}