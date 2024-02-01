import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

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
    <div>
      <Skill skill="" />;
      <Skill skill="" />;
      <Skill skill="" />;
      <Skill skill="" />;
      <Skill skill="" />;
    </div>
  );
}
function Skill() {
  return (
    <div className="course">
      <span>javascript</span>
      <span>css</span>
      <span>httml</span>
      <span>rect</span>
      <span>Angular</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
