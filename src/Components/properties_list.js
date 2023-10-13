import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Properties_list() {
  return (
    <div className="App">
      <Container fluid>
        <Form.Group className="form-inline">
          <Form.Label className="mr-2">pool </Form.Label>
          <Form.Check name= "pool" label="yes" inline type="radio" />
          <Form.Check name= "pool" label="no" inline type="radio" />
          </Form.Group>

          <Form.Group className="form-inline">
          <Form.Label className="mr-2">Car-rental</Form.Label>
          <Form.Check name= "car" label="yes" inline type="radio" />
          <Form.Check name= "car" label="no" inline type="radio" />
          </Form.Group>

          <Form.Group className="form-inline">
          <Form.Label className="mr-2">Free Wifi</Form.Label>
          <Form.Check name= "wifi" label="yes" inline type="radio" />
          <Form.Check name= "wifi" label="no" inline type="radio" />
          </Form.Group>


          <Form.Group classNme="form-inline">
          <Form.Label className="mr-2">babysitting</Form.Label>
          <Form.Check name= "baby" label="yes" inline type="radio" />
          <Form.Check name= "baby" label="no" inline type="radio" />
          </Form.Group>


          <Form.Group className="form-inline">
          <Form.Label className="mr-2">spa</Form.Label>
          <Form.Check name= "spa" label="yes" inline type="radio" />
          <Form.Check name= "spa" label="no" inline type="radio" />
          </Form.Group>

          <Form.Group className="form-inline">
          <Form.Label className="mr-2">pet</Form.Label>
          <Form.Check name= "pet" label="yes" inline type="radio" />
          <Form.Check name= "pet" label="no" inline type="radio" />
          </Form.Group>
      </Container>
    </div>
  );
}

export default Properties_list;

