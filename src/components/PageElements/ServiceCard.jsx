import "./ServicesCardTest.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function ServiceCard(props) {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <div className="Service_Card">
          <div className="SerIMGdiv">
            <img className="Ser_Img" src={props.img} alt="###"></img>
          </div>
          <div className="Ser_Text">
            <h2 className="serHeading">
              {props.head}
              {/* <div className="Underline"></div> */}
            </h2>

            {props.children}
            <div className="Servline"></div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}
