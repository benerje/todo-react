import React from 'react';
import Item from '../item/Item';
import {connect} from 'react-redux'
 
const Items = props => {
    
    return (
    <div className='itemsListContainer'>
        {props.todos.map((todo,index)=>(
            <Item key={index} dispatch={props.dispatch} currentItem={todo} />
        ))}
     
    </div>
    )
}

const mapStateToProps = (state)=>({
    todos:state.todos.data
})

export default connect(mapStateToProps)(Items);