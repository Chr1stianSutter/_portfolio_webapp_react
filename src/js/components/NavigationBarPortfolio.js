import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Logo from "../res/logo.jpg";
import ClassNames from "classnames";

export default class MenuExampleBasic extends Component {


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
      width: "80px "
    };

    const menuStyle = {
      paddingLeft: "100px",
      paddingRight: "100px",
      paddingBottom: "40px",
      textAlign: 'center',
      fontFamily: 'Montserrat',
      fontSize: '20px',

    };

    return (

      <div class="ui inverted segment">
      <Menu class="ui inverted secondary pointing menu">
        <Menu.Item
          as={Link} to='/'
          name='Home'
          class='active item'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}>
          <img src= {Logo} style={logoStyle}/>
        </Menu.Item>


            <Menu.Item
              as={Link} to='/aboutme'
              name='AboutMe'
              class="item"
              active={activeItem === 'MenuAboutMe'}
              onClick={this.handleItemClick}
              style={menuStyle}>




                  ABOUT ME


            </Menu.Item>

            <Menu.Item
               as={Link} to='/projects'
               name='Projects'
               class="item"
               active={activeItem === 'MenuProjects'}
               onClick={this.handleItemClick}
               style={menuStyle}>

                   PROJECTS

            </Menu.Item>

            <Menu.Item
               as={Link} to='/cv'
               name='Cv'
               class="item"
               active={activeItem === 'MenuCv'}
               onClick={this.handleItemClick}
               style={menuStyle}>

                   CV

            </Menu.Item>

          <Menu.Item
             as={Link} to='/contact'
             name='Contact'
             class="item"
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
