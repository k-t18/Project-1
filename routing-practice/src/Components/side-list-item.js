import React from 'react';

const SideList = () =>
{
    return(
        <div className="custom-list-group" >
            <div class=" list-group">
                <button type="button" class="btn btn-primary text-center  list-group-item list-group-item-action" >First Genre</button>
                <button type="button" class="btn btn-primary text-center  list-group-item list-group-item-action" >Second Genre</button>
                <button type="button" class="btn btn-primary text-center  list-group-item list-group-item-action" >Third Genre</button>
                <button type="button" class="btn btn-primary text-center list-group-item list-group-item-action" >Fourth Genre</button>
            </div>
        </div>

    )
}

export default SideList;