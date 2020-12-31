const initialState = {
    data:[]
}

const todos = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                data:[
                    {
                        message:action.message,
                        id:action.id,
                        completed:false,
                        isUpdating:false
                    },
                    ...state.data,
                ]
            }

        case 'DELETE_TODO':
          const todos = state.data.filter((todo)=>todo.id!==action.id)
            return{

              ...state,
              data:todos,

            }
        case 'CHECK_TODO':
            const edit = state.data.map((todo)=>
            {if(todo.id==action.id){
                return{
                    ...todo,
                    completed:!todo.completed
                }
            }
            return todo
            })
                return{
                    ...state,
                    data:edit,
                } 
        case 'EDIT_TODO':
           
                const update = state.data.map((todo)=>
                {if(todo.id==action.id){
                    return{
                        ...todo,
                        isUpdating:true,
        


                    }
                }
                return todo
                })
                    return{
                        ...state,
                        data:update,
                    }
                    case 'SAVE_TODO':
           
                        const save = state.data.map((todo)=>
                        {if(todo.id==action.id){
                            return{
                                ...todo,
                                message:action.message,
                                isUpdating:false
        
                            }
                        }
                        return todo
                        })
                            return{
                                ...state,
                                data:save,
                            }
        
                
            default:
                return state
    }
}

export default todos