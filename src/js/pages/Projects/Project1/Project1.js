import React from "react";
import { Grid, Segment, Card} from 'semantic-ui-react'
import image from '../../../../static/image.jpg';

import ShadowText from "../../../components/ShadowText/ShadowText"
import "./style.scss"
import ContentImage from "../../../components//ContentImage/ContentImage"

export default class Project1 extends React.Component {
  render() {
    return(
      <div>

        <Grid comulns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <h2>{"Projects:"}</h2>
            <h1>{"SEGWAY UI"}</h1>
            <div className= "divBarLight"></div>
            <blockquote>
              {"A tablet interface mounted on a segway to provide the user with a multitude of features"}
            </blockquote>
            <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
          </Grid.Column>
          <Grid.Column width ={2}></Grid.Column>
        </Grid>


        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={6}>
            <ContentImage aspect="square" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
          </Grid.Column>
          <Grid.Column width={6}>
            <h1>{"*NAME*"}</h1>
            <div className= "divBarLight"></div>
            <p>
              {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."}
            </p>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left">{"Style Guide"}</ShadowText>
            <div className= "divBarLight"></div>
            <h2>{"Color"}</h2>
            <div className="inset"></div>
            <div className="inset"></div>
            <div className="inset"></div>
            <div className="inset"></div>
            <div className="inset"></div>

            <Grid columns="equal">
              <Grid.Column>
              <Grid.Row>
                <h2>{"Typeface A:"}</h2>
              </Grid.Row>
                <h2>
                  {"Futura - Bold"}
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}<br/>
                  {"abcdefghijklmnopqrstuvwxyz"}<br/>
                  {"0123456789"}
                </h2>
              </Grid.Column>
              <Grid.Column>
              <Grid.Row>
              <Grid.Row>
                <h2>{"Typeface B:"}</h2>
              </Grid.Row>
              </Grid.Row>
                <h2>
                  {"Helvetica - Regular"}
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}<br/>
                  {"abcdefghijklmnopqrstuvwxyz"}<br/>
                  {"0123456789"}
                </h2>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="right" barStyle="light">{"Users"}</ShadowText>
            <Grid columns="equal">
              <Grid.Column>
                <ContentImage aspect="square" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
              </Grid.Column>
              <Grid.Column>
              <h2 className="right">{"Needs"}</h2>
                <ul className="right ulRight">
                  <li>{"test 1"}</li>
                  <li>{"test 2"}</li>
                  <li>{"test 3"}</li>
                  <li>{"test 4"}</li>
                </ul>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>


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
        <img src={image} />
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
