import React from 'react'
import './Login.css';
import { Button,Input,FormControl,AppBar   } from '@material-ui/core';
import {Link} from 'react-router-dom';


class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }
    handleChange = (e) =>{
        const{name,value}= e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e)=>{
        
    }
    render(){
        return(
            <div>
                <div>
                 
                </div>
                <AppBar position="static"><h1>Login</h1></AppBar>
                
                <FormControl style = {{margin: 50 }} onSubmit = {this.handleSubmit}>
                     <Input style = {{width: 500}} type="text" name="email" placeholder="ID" required onChange= {this.handleChange}/>
                     <br></br>
                     <Input type="password" name="pwd" placeholder="*******" required onChange= {this.handleChange}/>
                    
                </FormControl>
                <br></br>
                <FormControl>
                <Link to="/Home">
                    <Button  color="primary"variant="contained" onSubmit >Login</Button>
                    </Link>
                    <br></br>
                    <Link to="/Register">
                    <Button color="primary" variant="contained" onSubmit >Register</Button>
                    </Link>
                </FormControl>
            </div>
        )   
    }   
}
    export default Login;


