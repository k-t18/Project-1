import React from 'react';
import { useHistory } from 'react-router';
import '../App.css';
import Modal from './modal-hostMeeting';
import MeetItem from './meetingItems';
import SideList from './side-list-item';

const Meetings = () => {

    const history = useHistory();
    if (!localStorage.getItem("authToken")) {
        history.push('/');
    }


    return (
        <>
            <div class="container mt-3 border w-50">
                <div class="row">
                    <ul class="nav nav-pills justify-content-center ">
                        <li class="nav-item">
                            <button type="button" class="btn btn-primary nav-link text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal" >host a meet</button>
                            <Modal />
                        </li>
                        <li class="nav-item">
                            <button class="btn btn-primary nav-link text-uppercase" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">attended sessions</button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="offcanvas offcanvas-end" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasWithBackdropLabel">Sessions Attended</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <p>.....</p>
                </div>
            </div>

            <div class="row">
                <SideList />
                <div class="col-md-8">
                    <MeetItem />
                </div>
            </div>


        </>

    )
}

export default Meetings;

