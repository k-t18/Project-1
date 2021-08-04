import React,{useState,useEffect} from 'react';
import axios from 'axios';

const MeetItem = () =>
{
    // const[meetitem,setmeetitem] = useState([items:{}]);

    const[meetitem,setmeetitem] =useState({items:[]});

    // const arr =[1,2,3]
    // const arr2=[...arr]

    // axios.get('/api/meetings-list-get').then(response =>{
    //     setmeetitem(meetitem.items=response.data);
    //     console.log(meetitem.items[0]);
    // }).catch(err => console.log(err));

    // meetitem.items=[1,2,3,Math.random()];
    // console.log(meetitem.items);

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
                // setmeetitem(meetitem.items=response.data);
                setmeetitem({items:[...response.data]})

                // setmeetitem({items:response.data})

                console.log(meetitem);

                // setmeetitem({meetitem:response.data});
                // const map1 = meetitem.items.map( (item) =>
                //     item._id
                // );
                // console.log(map1);

            })
            .catch(err =>{
                console.log(err);  
            })
        },1000)

    },[]);

    // console.log(meetitem.items);
    
    return(
        <>
           <div>

               {meetitem.items.length ? meetitem.items.map( (item) =>
               <p>{item._id}</p>) :"loading"}
           </div>

            <div>
                {JSON.stringify(meetitem)}
            </div>

            {/* <p>hi</p> */}



        </>
    )
}
export default MeetItem;