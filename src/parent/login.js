import React, {Component} from "react";


const MemberPage=() =>{
    return(
        <div className="memrtitle">
            <h3>  :جهت ثبت نام فرم زیر را تکمیل بفرمایید</h3>
            <h4>  .اگر قبلا ثبت نام نمودید از بخش ورود، وارد شوید</h4>
            <FormMember/>
        </div>
    );
}
class FormMember extends Component{
    constructor(props) {
        super(props)
        this.state={
            firstName:'',
            userName:'',
            password:'',
            repassword:'',
        }


        this.handleSubmit=this.handleSubmit.bind(this);
    }
    firsthandler=(event)=>{
        this.setState({
            firstName:event.target.value
        })
    }

    lasthandler=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }

    passhandler=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    genderhandler=(event)=>{
        this.setState({
            repassword:event.target.value
        })
    }

    handleSubmit=(event)=>{
       alert('${this.state.firstName} ${this.state.userName} Registered Successful!!!!!');
        console.log(this.state);
        this.setState({
                firstName:'',
                userName:'',
                password:'',
                repassword:'',
            })
        event.preventDefault()
    }

    render() {
        return(
            <div className="memrform">
                <form onSubmit={this.handleSubmit}>
                   <input type='text' value={this.state.firstName} onChange={this.firsthandler}/> :نام  <br/>
                    <input type='text' value={this.state.userName} onChange={this.lasthandler}/> : نام کاربری<br/>
                    <input type='password' value={this.state.password} onChange={this.passhandler}/> :پسورد<br/>
                    <input type='password' value={this.state.repassword} onChange={this.passhandler}/> :تکرار پسور <br/><br/>

                    <button type='submit'> ثبت نام  </button>
                </form>
            </div>
        )
    }




}










export{MemberPage};