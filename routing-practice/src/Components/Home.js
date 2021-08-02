import React,{useState} from 'react';
import Testbutton from './testButton';

const Home = () =>
{
    const [zero,setZero] = useState(0);
    const increment =()=>
    {
        (setZero(prev => prev+1));
        console.log(zero);
    }
   
    return(
        <>
        <h1>Home Page</h1>
        <button onClick={increment}>count</button>
        <Testbutton count={zero}/>
        
        </>
    )
}
export default Home;
