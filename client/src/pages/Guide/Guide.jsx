import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Guide.css";
import round from "../../assets/round.png";
const Guide = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />

      <div className="App">
        <header className="App-header">
          <img src={round} className="App-logo" alt="round" />
          <h1>A Complete Guide to Placements</h1>
        </header>
        <main className="App-main">
          <section className="App-section">
          <p>
                We have provided a detailed guide that includes study materials to prepare for placements. This will cover each and every step in placement rounds, including resume preparation, online tests, interviews, and more to start placement preparation for engineering.
                </p>
            <div className="text-video-container">
              {/* Text content */}
              <div className="text-content">
                 <h2>Placement Rounds:</h2>
               
                This includes:
                <p><ul>
              <li>Resume Shortlisting</li>
              <ul>
              <li>How to prepare the perfect resume?</li>
            </ul>
              <li>Online Test</li>
              <ul>
              <li>Quants Test</li>
              <li>Game-Based Aptitude</li>
              <li>Psychometric Test</li>
              <li>Data Interpretation</li>
              <li>Guesstimates</li>
              <li>Visual Reasoning</li>
              <li>Programming MCQs</li>
              <li>Coding Test</li>
            </ul>
            <li>Group Discussion</li>
            <li>Technical Interview</li>
            <li>Techno-Managerial Interview</li>
            <li>HR Interview</li>
            </ul></p>
              </div>

              {/* Video content */}
              <div className="video-content">
              <iframe width="560" height="315" className="vid" src="https://www.youtube.com/embed/hLsMJI0_nrY?si=XUZYUSZs4n4gJyrY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </div>
          </section>
          <section className="App-section">
            <h2>Placement Rounds:</h2>
            <p>
            Following rounds are conducted in the placement . You will also find relevant links to help prepare.
            </p>
            <h3 style={{marginLeft:"30%"}}>1. RESUME SHORTLISTING</h3>
            <h4>What is a Resume?</h4>
            <p>A good resume is your key to getting that dream job. Your resume serves as an introduction to the employers and conveys your skills and knowledge to the interviewer.</p><p>
Most companies have a round called resume shortlisting. This is done by an ATS or Applicant Tracking System. Where an AI-based application scans your resume and gives it a score. Based on the score then your profile is shortlisted for further rounds.
</p><p>Therefore it is very important that you build a proper resume that is both ATS friendly and readable for any interviewer. In this page, you will find all the important resume preparation tips.</p>
            <h4>STEP 1: Decide on a resume layout:</h4><p>This is the first phase, which begins with the structure you wish to use to construct your resume. Take some time to consider this option.
</p>        <h4>STEP 2: Provide your name and contact information.</h4><p>
This field contains the following information and serves as the resume's heading.
            <ul>
              <li>Address</li>
              <li>Name (State, City)</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Your personal website, e-portfolio, or social media page's URL (if you have one).</li>
            </ul></p>
            <h4>STEP 3: Write a resume/career objective.</h4><p>
            A Professional Objective/Resume Objective statement identifies either a specific job or a general career path that you intend to pursue. It functions as a resume pitch.
            </p>
            <h4>Step 4: Work Experience</h4><p>
            This section, titled “Work Experience” or “Professional Experience,” should focus on your general skills in a way that demonstrates how your previous experience might benefit an employer's future plans.
            </p>
            <h4>Step 5: Education Details</h4>
            <p>
            If you're still in school or have recently graduated, your education is most likely your most valuable possession. In reverse chronological order, describe your educational background. Taking the most recent degree first.
            </p>
            <h4>STEP 6: Skills</h4><p>
            You can describe your technical abilities in this field. When writing about your technical skills, use action verbs because recruiters and applicant tracking systems hunt for these resume keywords.
            </p>
            <h4>Step 7: Projects & Certifications</h4>
            <p>
            You might list any projects or qualifications you have earned throughout your career in this section. Projects and certifications are very important in a resume:
            <ul>
              <li>You can highlight your abilities, accomplishments, and work experience.</li>
              <li>Recruiters gain an understanding of actual projects on which you have worked and applied your skills to attain the desired outcomes.</li>
              <li>A resume with projects and Certificates makes you a more appealing applicant.</li>
            </ul>

            </p>
            <h4>Step 8: Additional Sections</h4><p>
            You can further add “additional sections” including other relevant details about yourself. Including hobbies, publications, etc.
            </p>
            <p>These are the basic steps for resume preparation. You can follow them to create a perfect resume that is ATS friendly and will help you land good jobs.</p>
            <h3 style={{marginLeft:"30%"}}>2. ONLINE ASSESSMENT</h3><p>
            An Online Assessment is conducted by all the companies to test a candidate. It is the first step of the recruitment process. It is conducted on platforms like AMCAT, CoCubes, Mettl, etc.
            </p><p>
            There are two parts in online assessment:
            <ul>
              <li>Aptitude</li>
              <li>Coding</li>
            </ul></p>
            <h4>Aptitude:</h4><p>
            The includes Quants, Verbal and Logical sections. It is the first online assessment round. This is perhaps the most important part, as failing to clear apti tests leads to direct expulsion. This is also the part where students struggle as they neglect it during preparation. Therefore, we highly recommend you to prepare for Aptitude.
            </p>
            <h5>Find some of the important links below:</h5>
            <ul>
             <li> <a href="https://prepinsta.com/learn-aptitude/">Quants</a></li>
             <li> <a href="https://prepinsta.com/learn-logical-reasoning/">Logical Reasoning</a></li>
             <li> <a href="https://prepinsta.com/learn-verbal-english/">Verbal</a></li>
             <li> <a href="https://prepinsta.com/learn-data-interpretation/">Data Interpretation</a></li>
             <li> <a href="https://prepinsta.com/psychometric-test/">Psychometric Test</a></li>
             <li> <a href="https://prepinsta.com/capgemini/game-based-aptitude-test-questions/">GameBased Aptitude</a></li>
             <li> <a href="https://prepinsta.com/visual-reasoning/questions/">Visual Reasoning</a></li>
            </ul>
            <h4>Coding:</h4><p>
            The coding test contains two parts:
            </p><ul>
              <li>Programming MCQs</li><ul><li>This includes Multiple Choice Questions based on programming concepts and theoretical knowledge.</li></ul>
              <li>Hands-on Coding</li><ul><li>This includes developing programs for the given problem statements.</li></ul>
            </ul>Below we have provided a priority order, in which you should prepare for placements.
            <h4>1. C/C++ :</h4><p>C/C++ should be your top priority. Most companies have a programming round with MCQ questions. These questions are based on C and C++. These languages have concepts that are not present in other programming languages like pointers, operator overloading, etc.</p>
            <h5>Important Link for C:</h5>
            <ul><li><a href="https://drive.google.com/file/d/17hu4Vb2Pwuoas7Tll1vvQDucnZqUV6uk/view?usp=sharing">All about c</a></li></ul>
            <h4>2. Basic and Intermediate Coding</h4><p>
            On PrepInsta, we have divided the process of learning coding into three parts:<ul>
              <li>Basic</li>
              <li>Intermediate</li>
              <li>Advance</li>
            </ul>
            For most companies, preparing up to Intermediate coding should be enough. But if you have time, then definitely practice advanced coding. 
            </p>
            <h5>Link for important coding questions:</h5>
            <ul><li><a href="https://drive.google.com/drive/u/0/folders/17HX7dWeBK0PioV4Kx-gBya2xWqW716tK">Coding questions</a></li></ul>
            <h4>3. Python and JAVA</h4><p>
            Once you have got C and C++ down, start learning either JAVA or Python. There is no set priority as to which language you should learn first. It depends on your preference and area of interest. For instance, Python is preferred for Data Science, AI/ML, etc. While JAVA is good for frontend and backend roles.
            </p>
            <h5>Find important JAVA and Python links below:</h5>
            <ul><li><a href="https://drive.google.com/file/d/18H6s3Bxn50LtTOctgvlQh46V-JcTB_66/view?usp=sharing">Java</a></li>
            <li><a href="https://drive.google.com/file/d/18dzlfT1nfFcY-hGMLt2cbqSGyPdpGKlq/view?usp=sharing">Python</a></li>
            </ul>
            <h3 style={{marginLeft:"30%"}}>3. Group Discussion</h3>
            <p>GD round tests a candidate's communication skills and ability to deliver a presentation. It is a tough round, and in most campus drives, the majority of the candidates are eliminated from this round only.</p>
            <h5>Links for Group Discussion preparation:</h5>
            <ul><li><a href="https://www.geeksforgeeks.org/gd-topics-for-placement/">Group discussion prep</a></li></ul>
            <h3 style={{marginLeft:"30%"}}>4. Technical Interview</h3>
            <p>Technical Interviews are the most important interviews of the recruitment process. In this round, a candidate's technical and coding skills are tested. For the Technical Round, questions are asked from C, C++, hands-on coding, projects, certifications, and more. On our Technical Interview Dashboard, we have five hundred plus Technical Interview Questions for you to prepare from.</p>
            <h5>Links for Technical interview:</h5>
            <ul><li><a href="https://drive.google.com/file/d/18iySSrauoqATnxsxTi-MXVYcN1QtuRQR/view?usp=sharing">Technical round preparation</a></li></ul>
            <iframe width="560" style={{marginLeft:"30%"}} className="vid" height="315" src="https://www.youtube.com/embed/e0E6-dRPcJA?si=2NTOxbMa9uiOg2_3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3 style={{marginLeft:"30%"}}>5. Techno-Managerial Interview</h3><p>
            Managerial Interview rounds consists of situational based questions. Here the interviewer gives the candidate, specific scenarios and they have to describe how they would act. STAR approach is preferred for this round. On our MR Interview Dashboard you will find the most important MR Questions asked during an MR Interview.
            </p>
            <h5>Important Links for Techno-Managerial Round:</h5>
            <ul><li><a href="https://www.codingninjas.com/studio/library/managerial-round-interview-questions">Managerial questions</a></li></ul>
            <b>To Note:</b> The interviewer also focuses on Projects in the managerial round. For Product-Based companies, technical skills are also checked in this round.
            <h3 style={{marginLeft:"30%"}}>6. HR Interview</h3><p>
            HR Interview is the concluding round of the recruitment process. It is a tough round that tests whether or not the candidate is fit for the company.You will find the most important HR Interview Questions and a complete guide on how to answer them.
            </p>
            <h5>Find the link below:</h5><ul><li><a href="https://drive.google.com/file/d/18GpFHtcQp9GN_bieVBaX4f_zsPrh8t95/view?usp=sharing">HR interview Questions</a></li></ul>
          
          
          
          </section>
        </main>
      </div>

    </div>
  );
};

export default Guide;