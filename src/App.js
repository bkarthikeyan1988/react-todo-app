import React, { useReducer } from 'react';
import { Container } from 'reactstrap';
import { FcTodoList } from 'react-icons/fc';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { TodoContext } from './Context/TodoContext';
import todoReducer from './Context/reducer';
import TodoForm from './Components/TodoForm';
import Todos from './Components/Todos';

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return(
    <TodoContext.Provider value={{todos, dispatch}}>
      <div className="todoBlock">
        <Container fluid className="todoContainer">
          <h6>TODO App with Context API using context, action type and reducer without Local Storage</h6>
          <h2 className="title"><FcTodoList /><span>TODO List</span></h2>
          <Todos />
          <TodoForm />
        </Container>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
