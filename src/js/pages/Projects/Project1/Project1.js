import React from "react";
import { Grid, Segment, Card} from 'semantic-ui-react'
import image from '../../../../static/image.jpg';

import "./style.scss"

export default class Project1 extends React.Component {
  render() {
    return(
      <div>
        <h2>{"Projects:"}</h2>
        <h1>{"SEGWAY UI"}</h1>
        <blockquote>
          {"A tablet interface mounted on a segway to provide the user with a multitude of features"}
        </blockquote>
        <img src={image} />
        <h1>{"*NAME*"}</h1>
        <blockquote>
          {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."}
        </blockquote>
        <h2>{"Style Guide"}</h2>
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
        <h1>
          {"Style"}<br/>
          {"Guide"}
        </h1>
        <h2>
          {"Users"}
        </h2>
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
        <h1>{"Users"}</h1>
        <h2>{"Navigation"}</h2>
        <h2>{"*Title*"}</h2>
        <h1>{"Navigation"}</h1>
        <blockquote>
          {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
        </blockquote>
        <img src={image} />
        <img src={image}/>
        <blockquote>
          {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
        </blockquote>
        <h2>{"Music"}</h2>
        <h2>{"Play your favorite songs!"}</h2>
        <img src={Image} />
        <blockquote>
          {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
        </blockquote>
        <blockquote>
          {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
        </blockquote>
        <img src={image} />
        <h1>{"Music"}</h1>
        <h2>{"*Name*"}</h2>
        <blockquote>{"A stylish and green way of transportation!"}</blockquote>
        <h1>{"*Name*"}</h1>
        <img src={image} />
      </div>
    );
  }
}
