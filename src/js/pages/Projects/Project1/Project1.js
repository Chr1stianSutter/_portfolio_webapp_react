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
            <p>
              {"A tablet interface mounted on a segway to provide the user with a multitude of features"}
            </p>
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
            <ShadowText alignment="left" barStyle="light">{"Style Guide"}</ShadowText>
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
                <p>
                  {"Futura - Bold"}
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}<br/>
                  {"abcdefghijklmnopqrstuvwxyz"}<br/>
                  {"0123456789"}
                </p>
              </Grid.Column>
              <Grid.Column>
              <Grid.Row>
              <Grid.Row>
                <h2>{"Typeface B:"}</h2>
              </Grid.Row>
              </Grid.Row>
                <p>
                  {"Helvetica - Regular"}
                  {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}<br/>
                  {"abcdefghijklmnopqrstuvwxyz"}<br/>
                  {"0123456789"}
                </p>
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
                <h2 className="right"> {"Motto"}</h2>
                <blockquote>
                  {"I want a vehicle that's A and B a reliable C that attracts attention"}
                </blockquote>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left" barStyle="light">{"Navigation"}</ShadowText>
            <h2 className="left">{"*Title*"}</h2>
            <Grid columns="equal">
              <Grid.Column>
                <p>
                  {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
                </p>
                <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
              </Grid.Column>
              <Grid.Column>
                <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
                <p>
                  {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
                </p>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="right" barStyle="light">{"Music"}</ShadowText>
            <h2 className="right">{"Play your favourite songs!"}</h2>
            <Grid columns="equal">
              <Grid.Column>
                <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
                <p>
                  {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p>
                  {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
                </p>
                <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid comulns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left" barStyle="light">{"*Name*"}</ShadowText>
            <p>
              {"A stylish and green way of transportation!"}
            </p>
            <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
          </Grid.Column>
          <Grid.Column width ={2}></Grid.Column>
        </Grid>
      </div>
    );
  }
}
