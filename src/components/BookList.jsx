// Create a BookList component. This component receives by
// props a list of books and
// displays them using the SingleBook component.
import { Component } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
// import SingleBook from "./SingleBook";
class BookList extends Component {
  state = {
    searchQuery:''
  };
  render() {
    return (
      <Container> 
        <Row>
          <Col>
            <Form.Group className='mt-4' controlId="formGroupEmail">
              {/* <Form.Label>Search</Form.Label> */}
              <Form.Control type="text" placeholder="Search Book" value={this.state.searchQuery} onChange={e => this.setState({searchQuery: e.target.value})}/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
        {/* <CommentArea /> */}
        </Row>
        <Row className="my-5">
          {this.props.books.filter(book => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase())).map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} key={book.asin} className='mb-4'>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
