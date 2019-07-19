import React from "react";
import { Grid , Button} from 'semantic-ui-react'
//import PDFfile from '../../../static/cv.pdf';
//import PDFfile from '../../../static/avatar1.png';
//import PDFfile from '../../../../assets/cv.pdf';



import "./style.scss"

export default class CV extends React.Component {

  handleClick = () => window.open('http://localhost:3000/cvPdf')

  render() {
    return (
      <div className="page dark">


      <Grid comulns="equal">
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={12}>
          <Grid>
            <Grid.Row>
              <div>
                <h2>
                  {"Christian Sutter"}
                </h2>
                <h1>
                  {"CURRICULUM"}<br/>
                  {"VITAE"}
                </h1>
                <div className="divBarDark"/>
              </div>
            </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <div >
                <h2>
                  {"Want to download my CV?"}
                </h2>
                <h2>
                  {"Here you go:"}
                </h2>
                <div>
                <Button class="ui inverted red button" onClick={this.handleClick}>
                {"Curriculum Vitae (PDF)"}
                  {/*<a target='_blank' href='http://localhost:3000/cvPdf' className="link" >{"Curriculum Vitae (PDF)"}</a>*/}
                </Button>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Grid.Column>
        <Grid.Column width ={2}></Grid.Column>
      </Grid>
      </div>
    );
  }
}
