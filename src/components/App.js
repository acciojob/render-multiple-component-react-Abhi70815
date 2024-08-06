import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  let project=[
    {name:"retaurant Ui", description:"restaurant web developed"},
    {name:"insta clone", description:"develop by html"},
    {name:"youtube", description:"deveploped in 1999"}
  ]
  return (
    <div id="main" className="ns-wrapper">
      {
        project.map((elem,index)=>(
         <div  key={index}>
          {console.log(elem)}

<h1 data-ns-test="project-name">{elem.name}</h1>
<h6 data-ns-test="project-description">{elem.description}</h6>

         </div>
        ))
      }
    </div>

  )
}


export default App;
