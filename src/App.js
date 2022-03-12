import React,{useState,useEffect} from 'react';
import Todo from './components/Todo';
import Login from './components/Login';
import {auth , provider} from './config/firebase';


import './app.css';

const App = () => 
{
    const [userInfo,setUserInfo] = useState([]);

    useEffect(() =>
    {
        if(localStorage.getItem('userdetails'))
        {
            if(localStorage.getItem('userdetails').length !== 0)
            {
                setUserInfo(JSON.parse(localStorage.getItem('userdetails')));
            }
        }

    },[])


    const signIn = () =>
    {
        auth.signInWithPopup(provider).then((result) =>
            {
                setUserInfo(result.additionalUserInfo.profile);
                localStorage.setItem('userdetails',JSON.stringify(result.additionalUserInfo.profile));
            }
        ).catch(err => alert(err.message));

    }



    return (
        <div className="App">
            { userInfo.length === 0 ? ( <Login  signIn={signIn} />) : (<Todo userInfo={userInfo} />)}
        </div>
    )
}

export default App;
