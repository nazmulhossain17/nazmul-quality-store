import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CategoryForm = ({ handleSubmit, value, setValue }) => {
    return (
        <>
            <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter new category"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </>
    );
};

export default CategoryForm;