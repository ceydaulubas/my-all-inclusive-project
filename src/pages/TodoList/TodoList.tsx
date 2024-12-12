import React from 'react';

// Components
import { TodoListForm , TodoListTable} from '../../components/index';

// Styles
import { TodoListContainer } from './TodoList.styles';


function TodoList() {
    return (
        <TodoListContainer>
            <TodoListForm />
            <TodoListTable />
        </TodoListContainer>
    );
}

export default TodoList;
