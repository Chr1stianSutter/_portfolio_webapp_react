import React, { Component } from 'react'
import "./style.scss"

export default class ShadowText extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    var classNames = "__ShadowText";
    if(this.props.alignment && this.props.alignment == "right") {
      classNames += " right"
    }else{
      classNames += " left"
    }

    var divBar = false;
    if(this.props.barStyle && this.props.barStyle == "light") {
      var divBar = <div className="divBarLight"></div>;
    }
    if(this.props.barStyle && this.props.barStyle == "dark") {
      var divBar = <div className="divBarDark"></div>;
    }

    return (
      <div className={classNames}>
        <h2 data-content={this.props.children}>{this.props.children}</h2><br />
        {(divBar)? divBar : ""}
      </div>
    );
  }
}
