import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import '../App.css';

const Login =() =>
{
    const [error,setError] = useState('');
    const history = useHistory();
    const [inputDetails,setDetails] = useState({
        email:'',
        password:''
    });

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setDetails({
            ...inputDetails,
            [name]:value,
        });
    };

    useEffect(() => 
    {
        if(localStorage.getItem('authToken'))
        {
            history.push('/');
        }
    },[])

    const loginSubmit = async (e) =>
    {
        e.preventDefault();

        const config ={
            header:{
                "Content-Type":"application/json"
            },
        };

        try {
            const {data} = await axios.post("/api/auth/login",{email:inputDetails.email,password:inputDetails.password},config);
            localStorage.setItem("authToken",data.token);
            history.push('/');
        } catch (error) {
            
        }
        if(!localStorage.getItem("authToken"))
        {
            setTimeout(() =>
            {
                setError('')
            },4000)
            return setError("Invalid User Credentials");
        };

        setDetails({
            email:'',
            password:''
        });
        const details = [{email:inputDetails.email, password:inputDetails.password}];
        console.log(details);

    }
    return(
        <section id="section-form">
        <div class=" ">
            
            <div class="row " >
                <div class="col-10 col-sm-12 col-md-6 mt-3 custom-form">
                    <form onSubmit={loginSubmit} class="" >
                        <div class="text-center fs-1 mt-5">LOGIN NOW</div>
                        <div class="text-center mt-3 fs-3"> Exciting Surprises Waiting </div>
                        <br />{error && <div> <span>{error}</span></div>}

                        <div className=" mt-3 registration-form">

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
                                autoComplete="off"
                            />


                            <input type="submit"  class="btn bg-info text-white p-2" value="Login"/>

                        </div>
                        
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

export default Login;