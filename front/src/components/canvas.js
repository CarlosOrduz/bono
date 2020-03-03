import React from "react";
import Tasks from "./tasks";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default class Canvas extends React.Component {
  state = {
    titulos: ["To do", "Doing", "Done"]
  };

  render() {
    return (
      <div>
        <h1 className="text-center">My Kanban App</h1>
        <hr />
        <Container fluid="true">
          <Row>
            <Col sm={4}>
              <Tasks titulo={this.state.titulos[0]} />
            </Col>
            <Col sm={4}>
              <Tasks titulo={this.state.titulos[1]} />
            </Col>
            <Col sm={4}>
              <Tasks titulo={this.state.titulos[2]} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
