import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons'
import './item.css';
import {checkTodo, deleteTodo, editTodo, saveTodo} from '../../actions'

const Item = props => {
    const [name,setName] = useState(props.currentItem.message)
    
    const deleteItem = ()=>{
        
        props.dispatch(deleteTodo(props.currentItem.id))
    }
    const checkHandler = ()=>{
   
        props.dispatch(checkTodo(props.currentItem.id))
    }

    const updateHandler = (e) =>{
        props.dispatch(editTodo(props.currentItem.id))
    }

    const saveHandler = () =>{
        props.dispatch(saveTodo(props.currentItem.id,name))
    }
   
    let title = props.currentItem.message;

    return(
    <div className='itemContainer'>
        
        <button onClick={checkHandler} className="complete-btn">
                <i className={props.currentItem.completed?"fas fa-check-square":"fas fa-square"}></i>
        </button>
        
        {props.currentItem.isUpdating ? <input type="text" className='updateInputField' onChange={(e)=>setName(e.target.value)} value={name}
             />
            : <h3 className={props.currentItem.completed?"strike":""}>{title}</h3>}
      
           {/* <input className='updateInputField' value={title}
            onChange={props.setCurrentItemHandler} /> */}
            
      
           
        <div className='actionButtons'>
            <FontAwesomeIcon className='btn edit' onClick={props.currentItem.isUpdating?saveHandler:updateHandler}
                icon={props.currentItem.isUpdating ? faCheck : faEdit} />
            <FontAwesomeIcon className='btn delete' onClick={deleteItem} icon={faTrashAlt} />
            <span id='errUpdateMsg'></span>
        </div>
    </div>
    )
}

export default Item;