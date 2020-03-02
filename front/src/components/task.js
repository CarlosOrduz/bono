import React from 'react';
import Card from 'react-bootstrap/Card'
export default class Task extends React.Component {

    state = {
        "titulo": "Tarea1",
        "contenido": "llorar"
      }
  render() {
    return (
        <Card style={{ width: '18rem',margin:'10px' }}>
        <Card.Body style={{padding: '0px'}}>
        <Card.Header as="h5">{this.state.titulo}</Card.Header>
         
          <Card.Text>
          {this.state.contenido}
          </Card.Text>
          
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}