import myResume from "../assets/resume.jpg"

function Resume() {

  return (
    <div>
        <h1> My Resume</h1>
      <img src={myResume} style={{ width: "50%" }} alt="cover" />
    </div>
  );
}

export default Resume;
