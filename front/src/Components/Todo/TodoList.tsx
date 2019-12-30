import React ,{ useCallback } from 'react';

import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { TOGGLE_TODO_SUCCESS , DEL_TODO_SUCESS } from '../../modules/todos';


import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 500,
      margin:'0 auto',
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

const TodoList = () => {
    const { ListContent } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();
    
    const classes = useStyles();


    const handleChange = useCallback((id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        // setChecked(event.target.checked);
        // console.log(id)
        dispatch({
            type : TOGGLE_TODO_SUCCESS,
            data : id
        });
    }, [dispatch]);

    const delEvent = useCallback((id: number) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch({
            type : DEL_TODO_SUCESS,
            data : id
        });
    }, [dispatch]);


    return(
        <>
            <List className={classes.root}>
                {ListContent.map( ( item: any) => (
                    <ListItem key={item.id}>
                        <ListItemIcon>
                            <Checkbox
                                checked={item.done}
                                onChange={handleChange(item.id)}
                                value="primary"
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                        
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="comments" onClick={delEvent(item.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
                    
                    
                
                
            </List>
        </>
    )
};

export default TodoList;
