import React , { useEffect } from 'react';
import styled from 'styled-components';

import TodoInput from '../Components/Todo/TodoInput';
import TodoList from '../Components/Todo/TodoList';

import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { LOAD_TODO_REQUEST } from '../modules/todos';

import LinearProgress from '@material-ui/core/LinearProgress';

const LinearProgressLine = styled(LinearProgress)`
    height:2px !important;
    z-index:2000;
`;

const Todo = () => {
    const { isTodoLoad } = useSelector((state: RootState) => state.todos);

    const dispatch = useDispatch();

    useEffect( ()=> {
        if (isTodoLoad) {
            dispatch({
                type : LOAD_TODO_REQUEST,
            })
        }
    }, [dispatch , isTodoLoad]);

    return(
        <>
            {isTodoLoad ? (
                <LinearProgressLine color="secondary" />
            ) : (
                <div className="container">
                    <TodoInput />
                    <TodoList />
                </div>
            )}
            
            
        </>
    )
};

export default Todo;