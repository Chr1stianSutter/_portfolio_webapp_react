import React from "react";
import { Grid , Button} from 'semantic-ui-react'
//import PDFfile from '../../../static/cv.pdf';
//import PDFfile from '../../../static/avatar1.png';
//import PDFfile from '../../../../assets/cv.pdf';



import "./style.scss"

export default class CV extends React.Component {

  handleClick = () => window.open('../../../static/cv.pdf')

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
                  <button class="ui inverted red button" onClick={this.handleClick} target='_blank' download="christian_sutter_curriculum_vitae">Download Curriculum Vitae</button>
                  {/*<a  target='_blank' href='../../../static/cv.pdf' > test</a >*/}
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
