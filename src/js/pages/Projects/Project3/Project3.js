import React from "react";
import { Grid, Segment, Card} from 'semantic-ui-react'
import image from '../../../../static/image.jpg';

import ShadowText from "../../../components/ShadowText/ShadowText"
import "./style.scss"
import ContentImage from "../../../components//ContentImage/ContentImage"
import CommentsContainer from "../../../components/Comments/CommentsContainer.js"
import CommentsForm from "../../../components/Comments/CommentForm/CommentsForm"

export default class Project3 extends React.Component {
  constructor(props){
    super(props)

    this.PID = 2
  }

  render() {
    return(
      <div>

        <Grid comulns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <h2>{"Projects:"}</h2>
            <ShadowText alignment="left" barStyle="light">{"DATA VIZ"}</ShadowText>
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
            <ShadowText alignment="left" barStyle="light">{"*Name*"}</ShadowText>
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

        <Grid comulns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="right" barStyle="light">{"Landing Page"}</ShadowText>
            <p>
              {"A tablet interface mounted on a segway to provide the user with a multitude of features"}
            </p>
            <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
          </Grid.Column>
          <Grid.Column width ={2}></Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left" barStyle="light">{"Your BMI"}</ShadowText>
            <Grid columns="equal">
              <Grid.Column width={"6"}>
                <h2 className="left">{"How healthy are you?"}</h2>
                <p>
                  {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."}
                </p>
              </Grid.Column>
              <Grid.Column width={"10"}>
                <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left" barStyle="light">{"VS the world"}</ShadowText>
            <Grid columns="equal">
              <Grid.Column width={"6"}>
                <h2 className="left">{"How healthy are people in your country on average? And how does that compare to other countries?"}</h2>
                <p>
                  {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."}
                </p>
              </Grid.Column>
              <Grid.Column width={"10"}>
                <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left" barStyle="light">{"Men & Women"}</ShadowText>
            <Grid columns="equal">
              <Grid.Column width={"6"}>
                <h2 className="left">{"How healthy are men and women in comparison?"}</h2>
                <p>
                  {"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."}
                </p>
              </Grid.Column>
              <Grid.Column width={"10"}>
                <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="right" barStyle="light">{"Causes"}</ShadowText>
            <h2 className="right">{"What causes unhealthy weight?"}</h2>
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

        <Grid columns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left" barStyle="light">{"*Call to action*"}</ShadowText>
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

        <Grid comulns="equal">
          <Grid.Column width={2}></Grid.Column>
          <Grid.Column width={12}>
            <ShadowText alignment="left" barStyle="light">{"*Name*"}</ShadowText>
            <h2>
              {"A stylish and green way of transportation!"}
            </h2>
            <ContentImage aspect="landscape" img={image} description="Bildbeschreibungstext für Screenreader"></ContentImage>
          </Grid.Column>
          <Grid.Column width ={2}></Grid.Column>
        </Grid>
        <CommentsContainer pid={this.PID} />
      </div>
    );
  }
}
