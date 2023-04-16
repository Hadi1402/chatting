import React,{useState} from 'react';
import './login.css';
import {UseAuth} from './auth'
import {Link} from "react-router-dom";
import axios from 'axios';

 const LoginSet=(props)=> {

  //  const [isloggedIn, setLoggedIn] = useState(false);
 //   const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {setAuthTokens} = UseAuth();


    function PostLogin() {
        axios.post("http://localhost:3000/", {
            userName,
            password
        }).then(result => {
            if (result.status === 200) {
                setAuthTokens(result.data);
      //         setLoggedIn(true);
            } else {
     //           setIsError(true);
            }
        }).catch(e => {
     //    setIsError(true);
        });
    }

  //  if (isloggedIn) {
  //      return <Redirect to={"/"}/>;
 //   }

        return (

            <div className={'login_colr'}>
             

                <form className={'frm-login'}>
                    <input type='text'
                           value={userName}
                           onChange={e => {
                               setUserName(e.target.value);
                           }}
                           placeholder={'نام کاربری'}/> <br/>

                    <input type='password'
                           value={password}
                           onChange={e => {
                               setPassword(e.target.value);
                           }}
                           placeholder={'کلمه عبور'}/> <br/>
                    <button onClick={PostLogin}>
                        ورود اعضاء
                    </button>
                    <br/> <br/>
                    <Link to="/login"> هنوز ثبت نام نکردیده اید! </Link>
                </form>

                <br/><br/><br/><br/><br/>
            </div>

        )

}
export {LoginSet};