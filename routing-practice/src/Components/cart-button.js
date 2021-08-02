import React from 'react';

const Cartbutton = () =>
{
    return(
        <div class="border border-primary d-flex justify-content-between p-2">

            <button type="button" class="btn btn-primary position-relative">
            <i class="fa fa-shopping-cart "></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                10
                <span class="visually-hidden">unread messages</span>
            </span>
            </button>


        </div>

    )
}

export default Cartbutton;

// {<div class="border border-primary d-flex justify-content-between p-2">
//     <div class="border border-danger me-2 ms-1"><i class="fa fa-shopping-cart "></i></div>
//      <p><span>0</span> Items - Rs <span>0.00</span></p>
//  </div>}