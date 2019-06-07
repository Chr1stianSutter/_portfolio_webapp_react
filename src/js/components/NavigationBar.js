import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Logo from "../res/logo.jpg";
import ClassNames from "classnames";

export default class NavigationBar extends Component {


  constructor() {
    super();
    this.state = { activeItem : 'Home' }

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  //$('.ui .item').on('click', function() {
  //$('.ui .item').removeClass('active');
  //$(this).addClass('active');
  //});

  render() {
    const { activeItem } = this.state

    const logoStyle = {
      height: "80px",
      width: "auto"
    };

    const menuStyle = {
      paddingBottom: "40px",
      textAlign: 'center',
      fontFamily: 'Montserrat',
      fontSize: '20px',

    };

    const contentWrapper = {
      width: "1024px",
      margin: "0 auto"
    }

    const sticky = {
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      height: "130px"
    }

    const flexContainer = {
      display: "flex",
      justifyContent: "center"
    }

    const flexItem = {}

    return (
      <div class="ui inverted segment" style={sticky}>
        <Menu class="ui inverted secondary pointing menu" style={contentWrapper, flexContainer}>

          <Menu.Item
          as={Link} to='/'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}>
            <img src={Logo} style={logoStyle} alt="Home"/>
          </Menu.Item>

          <Menu.Item
          as={Link} to='/aboutme'
          name='AboutMe'
          active={activeItem === 'AboutMe'}
          onClick={this.handleItemClick}
          style={menuStyle}>
            ABOUT ME
          </Menu.Item>

          <Menu.Item
          as={Link} to='/projects'
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
          style={menuStyle}>
            PROJECTS
          </Menu.Item>

          <Menu.Item
          as={Link} to='/cv'
          name='Vitae'
          active={activeItem === 'Vitae'}
          onClick={this.handleItemClick}
          style={menuStyle}>
            CV
          </Menu.Item>

          <Menu.Item
          as={Link} to='/contact'
          name='Contact'
          active={activeItem === 'MenuContact'}
          onClick={this.handleItemClick}
          style={menuStyle}>
            CONTACT
          </Menu.Item>

        </Menu>
      </div>
    )
  }
}
