import React, { useContext, useState } from 'react';
import {
    Form,
    FormGroup,
    Input,
    Button,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';
import {v4} from 'uuid';
import {TodoContext} from '../Context/TodoContext';
import {ADD_TODO} from '../Context/action.types'

const TodoForm = () => {
    const [todoItem, setTodoItem] = useState("");
    const { dispatch } = useContext(TodoContext);

    const todoSubmit = e => {
        e.preventDefault();
        if (todoItem === "") {
            return alert('Please enter a todo');
        };

        const todo = {
            todoItem,
            id: v4(),
        };

        dispatch({
            type: ADD_TODO,
            payload: todo,
        });

        setTodoItem("");
    }

    return(
        <Form onSubmit={todoSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Next todo"
                        value={todoItem}
                        onChange={e => setTodoItem(e.target.value)}
                        //TODO: value, onChange
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                            color="success"
                            //TODO: onClick
                        >
                            Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    );
}

export default TodoForm;