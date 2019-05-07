import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Logo from "../res/logo.jpg";
import ClassNames from "classnames";

export default class MenuExampleBasic extends Component {

  constructor() {
    super();
    this.state = { activeItem : "Home" }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    const logoStyle = {
      height: "80px",
      width: "80px "
    };

    const menuStyle = {
      paddingLeft: "100px",
      paddingRight: "100px",
      textAlign: 'center',
      fontFamily: 'Montserrat',
      fontSize: '20px'
    };

    return (
      <Menu>
        <Menu.Item
          as={Link} to='/home'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}>
          <img src= {Logo} style={logoStyle}/>
        </Menu.Item>

          <Menu>
            <Menu.Item
              as={Link} to='/aboutme'
              name='AboutMe'
              class={this.state}
              active={activeItem === 'MenuAboutMe'}
              onClick={this.handleItemClick}
              style={menuStyle}>
              ABOUT ME
            </Menu.Item>

            <Menu.Item
               as={Link} to='/projects'
               name='Projects'
               active={activeItem === 'MenuProjects'}
               onClick={this.handleItemClick}
               style={menuStyle}>
              PROJECTS
            </Menu.Item>

            <Menu.Item
               as={Link} to='/cv'
               name='Cv'
               active={activeItem === 'MenuCv'}
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
    </Menu>
    )
  }
}
