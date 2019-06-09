import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Logo from "../../../static/logo.jpg";
import ClassNames from "classnames";

import "./style.scss"

export default class NavigationBar extends Component {


  constructor() {
    super();
    this.state = { activeItem : 'Home' }

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const logoStyle = {
    //  height: "80px",
    //  width: "auto"
    };

    const menuStyle = {
    //  paddingBottom: "40px",
    //  textAlign: 'center',
    //  fontFamily: 'Montserrat',
    //  fontSize: '20px',


    };

    const contentWrapper = {
    //  width: "1024px",
    //  margin: "0 auto"
    }

    const sticky = {
    //  position: "fixed",
    //  top: "0",
    //  left: "0",
    //  right: "0",
    //  height: "130px",
    //  zIndex: "1000"
    }
    return (
      <div class="ui inverted segment attached">
        <Menu class="ui inverted secondary pointing menu">

          <Menu.Item
          as={Link} to='/'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}>
            <img src={Logo} alt="Home"/>
          </Menu.Item>

          <Menu.Item
          as={Link} to='/aboutme'
          name='AboutMe'
          active={activeItem === 'AboutMe'}
          onClick={this.handleItemClick}
          >
            {"ABOUT ME"}
          </Menu.Item>

          <Menu.Item
          as={Link} to='/projects'
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
          >
            {"PROJECTS"}
          </Menu.Item>

          <Menu.Item
          as={Link} to='/cv'
          name='Vitae'
          active={activeItem === 'Vitae'}
          onClick={this.handleItemClick}
          >
            {"CV"}
          </Menu.Item>

          <Menu.Item
          as={Link} to='/contact'
          name='Contact'
          active={activeItem === 'MenuContact'}
          onClick={this.handleItemClick}
          >
            {"CONTACT"}
          </Menu.Item>

        </Menu>
      </div>
    )
  }
}
