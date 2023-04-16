import React,{useState} from "react";
import ReactDOM from 'react-dom';


//import {Link} from 'react-router-dom';
//import {BrowserRouter  as Router,} from  'react-router-dom';
  
import img2 from './img/img2.PNG';
import my from "./img/my.GIF";
import close from "./img/close.GIF"
import  './login.css';
import { Component } from 'react';
import axios from "axios";

//const [isshowIn, setShowIn] = useState(true);
const App = () => {
  const [message, setMessage] = useState('');}





const url= <p> {document.URL.slice(7,21)} </p>
//const dis= <p> {document.chatbox.show()} </p>


class Chating extends React.Component{
   state = { }


disChangebox = ()=>{
  var disbox=document.getElementsByClassName('chatbox');
  let disimg=document.getElementsByClassName('imgchat');

  var i;
  for (i = 0; i < disbox.length; i++) {
    if(disbox[i].style.display== 'none'){
    disbox[i].style.display = 'block';
    disimg[0].style.display='none'
    
    }
    
    else {
       disbox[i].style.display = 'none';
    disimg[0].style.display=''
    }
   


}
    }

//ReactDOM.findDOMNode(Dis)[0].style.display='none';

    disChangeimgchat=()=> {

      let disimg=document.getElementsByClassName('imgchat');
      var disbox=document.getElementsByClassName('chatbox');

      var j;
      for (j = 0; j < disimg.length; j++) {
        if(disimg[j].style.display== 'none'){
         disimg[j].style.display = ' ';
         disbox[0].style.display = 'none';


        }
        else {
           disimg[j].style.display = 'none';
           disbox[0].style.display = 'block';

        }
       
    
    }

    }  

render(){
  return(
    <div>   

    <div className="chatbox" >
    <div className="chatboxtop">
    <img className="mypic" src={my}  />  
    <img className="closepic" src={close} onClick={this.disChangeimgchat} {...this.disChangebox} />
    <h6> {url} </h6> </div> 
    <input id='inputt' type={Text}  onKeyDown={this.HandleKeyDown} /> 
    <snap className="maseg">    </snap>
    </div> 
    <img className="imgchat" src={img2} onClick={this.disChangebox} {...this.disChangeimgchat} />     
    </div> 


  )
}

 //Funsend=()=>{

//  {
 //   if (Event.key === "Enter"){

   // axios
    // socket - > id
    
     
    


      HandleKeyDown = (event) => {
      //console.log('User pressed: ', event.key);
  
      if (event.key === 'Enter') {
        var id  = 1
        var e = ("<div>  data-id="+ id +">"+ inputtext + "</div>")
        var b = (" <br> </br> ")
       //console.log('id is:' ,e)
        var inputtext=document.getElementById("inputt");
        var  maseeg=document.getElementsByClassName('maseg')[0]
        ReactDOM.findDOMNode(maseeg).append(ReactDOM.findDOMNode(inputtext).value);
        //ReactDOM.findDOMNode(maseeg).innerHTML=(<br></br>)
        ReactDOM.findDOMNode(inputtext).value= ' ';
       //ReactDOM.findDOMNode(maseeg).append(b);



      }
    };





   
  }


















 
  
    
    

export {Chating};