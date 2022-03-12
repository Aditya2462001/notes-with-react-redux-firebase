import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/index';
import { db } from '../config/firebase';
import Task from './Task';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BookIcon from '@material-ui/icons/Book';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import { makeStyles } from '@material-ui/core/styles';
import { 
    Avatar,
    Card, 
    Typography, 
    Button, 
    TextField, 
    CardContent, 
    AppBar, 
    Toolbar,
    List ,
    CircularProgress,
} from '@material-ui/core';

import './todo.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width:"600px",
       '@media (max-width:600px)': 
        {
            width:"400px",
        },
       '@media (max-width:413px)': 
        {
            width:"300px",
        },
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        paddingBottom:"1rem",
    },
    appBar:
    {
        display:"flex",
        justifyContent:"space-between",

    },
    title: {
      flexGrow: 1,
      display:'flex',
      alignItems:"center",
      justifyContent:"center",
      fontSize:"20px",
      fontWeight:"bold",
    },
    addSection:{
        width:"90%",
        display:"flex",
        padding:"20px 20px",
    },
    inputField:
    {
        flex:1,
    },
    list:{
        width:"90%",
        display:"flex",
        flexDirection:"column",
        paddingLeft:"10px",
        paddingRight:"10px",
        
    },
    allNote_content:
    {
        textTransform:"uppercase",
        fontWeight:"600",

    }

  }));


const Todo = ({userInfo}) => {
    const [inputData, setInputData] = useState('');
    const [allData, setAllData] = useState([]);
    const [loader,setLoader] = useState(false);
    const classes = useStyles();

    const [allUserData,setAllUserData] = useState([]);


    const dispatch = useDispatch();

    useEffect(() => {
        db.collection('todos').orderBy('time', 'desc').onSnapshot(snapshot => {
            setAllData(snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    userId: doc.data().userId ,
                    data: doc.data().todo,
                }
            }))

        });

    }, []);
    
    useEffect(() =>
    {
        if(allData.length !== 0)
        {
            setAllUserData( allData.filter((elem) => !(elem.userId !== userInfo.id )));
            setLoader(true);
        }
        
    },[allData]);


    const getEvent = () => {
        dispatch(addTodo(inputData,userInfo.id));
        setInputData('');

    }

    const Logout = () =>
    {
        localStorage.removeItem('userdetails');
        window.location.reload(true);
    }

    return (
        <Card className="todo__container" className={classes.root}>

            {/* =============== nav bar =================== */}
            <AppBar position="static">
                <Toolbar className={classes.appBar}>
                    <div className="logo">
                        <BookIcon></BookIcon>  
                        <Typography variant="h5" className={classes.title}>
                        Notes App
                        </Typography>
                    </div>
                    <div className="user__data">
                            <Typography variant="subtitle2" className="user__name" >
                                {userInfo.given_name}
                                </Typography>
                            <Avatar alt="Remy Sharp" src={userInfo.picture} />
                            
                    </div>
                </Toolbar>
            </AppBar>
            {/* =============== nav bar =================== */}

            {/* =============== Add container =================== */}

            <CardContent className={classes.addSection}>

                <TextField id="standard-basic" label="Add Notes from Here" 
                    className={classes.inputField} 
                    onChange={(e) => setInputData(e.target.value)} 
                    value={inputData} />
                <Button variant="contained" color="primary" 
                onClick={getEvent} >
                    <AddCircleIcon></AddCircleIcon>
                </Button>
            </CardContent>

            <Typography variant="h6" className={classes.allNote_content}>All Notes</Typography>
            <List className="show_items" className={classes.list}>
                { loader ? (allUserData.map((elem) => {
                    return (<Task elem={elem} key={elem.id} userInfo={userInfo}/>)
                })) :(
                    <div className="loader">
                        <CircularProgress></CircularProgress>
                    </div>
                ) }
            </List>
            <Button variant="contained" color="secondary"onClick={Logout}><ExitToAppRoundedIcon></ExitToAppRoundedIcon>Logut</Button>
            <div className="footer">Created By Aditya Chandrikapure</div>
        </Card>
    )
}



export default Todo;
