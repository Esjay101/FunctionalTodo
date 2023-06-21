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
            <h1>Todo App</h1>
            {isLoading ? (
            <ClipLoader size={150}/>
            ) : (
            todos.map((todo)=>(
                todo.userlink == props.username && 
                <TodoItem todo={todo} key={todo._id}/>
            ))
            )}
            <CreateTodoForm username={props.username}/>
            <p></p>
        </div>
    )
}