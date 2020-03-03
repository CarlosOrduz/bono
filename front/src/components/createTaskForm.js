import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
var count = 1;
function Example(props) {
  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [desc, setDesc] = useState("");
  const handleClose1 = () => {
    setShow(false);
    setTitulo("")
    setDesc("")
  };
  const handleClose = () => {
    setShow(false);
    handleSubmit();
  };
  const handleShow = () => {
    setShow(true);
  };

  function handleChangeTitle(e) {
    setTitulo(e.target.value);
  }
  function handleChangeDesc(e) {
    setDesc(e.target.value);
  }

  function handleSubmit() {
    count++;
    var tarea = { titulo: titulo, contenido: desc, id: count };
    if(titulo!==""){
    props.func.funcion(tarea);
    }
    setTitulo("")
    setDesc("")
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Añadir tarea
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Ingresar tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group>
              <Form.Label>Nombre de la tarea</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej. Tarea1"
                onChange={handleChangeTitle}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descripción de la tarea</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Descripción de la tarea"
                onChange={handleChangeDesc}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default class createTaskForm extends React.Component {
  render() {
    return <Example func={this.props} />;
  }
}
