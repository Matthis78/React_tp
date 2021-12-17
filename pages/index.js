import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react';
import Card from '../components/Card'
import Header from '../components/Header'



export default function Home() {

    const [count, setCount] = useState(0)
    const [todoList, setTodoList] = useState([])
    const [task, setTask] = useState("")
    const [editabledTodo, setEditabledTodo] = useState(null)
    const [color, setColor] = useState('#fff')
    const [data, setData] = useState([])


    const handleOnChange = event => {
        const value = event.target.value;
        setTask(value);
    };

    const addTask = event => {
        setTodoList(prevArray => [...prevArray, task])
    }

    const deleteTask = index => {
        setTodoList(todoList.filter((_, i) =>
            index !== i
        ))
    };

    const changeEditabledTodo = (item, index) => {
        setEditabledTodo(index)
    }

    const editTodo = e => {
        let newTodoList = [...todoList]
        newTodoList[editabledTodo] = e.target.value
        setTodoList(newTodoList)
    }

    const addData = () => {
        fetch('https://random-data-api.com/api/crypto_coin/random_crypto_coin')
            .then(response => response.json())
            .then(data => setData(prevArray => [...prevArray, data]))
    }

    return (
        <div>
            <main>

                <Header/>



                <div className='main'>
                    <h3>Items : {data.length}</h3>
                    <button onClick={() => addData()}>Find a random crypto coin !</button>
                    <br/><br/>
                    <div className="dataContainer">
                        {data.length > 0 && (
                            data.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <Card coin_name={item.coin_name} acronym={item.acronym} logo={item.logo}></Card>
                                    </div>
                                )
                            })
                        )}
                    </div>

                    <div className="todoContainer">
                        <h4>Todo list</h4>
                        <input type="text" onChange={handleOnChange}/>
                        <button onClick={() => addTask()}>Add</button>
                        <br/><br/>
                        <div className="todoContainerList">
                            {todoList.length > 0 && (
                                todoList.map((todo, i) => {
                                    return (
                                        <div key={i}>
                                            <input type="text" onChange={(e) => editTodo(e)}
                                                   disabled={editabledTodo !== i ? true : false} defaultValue={todo}/>
                                            <button onClick={() => changeEditabledTodo(todo, i)}>Edit</button>
                                            <button onClick={() => deleteTask(i)}>Delete</button>
                                        </div>

                                    )
                                })
                            )}
                        </div>
                    </div>

                </div>

            </main>

        </div>
    )
}