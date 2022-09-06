import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponents/NewComponent";

const students = [
    {id: 1, name: "Vita", age: 30,},
    {id: 2, name: "Nik", age: 30,},
    {id: 3, name: "Vova", age: 33,},
    {id: 4, name: "Denis", age: 32,},
    {id: 5, name: "Grisha", age: 35,},
];

function App() {
    return (
        <div className="App">
            <NewComponent students={students}/>
            <Header title={'New body'}/>
            <Body titleForbody={'NEW BODY'}/>
            <Footer titleFooter={'NEW FOOTER'}/>
        </div>
    );
}


export default App;
