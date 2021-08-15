import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetItem = () => {
    // const[meetitem,setmeetitem] = useState([items:{}]);

    const [meetitem, setmeetitem] = useState({ items: [] });

    // const arr =[1,2,3]
    // const arr2=[...arr]

    // axios.get('/api/meetings-list-get').then(response =>{
    //     setmeetitem(meetitem.items=response.data);
    //     console.log(meetitem.items[0]);
    // }).catch(err => console.log(err));

    // meetitem.items=[1,2,3,Math.random()];
    // console.log(meetitem.items);

    useEffect(() => {
        setTimeout(() => {
            axios.get('/api/meetings-list-get', { withCredentials: true }).then(response => {
                setmeetitem({ items: [...response.data] })
                // setmeetitem({items:response.data})
                console.log(meetitem);
            })
                .catch(err => {
                    console.log(err);
                })
        }, 1000)

    }, []);

    return (
        <>
            <div>

                {meetitem.items.length ? meetitem.items.map((item) =>
                    <div key={item._id} style={{ border: "1px solid green", marginTop: "2em" }} >
                        {/* <div class="col-md-8"> */}
                        <p>{item.Hostname}</p>
                        <p>{item.Book}</p>
                        <p>{item.Genre}</p>
                        <a href={item.MeetingLink} target="_blank">{item.MeetingLink}</a>
                        {/* </div>  */}

                    </div>
                ) : "loading"}
            </div>

            {/* <div>
                {JSON.stringify(meetitem)}
            </div> */}

            {/* <p>hi</p> */}
            {/* style={{marginTop:"2em",border:"1px solid green"}} */}



        </>
    )
}
export default MeetItem;