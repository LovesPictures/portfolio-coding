import "./ParallaxIMG.css";
import { Parallax  } from "react-parallax";

const Container = (props) => (
  <Parallax bgImage={props.img} strength={200}>
    {/* <p>... Content</p> */}
    <div className="Folio_Card">
      <div className="txt">{props.text}</div>
      {/* <div className="strapline">Strapline somthing</div> */}
    </div>
  </Parallax>
);

export default Container;