import React from 'react';
import '../../public/css/titleLine.css';

let TitleLine = (props)=>{
return (
  <div id="containerATG" className={props.className||''}>
      <h2>{props.title}</h2>
      <div className="grade"></div>
      {props.children}
  </div>
)
}

export default TitleLine;


