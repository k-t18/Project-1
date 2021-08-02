import React,{useState,useEffect} from 'react';
import axios from 'axios';

const MeetItem = () =>
{
    // const[meetitem,setmeetitem] = useState([items:{}]);

    const[meetitem,setmeetitem] =useState({items:[]});
    useEffect( ()=>
    {
        setTimeout(() =>
        {
            axios.get('/api/meetings-list-get').then(response =>{
                // console.log(response.data);
                // setmeetitem({meetitem:response.data})
                
                // setmeetitem(meet=[{meets:[{meetitem:response.data}]}]);
                // console.log(meet[0].meets[0].meetitem);
                // setmeetitem(meetitem=[{meets:[response.data]}]);
                // setmeetitem(() =>
                // {
                //     meetitem=[{meets:[response.data]}]);
                // })
                setmeetitem(meetitem.items=response.data);
                console.log(meetitem.items[0]);

            })
            .catch(err =>{
                console.log(err);  
            })
        },1000)

    },[]);
    // axios.get('/api/meetings-list-get').then(res =>
    //     {
    //         setmeetitem({meetitem : res.data});
    //         console.log(meetitem);
    //     })
    //     .catch(err=>
    //         {
    //             console.log(err);
    //         })

    // useEffect( ()=>
    // {
    //     axios.get('/api/meetings-list-get').then(res =>
    //             {
    //                 setmeetitem({meetitem : res.data});
    //                 console.log(meetitem);
    //             })
    //             .catch(err=>
    //                 {
    //                     console.log(err);
    //                 })
    // },[meetitem])
    
    return(
        <>
            {/* <p>{meetitem.items[0].Hostname}</p> */}

            {/* <div>
                {meetitem.items.map( (item) =>
                {
                    <p id={item._id}>{item.Hostname}</p>
                })}
            </div> */}
            {/* <p>{meetitem.items.map((item) =>
            
                <p> {item.Hostname}</p>
            )}</p> */}
            {/* <div>
                {meetitem.items.forEach(item=>
                    {
                        <p>{item}</p>
                    })}
            </div> */}
        </>
    )
}
export default MeetItem;