import { Form, Button, Row, Col } from 'react-bootstrap';

function SearchBar(props) {
  const { value, onChange, onSubmit, onSelect } = props;

  return (
    <Form onSubmit={onSubmit} className="w-25 mx-auto mb-3">
      <Form.Group as={Row} className="mb-3 align-items-center" controlId="formPosition">
        <Form.Label column sm={4} className="text-end">Search by position:</Form.Label>
        <Col sm={8}>
          <Form.Select aria-label="Select developer or scrum master" value={value} onChange={onSelect} className="w-auto">
            <option value="">Any</option>
            <option value="Developer">Developer</option>
            <option value="Scrum Master">Scrum Master</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Row className="align-items-center">
        <Col sm={8} className="pe-2">
          <Form.Control type="search" placeholder="Search for individual" value={value} onChange={onChange} className="w-100" />
        </Col>
        <Col sm={4} className="px-0">
          <Button type="submit" variant="primary" className="w-100">Search</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;
