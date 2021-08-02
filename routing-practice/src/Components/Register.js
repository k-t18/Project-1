import React,{useState,useEffect} from "react";
// import {useForm} from 'react-form-hook';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import '../App.css';

const Register = () =>
{

    useEffect(() => 
    {
        if(localStorage.getItem('authToken'))
        {
            history.push('/');
        }
    },[])

    const history = useHistory();
    const [inputDetails,setDetails] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });

    const [error,setError] = useState("");

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setDetails({
            ...inputDetails,
            [name]:value,
        });
    };

    const handleSubmit = async (e) =>
    {
        e.preventDefault();

        const config ={
            header:{
                "Content-Type":"application/json"
            },   
            // body:{username:inputDetails.username,email:inputDetails.email,password:inputDetails.password},
            // method:"POST"
        };

        if (inputDetails.password !== inputDetails.confirmPassword)
        {
            setDetails({
                username:inputDetails.username,
                email:inputDetails.email,
                password:'',
                confirmPassword:''
            })
            setTimeout(() =>
            {
               setError("")
            },5000);
            return setError("Passwords Don't Match");
        };

        try {

            // fetch("http://localhost:3000/api/auth/register",config)
            // .then(data=>{return data.json()})
            // .then(res =>{console.log(res)})
            // .catch(error=>{console.log(error)})

            const {data} = await axios.post("/api/auth/register",{username:inputDetails.username,email:inputDetails.email,password:inputDetails.password},config);
            localStorage.setItem("authToken",data.token);
            history.push("/");
        } catch (error) {
            // setError=(error.response.data.error);
            // setTimeout(()=>
            // {
            //     setError("");
            // },5000)
            }
        

        setDetails({
            username:'',
            email:'',
            password:'',
            confirmPassword:''
        });   

        const details = {username:inputDetails.username,
            EmailID:inputDetails.email,
            Password:inputDetails.password};

        console.log(details);

        // const token = await loginUser([{
        //     firstName:inputDetails.fname,
        //     Lastname:inputDetails.lname,
        //     EmailID:inputDetails.email}])

        // setToken(token);
               
    }
    return(
        <section id="section-form">
            <div class=" ">
                
                <div class="row " >
                    <div class="col-10 col-sm-12 col-md-6 mt-3 custom-form">
                        <form onSubmit={handleSubmit} class="" >
                            <div class="text-center fs-1">Get started with us today!</div>
                            <div class="text-center mt-3 fs-3">Create your Account Now to Attend Virtual Book Reading Sessions</div>
                            {error && <div className="error-form"><span >{error}</span></div>}

                            <div className=" mt-3 registration-form">
                                <input 
                                    type="text" 
                                    size="30"
                                    name="username"
                                    placeholder="User Name"
                                    value={inputDetails.username}
                                    className="d-block p-2"
                                    onChange={handleChange}
                                    required
                                    autoComplete="off"
                                />

                                <input 
                                    className="d-block p-2"
                                    size="30"
                                    type="email" 
                                    name="email"
                                    placeholder=" Email"
                                    value={inputDetails.email}
                                    onChange={handleChange}
                                    required
                                    autoComplete="off"
                                />
                                <input 
                                    className="d-block p-2  "
                                    size="30"
                                    type="password" 
                                    name="password"
                                    placeholder=" Password"
                                    value={inputDetails.password}
                                    onChange={handleChange}
                                    required
                                    minLength="8"
                                    autoComplete="off"
                                />

                                <input 
                                    className="d-block p-2  "
                                    size="30"
                                    type="password" 
                                    name="confirmPassword"
                                    placeholder=" Confirm Password"
                                    value={inputDetails.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    minLength="8"
                                    autoComplete="off"
                                />

                                <input type="submit"  class="btn bg-info text-white p-2" value="Create New Account"/>

                            </div>
                            <div class="mt-3 text-center"> Already Have an Account? <Link to="/login">Login Here </Link> </div>
                        </form>
                    </div>

                    
                        <div class="col-12 col-sm-10 col-md-6">
                            <img src="https://sloanreview.mit.edu/wp-content/uploads/2020/05/GEN-Rogelberg-Remote-Virtual-Zoom-Meeting-Video-Conference-1290x860-1.jpg" alt="" id="img-meet" />
                        </div>
                </div>       
            </div>

        </section>
    )
}

export default Register;