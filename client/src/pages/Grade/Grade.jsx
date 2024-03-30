import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Grade.css";
import letter from "../../assets/letter.png";
import absolute from "../../assets/absolute.png";
import relative from "../../assets/relative.png";
import grades from "../../assets/grades.png";
const Grade = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />

      <div className="App">
        <header className="App-header">
          <img src={grades} className="App-logo" alt="vtop site" />
          <h1>Grading system in VIT-B</h1>
        </header>
        <main className="App-main">
          <section className="App-section">
          <p>
          This guide delves into the VIT grading system, the computation of grades, GPA, and CGPA at VIT, and the method for converting CGPA to percentage using the VIT CGPA calculator.
           </p>
            <h2>What is GPA?</h2><p> 
            GPA, or Grade Point Average, serves as a numerical representation of a student's performance within a semester. It's derived by averaging the grade points earned across all courses during that semester
           </p>
            <h2>What is CGPA?</h2><p>
            CGPA, or Cumulative Grade Point Average, reflects a student's overall academic performance. It's the weighted average of grade points accumulated throughout the entire course from the first semester onwards.
            </p>
            <h2>Difference between CGPA and GPA</h2>
            <p>
            While both CGPA and GPA gives academic performance, a fundamental distinction lies between them. GPA calculates the average grade points for a single semester across all courses, whereas CGPA computes the average grade points for the entire course duration. GPA pertains to a single semester, while CGPA encompasses the entire course timeline.
            </p>
            <h2>VIT grading system</h2>
            <p>
            The students get a 'Letter Grade' in every registered course at the end of a semester, showing the results of qualitative and quantitative assessments of a student's performance. A student is declared to have passed the course if he earns any of the performance grades: S, A, B, C, D, E, or P. The course's overall grade depends on the course component's credit ratio.
            </p>
            A student is declared to have passed on meeting the following conditions:
            <p>
                <ul>
                <li>on securing a minimum of 40% marks in the theory Final Assessment Test alone.</li>
                <li>on securing a minimum of 50% marks, out of the total marks awarded to the laboratory or project components.</li>
                <li>on securing a minimum of 50% marks, out of the total marks awarded to the course, for all other courses except the 'theory only course.'</li>
                </ul>
            </p>
            Students failing to meet the above passing criteria are given an F grade, meaning they must re-register the course to clear it. Grade F is given to the students:
            <p><ul>
                <li>who fail to clear the course because of their poor performance.</li>
                <li>whose total of the course does not meet the passing range, although the student may have cleared all the components individually.</li>
            </ul></p>
            Students who fail to write the Final Assessment Test for valid medical reasons are initially awarded an 'N' grade, but they are eligible to apply for a supplementary Final Assessment Test. After the supplementary Final Assessment Test, the 'N' grade will be converted into a performance grade. The grade 'N' is divided into 4 subcategories. These are:
            <p><ul>
              <li>N1: awarded to students who failed to clear one or more course components.</li>  
              <li>N2: awarded to students who were debarred due to lack of attendance.</li>
              <li>N3: awarded to students who were absent in the Final Assessment Test.</li>
              <li>N4: awarded to students who were debarred in the Final Assessment Test due to indiscipline or malpractice.</li>
                </ul></p>
            <h2 style={{marginLeft:"26%"}}>VIT Letter to Grade Point Conversion Table</h2>
            <div>
      <img src={letter} alt="letter to grade" className="img" />
    </div>  
            <h2>How are VIT grades calculated?</h2>
            <p>The Letter Grade awarded to the students for their performance in a course is based on two Grading concepts. These are:</p>
            <p><ul>
                <li>Absolute Grading</li>
                <li>Relative Grading</li>
                </ul></p>
            <p>
            <h3>Absolute Grading:</h3>
             The absolute grading concept is adopted when the strength of the class is less than or equal to 10 in a theory or lab-embedded theory course.
            </p>
            <div>
      <img src={absolute} style={{height:"300px",width:"600px"}} alt="letter to grade" className="img" />
    </div> <p>
        <h3>Relative Grading:</h3>
        The relative grading concept is adopted when the strength of the class is more than 10 in a theory or lab-embedded theory course. The grades are awarded to students according to their performance relative to the other students in the same class. The class average mark is taken as the midpoint of the B grade, and the other grades are finalized relative to this and depending on the sigma (σ, standard deviation) value.

        </p>  <div>
      <img src={relative} style={{height:"300px",width:"600px"}} alt="letter to grade" className="img" />
    </div>  
        <h2>How to calculate GPA at VIT?</h2><p>
        VIT considers two parameters while calculating GPA - grades obtained and corresponding credits assigned. VIT has assigned each Letter Grade some numeric Grade points, like S - 10, A - 9, B - 8, C - 7, D - 6, E - 5, F - 0
        </p>
        <h4>GPA = (Grades*Credits)/Credits</h4>
        <p>Suppose a student has scored S (Credits - 5) in Physics, A (Credits - 2) in Discrete Math, A (Credits - 4) in Programming Language, B (Credits - 4) in Database, and -C (Credits - 5) in Oracle, then the GPA will be calculated as,
        <h4>(10*5)+(9*2)+(9*4)+(8*4)+(7*5)/(5+2+4+4+5) = 8.55</h4>
</p>    <h2>How to calculate CGPA at VIT</h2>
    <p>The formula to calculate CGPA at VIT is as follows:<br></br>
        𝐶𝐺𝑃𝐴 = ∑ (𝐶𝑖 ∗ 𝐺𝑃) / ∑ 𝐶𝑖 <br></br>
        <h4><a href="https://cgpa-calculator.rajchandra.me/">CGPA Calculator link</a></h4>
Where:<ul>
    <li>
    Ci is the number of credits for the course,
    </li><li>
    GP is the grade points earned
    </li><li>
    i is the courses registered in all semesters
    </li>
</ul>
</p>
    <h2>How to convert VIT CGPA to percentage?</h2>
    <p>According to VIT university regulations, CGPA is converted to the percentage using the following formula:
    <h4>Percentage equivalent of CGPA = CGPA * 10</h4>
    For example, if the CGPA of a student is 8.25, then its percentage equivalent will be 82.5%.
    </p>
    <h2>FAQs:</h2><p>
        <h4>1. How to calculate a CGPA of 5.77 percentage in VIT?</h4>
        It's pretty simple to convert a CGPA to a percentage, just multiply the CGPA by 10. So 5.77 CGPA will be 57.7% in VIT.
        <h4>2. What is a good CGPA in VIT?</h4>
        A CGPA of more than 9 is generally considered pretty good. However, for placements in reputed product-based companies like CISCO, PayPal, etc., a CGPA of 8.7 or more is sufficient.
        <h4>3. What does S grade mean in VIT?</h4>
        S grade is the highest performance grade in VIT, having 10-grade points. If a student has been awarded an S grade, it means he has obtained 90 or more marks in the course.
    </p>
          
          </section>
        </main>
      </div>

    </div>
  );
};

export default Grade;