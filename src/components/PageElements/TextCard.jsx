import React from 'react'

//animate the namvigation

import "./TextCard.css";

import ScrollAnimation from "react-animate-on-scroll";

export default function TextCard(props) {
  return (
    <div className="text_Card">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div id={props.id}>
          <h1 className="text_heading">{props.name}</h1>
          <div className="line"></div>
          <div className="text_body">{props.children}</div>
        </div>
      </ScrollAnimation>
     </div>
  );
}
