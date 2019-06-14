import React from "react";
import { Grid } from 'semantic-ui-react'
import { withRouter } from "react-router";
import image from '../../../../static/image.jpg';

import ShadowText from "../../../components/ShadowText/ShadowText"
import "./style.scss"
import ContentImage from "../../../components//ContentImage/ContentImage"

export default class Project2 extends React.Component {
  render() {
    return(
      <div>

        <Grid comulns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <h2>{"Projects:"}</h2>
            <ShadowText alignment="left" barStyle="light">{"ANDROID APP"}</ShadowText>
            <p>
              {"An android app to create and manage positive affirmations that helps you become who you want to be"}
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
            <ShadowText alignment="left" barStyle="light">{"AffirMate"}</ShadowText>
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
                  {"I want to make use of positive affirmations to further my growth!"}
                </blockquote>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left" barStyle="light">{"Create"}</ShadowText>
            <Grid columns="equal">
              <Grid.Column>
                <h2 className="left">{"Who do you want to be?"}</h2>
                <p>
                  {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."}
                </p>
              </Grid.Column>
              <Grid.Column>
                <ContentImage aspect="portrait" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="right" barStyle="light">{"Manage"}</ShadowText>
            <Grid columns="equal">
              <Grid.Column>
                <ContentImage aspect="portrait" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
              </Grid.Column>
              <Grid.Column>
              <h2 className="right">{"Want to be something new?"}</h2>
              <p>
                {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."}
              </p>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left" barStyle="light">{"Affirm"}</ShadowText>
            <Grid columns="equal">
              <Grid.Column>
                <h2 className="left">{"Get a reminder and affirm yourself that you are what you want to become"}</h2>
                <p>
                  {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."}
                </p>
              </Grid.Column>
              <Grid.Column>
                <ContentImage aspect="portrait" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid comulns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left" barStyle="light">{"*Name*"}</ShadowText>
            <h2>
              {"Be who you want to be - today!"}
            </h2>
            <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
          </Grid.Column>
          <Grid.Column width ={2}></Grid.Column>
        </Grid>
      </div>
    );
  }
}
