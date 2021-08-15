import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import '../App.css';
import pic from "../imgs/download2.jpg";
import Cartbutton from "./cart-button";


const Nav = (props) => {
  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    window.location.reload();
    history.push('./');
  }

  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <div class=" logo-link ms-3 mt-2" style={{ textDecoration: "none" }}>
          <Link to="/">
            <img src={pic} alt=" " style={{ height: "100px", width: "100px" }} />
          </Link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse border border-primary " id="navbarSupportedContent">


          {localStorage.getItem("authToken") ? <>
            <div class=" border border-primary">
              <Link style={{ textDecoration: "none" }} to='/meetings'>
                <button class="btn">
                  V-Meet
                </button>
              </Link>
            </div>

            <div class=" border border-primary">
              <Link style={{ textDecoration: "none" }} to='/newBooks'>
                <button class="btn">
                  Buy Books
                </button>
              </Link>
            </div>

            <div class=" border border-primary">
              <Link style={{ textDecoration: "none" }} to='/oldBooks'>
                <button class="btn">
                  Sell Books
                </button>
              </Link>
            </div>

            <div class=" border border-primary">
              <Link style={{ textDecoration: "none" }} to='/about'>
                <button class="btn">
                  About
                </button>
              </Link>
            </div> </> : <><div class="dropdown">
              <button class="btn dropdown-toggle ms-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Sign Up
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">



                <div class="ms-2">
                  <Link to='/login'>
                    Login
                  </Link>
                </div>

                <li><hr class="dropdown-divider" /></li>
                <div class="ms-2">
                  <Link to='/register'>
                    Create New Acount
                  </Link>
                </div>
              </ul>

            </div>

            <div class=" border border-primary">
              <Link style={{ textDecoration: "none" }} to='/about'>
                <button class="btn">
                  About
                </button>
              </Link>
            </div> </>}

        </div>

      </div>
      <div class="container">
        <form class="d-flex ">
          <input class=" me-3 ms-1" type="search" size="35" placeholder="Search" aria-label="Search" />
          <button class="me-3   btn btn-outline-success" type="submit"><i class="fa fa-search"></i></button>
        </form>
        {localStorage.getItem("authToken") ?
          <div className="cart-logout">
            <Cartbutton />
            {/* <div className="logout-div"> */}
            <button onClick={logoutHandler} className="logout-btn">Logout</button>
            {/* </div>  */}


          </div> : ''}

      </div>

    </nav>
  )
}

export default Nav;