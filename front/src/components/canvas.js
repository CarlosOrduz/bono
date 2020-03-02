import React from 'react';
import Tasks from "./tasks";
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
export default class Canvas extends React.Component {


  
    render() {
        return (<div style={{display:"inline-flex"}}>
          <Tasks></Tasks>
          <Tasks></Tasks>
          <Tasks></Tasks>   
          </div>
      );
    }
  }