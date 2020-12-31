const ADD_TODO = 'ADD_TODO'

export const addTodo = (message) =>({
    type:ADD_TODO,
    message,
    id:Date.now()
})

const DELETE_TODO = 'DELETE_TODO'
export const deleteTodo = (id) =>({
    type:DELETE_TODO,
    id,
})

const CHECK_TODO = 'CHECK_TODO'
export const checkTodo = (id) =>({
    type:CHECK_TODO,
    id,
})

const EDIT_TODO  = 'EDIT_TODO'
export const editTodo = (id) =>({
    type:EDIT_TODO,
    id,
}) 
const SAVE_TODO  = 'SAVE_TODO'
export const saveTodo = (id,message) =>({
    type:SAVE_TODO,
    id,    
    message
    
})