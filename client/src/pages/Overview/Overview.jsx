import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import over from "../../assets/over.png";
import "./Overview.css";
import product from "../../assets/product.jpg";
import service from "../../assets/service.jpg";
import cs from "../../assets/cs.png";
import noncs from "../../assets/noncs.png";
import super1 from "../../assets/super1.png";

const Overview = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="App">
        <header className="App-header">
          <img src={over} className="App-logo" alt="briefcase" />
          <h1>How To Prepare For Placements</h1>
        </header>
        <main className="App-main">
          <section className="App-section">
          <h2>What is Campus Placement?</h2>
            <div className="text-video-container">
              
              {/* Text content */}
              <div className="text-content">
                
                <p>
                Campus placement or recruitment is a program conducted within a university or other educational institution to provide jobs to students who are about to graduate.
                <br></br>In this program, colleges partner with corporations that want to hire students.There are two types of corporations that hire freshers. These are:-
                </p>
                <ul><p>
              <li>Service-Based Companies:</li>
              TCS, Infosys, Wipro, Cognizant, etc.
              <li>Product-Based Companies:</li>
              Goldman Sachs, Adobe, Microsoft, etc.</p>
            </ul>
              </div>

              {/* Video content */}
              <div className="video-content">
                <iframe
                  className="vid"
                  width="500"
                  height="300"
                  src="https://www.youtube.com/embed/vRWCJuSBs1I?si=fiK3U7vbLoHNt3lP"
                  title="YouTube video player"
                  frameborder="3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </section>
          <section className="App-section">
            <h2>Steps to Prepare for Placements</h2>
            <p>
            The placement processes for product-based and service-based companies vary slightly. The flowcharts given below explain the recruitment process of these companies.
            </p>
            <h3 style={{marginLeft:"30%"}}>Placement Process for Product-Based Companies</h3>
            <img src={product} className="imaged" alt="diagram" />
            <h3 style={{marginLeft:"30%"}}>Placement Process for Service-Based Companies</h3>
            <img src={service} className="imaged" alt="diagram" />
          </section>
          <section className="App-section">
            <h2>Roadmaps To Get Placed</h2>
            <p>
            We have created roadmaps that you can follow when preparing for placement exams. Go through each of them and pick the one which suits your needs the best.
            </p>
            <h3 style={{marginLeft:"30%"}}>Roadmap to Prepare for Placements (General)</h3>
            <img src={cs} style={{height:"400px",width:"1000px"}}className="imaged" alt="diagram" />
            <h3 style={{marginLeft:"30%"}}>Roadmap to Prepare for Placements (Non-CS/IT)</h3>
            <img src={noncs} style={{height:"400px",width:"1000px"}} className="imaged" alt="diagram" />
            <h3 style={{marginLeft:"30%"}}>Roadmap to Prepare for Placements (10+ lpa Packages)</h3>
            <img src={super1} style={{height:"400px",width:"1000px"}} className="imaged" alt="diagram" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Overview;