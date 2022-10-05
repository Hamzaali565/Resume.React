import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Hi() {
  return (
    <div>
      {/* ABOUT */}
      <div className="main1">
        <div className="main2"><h1>ABOUT:</h1>
          <p className="p1">NAME: MUHAMMAD HAMZA FAROOQ</p>
          <p className="p2">ADDRESS: A-438 SECTOR 11-G NEW KARACHI</p>
        </div> </div>
      {/*OBJECTIVE*/}
      <div className="main1">
        <h1 >OBJECTIVE:</h1>
        <p className="p1">To acquire valuable knowledge and skills to complement those that I have learned from school in an actual job environment. In return,</p>
        <p className="p2">I offer my service and determination to be an asset to your company throughout the duration of my training period.</p>
      </div>
      {/* EDUCATION*/}
      <div className="main1">
        <h1>EDUCATION:</h1>
        <div className="flex1">
          <p className="p0"><b><u>2017-2022:</u></b></p>
          <p className="p3">Pakistan Shipowner's Govt. College</p>
        </div>
        <div className="flex2">
          <p className="p5"><b><u>2022:</u></b></p>
          <p className="p4">Saylani Mass I.T Training</p>
        </div>
      </div>
      {/* SKILLS */}
      <div className="main1">
        <h1>SKILLS:</h1>
        <ol>
          <li><u><b>FRONTEND DEVELOPER</b></u></li>
          <li><u><b>HTML CSS Bootstrap</b></u></li>
          <li><u><b>JavaScript React Js</b></u></li>
          <li><b><u>VIRTUAL ASSISTANT AT AMAZON</u></b></li>
          <li><b><u>TECHITION OF AUTOMOBILE PANEL SYSTEM</u></b></li>
          <li><b><u>ELECTRONIC TECHNITION</u></b></li>

        </ol>
      </div>
{/* CONTACT */}
<div className="main1">
  <h1>CONTACT:</h1>
<p className="anc1"><a className="ancher" href="https://github.com/Hamzaali565">GitHub</a></p>
</div>

    </div>
  );
}
ReactDom.render(<Hi />, document.querySelector("#root"));
