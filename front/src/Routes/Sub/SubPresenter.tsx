import React , { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { LOAD_TODO_REQUEST } from '../../modules/todos';

const Container = styled.div`
    margin-top:100px;
`;

const SubPresenter = () => {

    const { ListContent , isTodoLoad } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    useEffect( ()=> {
        dispatch({
            type : LOAD_TODO_REQUEST,
        })
    }, [])

    console.log(ListContent)

    return(
        <>  
            <Container>
                {isTodoLoad ? (
                    <div>loading</div>
                ) : (
                    <div>ok</div>
                )}
                <div>Sub</div>
            </Container>
        </>
    )
};

export default SubPresenter