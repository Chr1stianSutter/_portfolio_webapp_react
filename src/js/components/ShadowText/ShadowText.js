import React, { Component } from 'react'
import "./style.scss"

export default class ShadowText extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    let shadowNode = (
      (this.props.alignment && this.props.alignment == "right") ?
            <div className="__ShadowText right">
              <h2 data-content={this.props.children}>{this.props.children}</h2>
            </div>
        :
          <div className="__ShadowText left">
            <h2 data-content={this.props.children}>{this.props.children}</h2>
          </div>
      )

    return (
      shadowNode
    );
  }
}
