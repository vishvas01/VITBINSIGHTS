import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import group from "../../assets/group.png";
import hashtag from "../../assets/hashtag.png";
import eye from "../../assets/eye.png";
import ffcss from "../../assets/ffcss.png";
import book from "../../assets/book.png";
import grades from "../../assets/grades.png";
import home from "../../assets/home.png";
import faq from "../../assets/faq.png";
import map from "../../assets/map.png";
import vtopp from "../../assets/vtopp.png";
import users from "../../assets/users.png";


const LeftSidebar = () => {

  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <button className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
          <img style={{height:"20px",width:"20px"}} src={home} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <div className="p3">
            <p>DISCUSSION</p>
          </div>
          <button  className="nav-btn">
            <NavLink
              to="/Questions"
              className="side-nav-links"
              activeclassname="active"
            >
              <img style={{height:"20px",width:"20px"}} src={faq} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}> Questions </p>
            </NavLink>
          </button>
          <button  className="nav-btn">
            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              // style={{ paddingLeft: "40px" }}
            >
              <img style={{height:"20px",width:"20px"}} src={hashtag} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Tags</p>
            </NavLink>
          </button>
          <button  className="nav-btn">
            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              // style={{ paddingLeft: "40px" }}
            >
               <img style={{height:"20px",width:"20px"}} src={group} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Users</p>
            </NavLink>
          </button>
        </div>
        <div className="side-nav-div">
          <div className="p3">
            <p >PLACEMENT</p>
          </div>
          <button  className="nav-btn">
            <NavLink
              to="/Overview"
              className="side-nav-links"
              activeclassname="active"
              // style={{ paddingLeft: "40px" }}
            >
              <img style={{height:"20px",width:"20px"}} src={eye} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Overview</p>
            </NavLink>
          </button>
          <button  className="nav-btn">
            <NavLink
              to="/Guide"
              className="side-nav-links"
              activeclassname="active"
              // style={{ paddingLeft: "40px" }}
            >
              <img style={{height:"20px",width:"20px"}} src={map} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Guide</p>
            </NavLink>
          </button>
          
        </div>
        <div className="side-nav-div">
          <div className="p3">
            <p>ACADEMICS</p>
          </div>
          <button  className="nav-btn">
            <NavLink
              to="/Vtop"
              className="side-nav-links"
              activeclassname="active"
              // style={{ paddingLeft: "40px" }}
            >
               <img style={{height:"20px",width:"20px"}} src={vtopp} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Vtop</p>
            </NavLink>
          </button>
          <button  className="nav-btn">
            <NavLink
              to="/Ffcs"
              className="side-nav-links"
              activeclassname="active"
              // style={{ paddingLeft: "40px" }}
            >
               <img style={{height:"20px",width:"20px"}} src={ffcss} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>FFCS</p>
            </NavLink>
          </button>
          <button  className="nav-btn">
            <NavLink
              to="/Courses"
              className="side-nav-links"
              activeclassname="active"
              // style={{ paddingLeft: "40px" }}
            >
              <img style={{height:"20px",width:"20px"}} src={book} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Courses</p>
            </NavLink>
          </button>
          <button  className="nav-btn">
            <NavLink
              to="/Grade"
              className="side-nav-links"
              activeclassname="active"
              // style={{ paddingLeft: "40px" }}
            >
              <img style={{height:"20px",width:"20px"}} src={grades} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Grade System</p>
            </NavLink>
          </button>
          
        </div>
        <div className="side-nav-div">
          <div className="p3">
            <p>CO-CURRICULAR</p>
          </div>
          <button  className="nav-btn">
            <NavLink
              to="/Clubs"
              className="side-nav-links"
              activeclassname="active"
              // style={{ paddingLeft: "40px" }}
            >
               <img style={{height:"20px",width:"20px"}} src={users} alt="Globe" />
              <p style={{ paddingLeft: "10px" }}>Clubs</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
