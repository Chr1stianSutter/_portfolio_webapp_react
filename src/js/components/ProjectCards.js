import React from 'react'
import { Card } from 'semantic-ui-react'

import image from '../res/image.jpg';
const img = 'src/js/res/image.jpg';


const ProjectCards = () => (
  <Card.Group itemsPerRow={2}>
    <Card raised image={imgage} />
    <Card raised image={img} />
    <Card raised image={img} />
    <Card raised image={img} />
  </Card.Group>
)

export default ProjectCards
