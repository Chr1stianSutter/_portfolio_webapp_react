import React from "react";
import { Grid, Segment, Card} from 'semantic-ui-react'
import image from '../../../../static/image.jpg';

import ShadowText from "../../../components/ShadowText/ShadowText"
import "./style.scss"

export default class Project1 extends React.Component {
  render() {
    return(
      <div>
        <h2>{"Projects:"}</h2>
        <h1>{"SEGWAY UI"}</h1>
        <div className= "divBarLight"></div>
        <blockquote>
          {"A tablet interface mounted on a segway to provide the user with a multitude of features"}
        </blockquote>
        <img src={image} />
        <h2>{"*NAME*"}</h2>
        <div className= "divBarLight"></div>
        <blockquote>
          {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."}
        </blockquote>
        <ShadowText alignment="left">{"Style Guide"}</ShadowText>
        <div className= "divBarLight"></div>
        <h2>{"Color"}</h2>
        <h2>{"Typefaces"}</h2>
        <h2>
          {"Futura - Bold"}
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}<br/>
          {"abcdefghijklmnopqrstuvwxyz"}<br/>
          {"0123456789"}
        </h2>
        <h2>
          {"Helvetica - Regular"}
          {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}<br/>
          {"abcdefghijklmnopqrstuvwxyz"}<br/>
          {"0123456789"}
        </h2>
        <h2>
        <ShadowText alignment="right">{"Users"}</ShadowText>
        </h2>
          <div className= "divBarLight"></div>

        <h2>
          {"Needs"}
        </h2>
        <ul>
          <li>{"test 1"}</li>
          <li>{"test 2"}</li>
          <li>{"test 3"}</li>
          <li>{"test 4"}</li>
        </ul>
        <h2>{"Motto"}</h2>
        <blockquote>
          {"I want to make use of positive affirmations tofurther my growth!"}
        </blockquote>
        <ShadowText alignment="left">{"Navigation"}</ShadowText>
        <div className= "divBarLight"></div>
        <h2>{"*Title*"}</h2>
        <blockquote>
          {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
        </blockquote>
        <img src={image} />
        <img src={image}/>
        <blockquote>
          {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
        </blockquote>
        <ShadowText alignment="right">{"Music"}</ShadowText>
        <div className= "divBarLight"></div>
        <h2>{"Play your favorite songs!"}</h2>
        <img src={Image} />
        <blockquote>
          {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
        </blockquote>
        <blockquote>
          {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
        </blockquote>
        <img src={image} />
        <ShadowText alignment="left">{"*Name*"}</ShadowText>
        <div className= "divBarLight"></div>
        <blockquote>{"A stylish and green way of transportation!"}</blockquote>
        <img src={image} />
      </div>
    );
  }
}
