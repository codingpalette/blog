import React , { useState , useCallback , FormEvent , ChangeEvent } from 'react';
import styled from 'styled-components';

// 리덕스
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { ADD_TODO_REQUEST } from '../../modules/todos';

// 머테리얼
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Form = styled.form`
    display:flex;
    max-width:500px;
    margin:0 auto;
`;

const Input = styled(TextField)`
    flex:1;
`;

const TodoInput = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e : FormEvent) => {
        e.preventDefault();
        dispatch({
            type : ADD_TODO_REQUEST,
            data : {
                value
            }
        });
        console.log(value);
        setValue('');
    }, [value])

    return(
        <>
            <Form onSubmit={onSubmit} noValidate autoComplete="off">
                <Input id="standard-basic" value={value} onChange={onChange} label="할을을 입력해주세요." />
                <Button variant="outlined" type="submit">
                    등록하기
                </Button>
            </Form>
        </>
    )
}

export default TodoInput;