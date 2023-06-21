import React, {useCallback, useEffect, useState} from "react";
import { useQueryClient, useMutation } from "react-query";
import updateTodoRequest from "../api/updateTodoRequest";
import deleteTodoRequest from "../api/deleteTodoRequest";
import {debounce} from "lodash";

export const TodoItem = ({todo}) => {
    const [text, setText]=useState(todo.text)

    const queryClient = useQueryClient();

    const {mutate: updateTodo} = useMutation(
        (updatedTodo)=> updateTodoRequest(updatedTodo),
        {
        onSettled: ()=>{
            queryClient.invalidateQueries("todos");
        }
    });

    const debouncedUpdateTodo = useCallback(debounce(updateTodo, 600), [updateTodo])

    useEffect(()=> {
        if (text !== todo.text) {
            debouncedUpdateTodo({
                ...todo,
                text, 
            });
        }
    }, [text])

    const {mutate: deleteTodo} = useMutation(
        (updatedTodo)=> deleteTodoRequest(updatedTodo),
        {
        onSettled: ()=>{
            queryClient.invalidateQueries("todos");
        }
    });
    
    return (
        <div>
            <input 
            checked={todo.completed}
            type="checkbox" 
            onChange={()=> updateTodo({
                ...todo, 
                completed: !todo.completed,
            })}
            />

            <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)
            }
            />
            <button onClick={()=>deleteTodo(todo)}>delete</button>
        </div>
    )
}