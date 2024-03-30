import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";

const Widget = () => {
  return (
    <div className="widget">
      <h4>Recent Placement Queries</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
           Is observability key to the future of software (and your DevOps
            career)?
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>How valuable are your project's background and vision?</p>
        </div>
      </div>
      <h4>Recent questions</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>What is Campus Placement and off campus placement?</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>
          Apart from Technical Skills, interviewers will also ask puzzles and logical reasoning questions. 
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
          For most companies, preparing up to Intermediate coding should be enough.
          </p>
        </div>
      </div>
      <h4>Hot FAQs</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>
          What is the first step in campus placements?
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
          which language is the best for placements?
          </p>
        </div>
        {/* <div className="right-sidebar-div-2">
          <p>14</p>
          <p>Is a link to the "How to ask" help page a useful comment?</p>
        </div> */}
      </div>
    </div>
  );
};

export default Widget;
