import React from 'react';
import './Login.css';
import axios from 'axios';
import { Button,Input,FormControl,AppBar   } from '@material-ui/core';
import {Link} from 'react-router-dom';

class Register extends React.Component{
    constructor(props){
        super(props)
         this.state={
        names:'',
        dobs:'',
        gender: '',
        address: '',
        address2:'',
        cellphoneNo:'',
        homePhone: '',      
        email:'',
        password: '',
    }
    }
   
    handleChange = e => {
            this.setState({[e.target.name]:e.target.value})
        }

        

    onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log(this.state);
<<<<<<< HEAD
<<<<<<< HEAD
         axios.post('http://localhost:8080/address/create/', this.state)
         axios.post('http://localhost:8080/person/create/',this.state)
=======
        axios.post('http://localhost:8080/address/create/',this.state)
        axios.post('http://localhost:8080/person/create/',this.state)
>>>>>>> 4c15051c0a9009f41fc8012d112fdbb74d96cf1b
        axios.post('http://localhost:8080/contact/create/',this.state)
         .then(response =>{
             console.log(response)
         }).catch(error=>{
            console.log(error)

         })
<<<<<<< HEAD
=======
        //axios.post('http://localhost:8080/address/create/',this.state)
        //axios.post('http://localhost:8080/person/create/',this.state)
        //axios.post('http://localhost:8080/contact/create/',this.state)
        //axios.get("http://localhost:8080/person/read/164909fe-0a81-490b-901a-d22b48abb780")
        axios.get("http://localhost:8080/person/all/")
            .then(function (response) {
            console.log(response);
             })
        
        
>>>>>>> d2309317cec9b12965e83e34591499d1cd46e350

         
=======
>>>>>>> 4c15051c0a9009f41fc8012d112fdbb74d96cf1b

    }
    render() {
        const { name,dob,gender,address,address2,cellphoneNo,homePhone,email,password} = this.state;
        return (
              <div className="container">
                  <AppBar color="primary" position="static">
                      <h1  style = {{flex: 1 }}>Register</h1>
                      </AppBar>
                <FormControl style = {{margin: 50 }} onSubmit={this.onSubmitHandler}>
                    <Input type="text" style = {{width: 500}} name="names   " placeholder="Full Name" className="form-control" value={name} onChange={this.handleChange}/>
                    <br></br>
                    <Input type="date" name="dobs" placeholder="DOB"  className="form-control" value={dob} onChange={this.handleChange}/>
                    <br></br>
                    <Input type="text" name="gender" placeholder="Gender" value={gender}  className="form-control" onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="address" placeholder="Address Line 1"  className="form-control" value={address} onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="address2" placeholder="Address Line 2"  className="form-control" value={address2}  onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="cellphoneNo" placeholder="Phone Number"  className="form-control" value={cellphoneNo}  onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="homePhone" placeholder="Phone Number"  className="form-control" value={homePhone}  onChange= {this.handleChange}/>
                    <br></br>
                    <Input type="text" name="email" placeholder="Email Address"  className="form-control" value={email}  onChange= {this.handleChange}/>
                   <br></br>
                    <Input type="password" name="password" placeholder="Password"  className="form-control" value={password}  onChange= {this.handleChange}/>

                 
                </FormControl>
                <br></br>
                <FormControl>
                    
                <Button color="primary" type="submit" onClick={this.onSubmitHandler} variant="contained">Register</Button>
                <br></br>
                    <Link to="/Login">
                    <Button color="primary" variant="contained">Cancel</Button>   
                    </Link>
                    <br></br>    
                    </FormControl> 
                

              </div>  
          
      );
    }	
}

export default Register;
