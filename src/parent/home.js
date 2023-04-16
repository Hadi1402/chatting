import React, { Component } from "react";
import {Link} from 'react-router-dom';

//import '.css/style/login.css';



class Homepage extends Component {

    render(){
    return(
        
   <div className="hader">   

    <Link to="/login">   عضویت  </Link> 
     <Link to="/member">  ورود  </Link> 


    <hr></hr>
  
    </div>

            
    );
 }

    }



  
    
    

export {Homepage};