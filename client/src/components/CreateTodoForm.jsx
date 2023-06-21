import React from "react";
import {useMutation, useQueryClient} from "react-query";
import createTodoRequest from "../api/createTodoRequest";
import {useState} from "react";

export const CreateTodoForm = ({username}) => {
    const [text,setText] = useState("");
    const queryClient = useQueryClient();

    const {mutate: createTodo} = useMutation(
        (newTodo)=> createTodoRequest(newTodo),
        {
        onSettled: ()=>{
            queryClient.invalidateQueries("todos");
        }
    });
    return(
        <form onSubmit={(e)=> {
            e.preventDefault();
            if (!text) return;
            createTodo({text,username
            })
            setText("");
        }}>
            <input type = "text" onChange={e=>setText(e.target.value)} value ={text}></input>
            <button>Create</button>
        </form>
        
    )
}