import React , { Component } from "react";
import {Route,Switch} from "react-router-dom";
import {BrowserRouter,Routes} from "react-router-dom";
import {Homepage} from './parent/home'
import {MemberPage} from './parent/login';
import { Chating } from './parent/chat';
import {LoginSet} from './parent/member'




class App extends Component {
  render() {

return (
   <div className="App">
    <BrowserRouter>
      <Homepage />

      <Chating />
      

      
       <Routes>

       <Route exact path="/login" element={<MemberPage/>}/>
       <Route  path="/member" element={<LoginSet/>}/>

     
      </Routes>

     </BrowserRouter>

    </div>
    
  );
}
}

export default App;



