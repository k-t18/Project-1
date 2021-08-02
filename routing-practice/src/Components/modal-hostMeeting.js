import e from 'cors';
import React,{useState} from 'react'

import '../App.css';

const Modal = () =>
{

    // const[hostname,sethostname] = useState();
    const[bookname,setbookname] = useState('');
    const[genre,setgenre] = useState('');
    const[date,setdate] = useState('');
    const[meetlink,setmeetlink] = useState('');

    const modalSubmit = (e) =>
    {
        e.preventDefault();
        setbookname('');
        setgenre('');
        setdate('');
        setmeetlink('');

        // const {hostname,bookname,genre} = details;
        console.log([bookname,genre,date,meetlink]);
    }

    return(
        <div class="modal fade " id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-fullscreen-md-down">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center" id="exampleModalLabel">Schedule a V-Meet</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div>
                            <div class="row">
                                <div class="col-md-4 "  >
                                    <img  class="img-fluid h-100 m-0 modal-img"  src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/05/featured-look-good-zoom.png" alt="meeting-pic"/>
                                </div>

                                <div  class="col-md-8  m-0 text-center" >
                                    <p class="mt-3">Knowing People Isn't That Bad</p>
                                    <p>
                                        Schedule a V-Meet to Socialize with Others <span> "VIRTUALLY" </span>
                                    </p>

                                    <form onSubmit={modalSubmit}>
                                        <div>
                                            <label htmlFor="username">Host Name</label>
                                                <input class="ms-3 custom-input" 
                                                type="text" 
                                                name="username" 
                                                value="username" 
                                                id="username"
                                                required
                                                autoComplete="off" disabled/>
                                        </div><br></br>

                                        <div>
                                            <label htmlFor="bookname"> Book Name </label>
                                                <input class="ms-3 custom-input" 
                                                type="text" 
                                                name="bookname"
                                                id="bookname"
                                                value={bookname}
                                                onChange={(e) => setbookname(e.target.value)}
                                                required
                                                autoFocus
                                                autoComplete="off"/>
                                        </div><br></br>

                                        <div>
                                            <label htmlFor="genre"> Genre </label>
                                                <input class="ms-5 custom-input" 
                                                type="text" 
                                                name="genre"
                                                id="genre"
                                                value={genre}
                                                onChange={(e) => setgenre(e.target.value)}
                                                required
                                                autoComplete="off"/>
                                        </div><br></br>

                                        <div>
                                            <label htmlFor="date"> Date </label>
                                                <input class="ms-5 custom-input" 
                                                type="date" 
                                                name="date"
                                                id="date"
                                                value={date}
                                                onChange={(e) => setdate(e.target.value)}
                                                required
                                                autoComplete="off"/>
                                        </div><br></br>

                                        <div>
                                            <label htmlFor="meetlink"> Meet Link </label>
                                                <input class="ms-3 custom-input"  
                                                type="text" 
                                                name="meetlink"
                                                id="meetlink"
                                                value={meetlink}
                                                onChange={(e) => setmeetlink(e.target.value)}
                                                required
                                                autoComplete="off"/>
                                        </div><br></br>
                                        
                                        {/* <button type="button" class="btn btn-primary" >Scheduled a V-Meet</button> */}
                                    </form>
                                </div>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={modalSubmit} >Scheduled a V-Meet</button>
                        <button type="button" class="btn btn-danger " data-bs-dismiss="modal">Cancel</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Modal;

// {<div class="modal-footer">
// <button type="button" class="btn btn-primary" >Scheduled a V-Meet</button>
// <button type="button" class="btn btn-danger " data-bs-dismiss="modal">Cancel</button>
// </div>}
