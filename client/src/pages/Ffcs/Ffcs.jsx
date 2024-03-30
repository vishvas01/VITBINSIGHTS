import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Ffcs.css";
import ffcss from "../../assets/ffcss.png";
const Ffcs = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />

      <div className="App">
        <header className="App-header">
          <img src={ffcss} className="App-logo" alt="vtop site" />
          <h1>Fully Flexible Credit System (FFCS)</h1>
        </header>
        <main className="App-main">
          <section className="App-section">
          <p>
          VIT, the name synonymous with world class academic excellence and for creating a student-friendly learning environment on all its campuses, has introduced Fully Flexible Credit System (FFCS), for the benefit of its students. Carefully crafted and designed towards providing amazing advantages for the next generation Engineers and Researchers, FFCS offers total freedom for the students to customise their course, depending on their interests even while catering to the wish list.  Under FFCS, a student can prepare his/her own timetable with the specific courses he/she intends to do in that semester along with the timings of classes and choice of professors.
                </p>
            <h2>What is FFCS?</h2><p>
            Academics at VIT University is based on the Fully Flexible Credit System (FFCS for short), which is VIT's very own academic invention that gives you the flexibility to shape your academic calendar (in layman's terms your daily timetable) to suit your personal needs. This system, allows you to choose courses, faculties and even your class location and timings. Each semester entails a fixed set of exams and quizzes, with a balanced proportion of practical sessions that ensure a holistic all round academic development. It might seem like a complicated system, but hey, your seniors are there to help! Least I can do, being a pass-out is to introduce you to FFCS in a proper way, but I will suggest you make seniors of your branch,& stay updated for good grades and attendance giving teachers.
            </p>
            
            <div className="text-video-container">
              {/* Text content */}
              <div className="text-content"><p>
              FFCS empowers students with a high degree of control over their academic journey. Through the implementation of slot-based timetables, students gain the flexibility to choose their preferred class timings, leading to personalized schedules. Project-based learning (PBL) fosters the application of theoretical knowledge through engaging projects, enhancing practical skill development. Students further curate their learning experience by selecting courses from within designated "baskets" and exploring interdisciplinary options from other programs. Recognizing individual needs, FFCS offers important courses in both semesters, allowing slower learners to catch up and avoid backlogs. Additionally, the program encourages early research participation even at the undergraduate level. To ensure well-rounded academic planning, advisors guide students in selecting courses based on program requirements, prerequisites, individual interests, past performance, and available offerings. Ultimately, FFCS not only provides a vast range of choices for building individual curriculums, but also fosters critical planning skills that benefit students throughout their academic careers and beyond.
              </p></div>

              {/* Video content */}
              <div className="video-content">
              <iframe width="560" height="315" className="vid" src="https://www.youtube.com/embed/ZhVGDVwJ_q8?si=tlKkeBNhmbK7fhQi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </section><div>
            <h2>Understanding FFCS</h2>
            <p>
    Honestly, best possible way to understand FFCS is to not try to understand it. However, there are few things you need to know and understand about your timetable (Advice - open your timetable while reading these points to understand it better):
    </p><p>
        <ol className="points">
            <li>Each working day has been divided into 12 slots (6 before lunch and 6 after) of 50 minutes duration each.</li>
            <li>The morning slots are christened A1, B1...G1 with corresponding afternoon slots as A2, B2...G2.The same slots have also been divided into lab hours (L1, L2…L30 as morning slots) and (L31, L32….L60 for the evening).</li>
            <li> Classes run throughout the day from 8 am to 7:30 pm. However,you will only be attending classes for the subjects you choose.</li>
            <li>Subjects are offered in the slots mentioned above. When registering for any subject, you will have the option of selecting from a number of faculty members and slots.</li>
            <li>Every Subject has a certain number of credits. The number of credits corresponds to the number of scheduled of theory classes, lectures or labs/practical classes in a week.</li>
            <li>Schools usually provide you with a course page which lists all courses (in your school) that are offered, along with the number of credits that will be given on the completion of those respective courses.It will have columns with numbers under LTPC (L-Lab, T-Theory, P-Practical, and C-no. of Credits for the course).Refer course page in your VTOP student login for more information.</li>
            <li>The registration for lab classes is done in the same fashion. However instead of the slots A1, A2 etc.you will be registering for L1, L2 etc. as shown above. Lab and theory slots for a course are registered together.</li>
            <li>The lab slots you choose will generally be from the slots other than your (chosen) theory schedule,i.e. for morning theory classes, you will have evening labs and vice-versa.Although not necessary, it is recommended that you choose your theory and lab slots for different parts of the dayto prevent messing up your timetable i.e. for morning theory classes take evening labs and vice-versa. </li>
            <li>The fully flexible system is flexible only to an extent. Every course that you opt for may be available in only a few of the slots mentioned,sometimes just 1 particular slot for specialized courses. As first timers, you will have the option to register for only a selected number of courses, pre-decided by your schools. </li>
            <li>You can opt between 16-27 credits per semester through a number between 20-25 is advisable. Keep your eyes open for extra courses that may open up in ADD/DROP (explained later). Again, do not take very fewer credits because that will mean you will need to increase the load in the coming semesters unless you plan to extend your stay here. </li>
        </ol></p><p>
 
During 2015 - 16, the concept of Curriculum for Applied Learning (CAL™) was introduced in all Programmes of the University under which a project component became an integral part of the course structure. All courses are made student-centric instead of teacher-centric. Learning becomes more 'experiential' by carrying out a project (Project Based Learning) as part of most of the courses. 'Learning by doing' enhances understanding the concepts discussed in the class and make multi- and cross-disciplinary applications possible. Students will be able to take up real-world problems as their course projects and apply their key learning in identifying better solutions. All courses under CAL were redesigned to bring out the importance of application to engineering/technological problems, creativity and innovation, developing entrepreneurial skills, rather than route learning.

            </p>
           
            </div>
        </main>
      </div>

    </div>
  );
};

export default Ffcs;