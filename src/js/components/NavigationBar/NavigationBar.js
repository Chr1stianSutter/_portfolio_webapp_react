import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import Logo from "../../../static/logo-cs6-02.png";
import ClassNames from "classnames";
import { Grid, Segment, Card} from 'semantic-ui-react'

import "./style.scss"

export default class NavigationBar extends Component {


  constructor() {
    super();
    this.state = { activeItem : 'Home' }

  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <div class="ui inverted segment attached menuBar">
      <Grid comulns="equal">
        <Grid.Column width={2}>
        <Menu class="ui inverted secondary pointing menu">

          <Menu.Item
          as={Link} to='/'
          name='Home'
          className="logo"
          onClick={this.handleItemClick}>
            <img src={Logo} className="logo" alt="Home"/>
          </Menu.Item>

        </Menu>

        </Grid.Column>
        <Grid.Column width={12}>

        <Menu class="ui inverted secondary pointing menu">

          <Menu.Item
          as={Link} to='/aboutme'
          name='AboutMe'
          className="menuItem"
          active={activeItem === 'AboutMe'}
          onClick={this.handleItemClick}
          >
            {"ABOUT ME"}
          </Menu.Item>

          <Menu.Item
          as={Link} to='/projects'
          name='Projects'
          className="menuItem"
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
          >
            {"PROJECTS"}
          </Menu.Item>

          <Menu.Item
          as={Link} to='/cv'
          name='Vitae'
          className="menuItem"
          active={activeItem === 'Vitae'}
          onClick={this.handleItemClick}
          >
            {"CV"}
          </Menu.Item>

          <Menu.Item
          as={Link} to='/contact'
          name='Contact'
          className="menuItem"
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
          >
            {"CONTACT"}
          </Menu.Item>

        </Menu>

        </Grid.Column>
        <Grid.Column width={2}></Grid.Column>
      </Grid>
      </div>
    )
  }
}
