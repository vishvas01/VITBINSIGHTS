import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Courses.css";
import book from "../../assets/book.png";
import coursess from "../../assets/coursess.pdf"

const Courses = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />

      <div className="App">
        <header className="App-header">
          <img src={book} className="App-logo" alt="book" />
          <h1>CURRICULUM & SYLLABUS</h1>
        </header>
        <main className="App-main">
          <section className="App-section">
          <p>
          

<b>Programme core</b> courses are the courses that are common for everybody in the particular branch and will have to be done by everybody in that particular branch without fail.
<br></br>
<b>Programme electives</b> are a list of subjects that are offered to everybody in that particular program and people can choose what courses they want to do out of the given list. 
<br></br><b>University core</b> courses are the courses that are common for everybody in the university and will have to be done by everyone without fail.
<br></br><b>University electives</b> are also elective that are given to everybody in the university and the student can choose the courses that they want to do out of the given list.
<br></br><p></p>
There are a minimum number of credits that need to be completed in the electives of both University and Program.
                </p>
            <h3 style={{marginLeft:"35%"}}>Details are given in below PDF:</h3>
            <div className="pdf-container">
      <iframe src={coursess} title="Embedded PDF" width="100%" height="600px" />
    </div>
          </section>
        </main>
      </div>

    </div>
  );
};

export default Courses;