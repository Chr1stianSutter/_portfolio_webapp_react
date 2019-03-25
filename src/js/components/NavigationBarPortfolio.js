import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";

export default class MenuExampleBasic extends Component {

  constructor() {
    super();
    this.state = { activeItem : "Home" }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={Link} to='/aboutme'
          name='AboutMe'
          active={activeItem === 'MenuAboutMe'}
          onClick={this.handleItemClick}>
          ABOUT ME
        </Menu.Item>

        <Menu.Item
           as={Link} to='/projects'
           name='Projects'
           active={activeItem === 'MenuProjects'}
           onClick={this.handleItemClick}>
          PROJECTS
        </Menu.Item>

        <Menu.Item
           as={Link} to='/cv'
           name='Cv'
           active={activeItem === 'MenuCv'}
           onClick={this.handleItemClick}>
          CV
        </Menu.Item>

      <Menu.Item
         as={Link} to='/contact'
         name='Contact'
         active={activeItem === 'MenuContact'}
         onClick={this.handleItemClick}>
        CONTACT
      </Menu.Item>
    </Menu>
    )
  }
}
