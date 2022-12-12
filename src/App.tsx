import React, {useState} from 'react';
import './App.css';
// import {Todolist} from "./ToDoList";
import {FullImput} from "./components/FullImput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS", isDone: false},
    ])
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "yo", isDone: false},
    ]
    const removeTask = (elid: number) => {
        setTasks(tasks.filter((el) => el.id !== elid))
        console.log(tasks)
        // setTasks(tasks)
        console.log(tasks)
    }
    let filteredTasks
    filteredTasks = tasks.filter(el => !el.isDone)


    const changeTaskFilter = (buttonName: string) => {
        console.log(buttonName)
    }


    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [title, setTitle] = useState('')
    console.log(title)


    const callInput = (title: string) => {
        let newMessage = {message: title,};
        setMessage([newMessage, ...message])
    }

    return (
        <div className="App">
            {/*<Todolist*/}
            {/*    title="What to learn"*/}
            {/*    tasks={filteredTasks}*/}
            {/*    removeTask={removeTask}*/}
            {/*    changeTaskFilter={changeTaskFilter}*/}
            {/*/>*/}
            {/*<FullImput callInput={callInput}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={() => {
                callInput(title)
                setTitle(' ')
            }}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
