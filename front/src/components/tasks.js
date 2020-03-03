import React from 'react';
import Task from "./task";

import Card from 'react-bootstrap/Card'
import CreateTaskForm from "./createTaskForm";

export default class Tasks extends React.Component {

    state = { 
        "tareas": [
        
      ]
    };
    handleDelete = id => {
      const tareas = this.state.tareas.filter(t => t.id !== id);
      this.setState({ tareas });
    };
    render() {

        return (
          <div >
              <Card style={{padding:"30px"}}>
        <Card.Title>{this.props.titulo}</Card.Title>
            {this.state.tareas.map( (e,i) => <Task key={e.id} task={e} onDelete={this.handleDelete} />)}
            
         <CreateTaskForm id={this.state.tareas.length} funcion={(tarea)=>{this.setState({tareas: this.state.tareas.concat(tarea)});console.log(this.state.tareas)}}></CreateTaskForm>
            </Card>
          
        </div>
      );
    }
  }