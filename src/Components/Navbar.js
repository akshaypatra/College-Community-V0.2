import React from "react";
import { Link ,useLocation,useNavigate} from "react-router-dom";

export default function Navbar(props) {
  let location=useLocation();
  // useEffect(()=>{
  //   console.log(location.pathname);
  
  // },[location]);
  const navigate=useNavigate();

  const handlelogout=()=>{
    localStorage.removeItem('token');
    navigate("/login");
    //props.showAlert("Logged Out Successfully","success");
  }


  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          College Community
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className={`nav-link  ${location.pathname==='/'?"active":""}`} aria-current="page" to="/">
              Home
            </Link>
            {/* <Link className={`nav-link  ${location.pathname==='/connect'?"active":""}`} to="/connect">
              Connect
            </Link> */}
            <Link className={`nav-link  ${location.pathname==='/studymaterial'?"active":""}`} to="/studymaterial">
              Study Material
            </Link>
            <Link className={`nav-link  ${location.pathname==='/helpandsupport'?"active":""}`} to="/helpandsupport" >
              Help & Support
            </Link>
          </div>

          
        </div>
        {!localStorage.getItem('token')?<form className="d-flex">
            <Link className="btn btn-primary mx-1" to="/signup" role="button">Sign Up</Link>
            <Link className="btn btn-primary mx-1" to="/login" role="button">Log In</Link>
          </form>:<button onClick={handlelogout} className="btn btn-primary">Log Out</button>}
      </div>
    </nav>
  );
}
