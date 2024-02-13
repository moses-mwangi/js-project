import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Exer from "./App";
import reportWebVitals from "./reportWebVitals";

const skills = [
  { skill: "HTML+CSS", level: "adv", color: "#2662ea", key: 1 },
  { skill: "javascript", level: "begg", color: "#efd81d", key: 2 },
  { skill: "Web design", level: "adv", color: "#c3dcaf", key: 3 },
  { skill: "Git and Github", level: "inter", color: "#2672ea", key: 4 },
  { skill: "React", level: "adv", color: "#e84f33", key: 5 },
  { skill: "Angular", level: "inter", color: "#60dafb", key: 6 },
  { skill: "Tailwind", level: "adv", color: "#ff3b00", key: 7 },
];

function App() {
  return (
    <div className="container">
      <Image photoName="download.jpeg" />
      <Text
        name="Moses Mwangi"
        para=" moses mwangi a full stack web developer from nairobi kenya and he can
        still work at frelance department"
      />
      <SkillList />
    </div>
  );
}
function Image(props) {
  return (
    <div className="img">
      <img src={props.photoName} alt="lady" className="image"></img>
    </div>
  );
}
function Text(props) {
  return (
    <div className="text-cont">
      <h1>{props.name}</h1>
      <p>{props.para}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="course">
      {skills.map((skill) => (
        <Skill skillOb={skill} key={skill.color} />
      ))}
      ;
    </div>
  );
  // <div className="course">

  //   <Skill skill="react" emoji="moooji" color="red" />
  //   <Skill skill="javascript" emoji="don" color="blue" />
  //   <Skill skill="Html + css" emoji="lov" color="yellow" />
  //   <Skill skill="Angular" emoji="face" color="orange" />
  //   <Skill skill="NEXT.js" color="purple" />
  // </div>
}
function Skill({ skillOb }) {
  return (
    <div className="cor " style={{ backgroundColor: skillOb.color }}>
      {" "}
      <span>{skillOb.skill}</span>
      <span>{skillOb.level}</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const exer = ReactDOM.createRoot(document.getElementById("exer"));
exer.render(
  <React.StrictMode>
    <Exer />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
