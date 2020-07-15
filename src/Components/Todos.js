import React, { useContext } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FcApproval } from 'react-icons/fc';
import { TodoContext } from '../Context/TodoContext';
import {REMOVE_TODO} from '../Context/action.types';

const Todos = () => {
    const {todos, dispatch} = useContext(TodoContext);

    return(
        <ListGroup className="mt-3 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoItem}
                    <span
                        className="checkIcon"
                        onClick={() => {
                            dispatch({
                                type: REMOVE_TODO,
                                payload: todo.id
                            })
                        }}
                    >
                        <FcApproval />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos;
