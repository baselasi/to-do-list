import React, { useState } from "react";
import "../App.css"

export default function  List(){
    const lista= []
    const toDo=[]
    var full=[]
    const [newTask, setItem] = useState(toDo)      //state that contien the new task
    const [list,setlist] = useState(lista)          // state that contein the task list
    function addTask(){                           //assgin the new task to the task list
        setlist(()=>list.concat(newTask))
        setItem([])
        full=list
    }
    function removeTask(id){                     //remove the task from the list by removing the li element
        const element= document.getElementById(id)
        element.remove()
    }
    return(
        <div>
            <div>
            <input
            type="text"
            placeholder="insert task"
            value={newTask}
            onChange={(event)=>{                //passing the value  of the new task to the newTask state
                setItem(event.target.value)
            }}
            />
            <button onClick={addTask}>click</button>
        </div>
        <div>
            <ul>
                {list.map(item=>
                <li id={item}>{item}
                <button onClick={()=>removeTask(item)}>delete</button></li>
                )}
            </ul>
        </div>
        </div>
    )
}