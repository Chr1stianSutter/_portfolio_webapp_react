import React, { Component } from 'react'
import "./style.scss"

export default class ContentImage extends Component {

  constructor(props) {
    super(props)
    this.containerRef = React.createRef()
  }

  componentDidMount(){
    var container = this.containerRef.current
    if(this.props.aspect == "landscape") {
      container.style.height = container.offsetWidth * 0.5625 + "px";
    }if(this.props.aspect == "portrait"){
      container.style.height = container.offsetWidth * 1.7778 + "px";
    }if(this.props.aspect == "square"){
      container.style.height = container.offsetWidth + "px";
    }
  }

//<ContentImage aspect="landscape" src={image}>{"Bildbeschreibungstext für Screenreader"}</ContentImage>
  render() {
      const bgImage = {
      backgroundImage: "url('" + this.props.img + "')"
    }

    return (
      <div className="__ContentImage" ref={this.containerRef} style={bgImage} role="img" aria-label={this.props.description}></div>
    );
  }
}
