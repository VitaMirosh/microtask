import React from 'react';
import {type} from "os";
import {debug} from "util";

type NewComponentType = {
    students: every[]
}
type every = {
    id: number,
    name: string,
    age: number
}
export const NewComponent = (props: NewComponentType) => {
    return (
        <div>
            {props.students.map(el => {
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
type CompanyCar = {
    topCars: Cars[]
}
type Cars = {

    manufacturer: string,
    model: string
}
export const CompanyCarNew = (props: CompanyCar) => {
    return (

        <table>
            {
                props.topCars.map((objectCar,index) => {
                    return (


                        <tr>
                            <td>{index+1}</td>

                            <td>{objectCar.manufacturer}</td>

                            <td>{objectCar.model}</td>

                        </tr>

                    )
                })
            }
        </table>
    )
}
