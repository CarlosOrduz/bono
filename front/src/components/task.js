import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default class Task extends React.Component {

    state = {
      "task": this.props.task
      }
  render() {
    return (
        <Card style={{margin:'10px' }}>
        <Card.Body style={{padding: '0px'}}>
        <Card.Header as="h5">{this.state.task.titulo}</Card.Header>
         
          <Card.Text>
          {this.state.task.contenido}
          </Card.Text>
          <div className="text-right">
          <Button variant="primary" style={{"borderRadius": "20px",height:"25px",width:"50px"}} onClick={() => this.props.onDelete(this.props.task.id)}>-</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}