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
      container.style.height = container.offsetWidth * 1,7778 + "px";
    }if(this.props.aspect == "square"){
      container.style.height = container.offsetWidth
    }
  }

//<ContentImage aspect="landscape" src={image}>{"Bildbeschreibungstext für Screenreader"}</ContentImage>
  render() {
    var classNames =  "__ContentImage"
    if(this.props.aspect == "landscape") {
      classNames += " landscape"
    }
    if(this.props.aspect == "portrait"){
      classNames += " portrait"
    }
    if(this.props.aspect == "square"){
      classNames += " square"
    }

    const bgImage = {
      backgroundImage: "url('" + this.props.img + "')"
    }

    return (
      <div className={classNames} ref={this.containerRef} style={bgImage}>
        {this.props.description}
      </div>
    );
  }
}
