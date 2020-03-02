import React from 'react';
import Task from "./task";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
export default class Tasks extends React.Component {

    state = { 
        "tareas": [
        {
            "titulo": "Tarea1",
            "contenido": "llorar"
      }, 
      {
        "titulo": "Tarea1",
        "contenido": "llorar"
        },
      ]
    };
  
    render() {
        return (
          <div >
              <Card style={{padding:"30px",margin:"30px"}}>
            {this.state.tareas.map( (e,i) => <Task key={i}/>)}
            <Button variant="primary">Primary</Button>
            </Card>
       
        </div>
      );
    }
  }