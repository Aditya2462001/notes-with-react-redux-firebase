import React from 'react';
import { deleteTodo } from '../actions';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    listItem:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        background:"rgba(241, 241, 241, 0.993)",
        margin:"10px 0px",
        paddingLeft:"10px",
        paddingRight:"10px",
        borderRadius:"5px",
    },
    listItemData:
    {
        flex:"1",
        fontSize:"12px",
        fontWeight:"600",
        textTransform:"capitalize",
        fontFamily: "'Poppins', sans-serif",
    }
  

  }));

const Task = (props) => {

    const classes = useStyles();

    const { data, id } = props.elem;


    const dispatch = useDispatch();


    return (
            <ListItem button className={classes.listItem} key= {id}  >
                <Typography variant="subtitle1" className={classes.listItemData}>{data}</Typography>
                <Button variant="contained" color="secondary" onClick={() => dispatch(deleteTodo(id))}><DeleteIcon></DeleteIcon></Button>
            </ListItem>
    )
}

export default Task;
