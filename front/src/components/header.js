import React from 'react';
import Canvas from "./canvas";
export default class Header extends React.Component {
  render() {
    return (
        <div><h1 class="text-center">My Kanban App</h1>
        <hr/>
        <Canvas/>
        </div>
        
    );
  }
}