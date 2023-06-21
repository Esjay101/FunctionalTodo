import React from "react";
import {useQuery} from "react-query";
import ClipLoader from "react-spinners/ClipLoader";

import { TodoItem } from '../components/TodoItem';
import  {CreateTodoForm} from '../components/CreateTodoForm';
import readTodoRequest from '../api/readTodoRequest';


export const TodoPage = (props) => {
    
    const {isLoading, data: todos} = useQuery(
        'todos', 
        readTodoRequest
        );
    console.log(todos)
    return(
        <div>
            <h1>{props.username}'s Todo App</h1>
            <br></br>
            {isLoading ? (
            <ClipLoader size={150}/>
            ) : (
            todos.map((todo)=>(
                    todo.userlink == props.username && 
                <div>
                    <TodoItem todo={todo} key={todo._id}/>
                    <br></br>
                </div>
            ))
            )}
            <CreateTodoForm username={props.username}/>
            <p></p>
        </div>
    )
}