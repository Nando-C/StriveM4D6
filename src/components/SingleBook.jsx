// Create a SingleBook component as a function.
// The component receives a book object as a prop, and displays
// the cover and the title of the book. Use react-bootstrap Cards to display a book
// (The book object can be read from one of the .json
// book files we gave you yesterday).

/* book json can be found in data folder */
import { Component } from "react";
import { Card } from "react-bootstrap";
import MyBadge from "./MyBadge";
// import CommentsList from "./CommentsList";
import CommentArea from "./CommentArea"

// const SingleBook = ({ book }) => {
//   return (
//     <div>
//       <Card>
//         <Card.Img variant="top" src={book.img} style={{height: '300px'}} />
//         <MyBadge text={book.price} color='warning' />
//         <Card.Body>
//           <Card.Title>{book.title}</Card.Title>
//           <Card.Text>
//             {book.category}
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default SingleBook;

class SingleBook extends Component {
  state = {
    selected: false,
    comments: [],
  };
  render() {
    const mystyle = {
      position: "absolute",
      top: "20%",
      right: "0",
    };
    return (
        <Card 
          className='h-100'
          // onClick={() => this.setState({selected: !this.state.selected})}
          style={{transform: this.state.selected ? 'scale(0.99)' : 'none'}}
        >
          <Card.Img
            onClick={() => this.setState({selected: !this.state.selected})}
            className="w-100"
            variant="top"
            src={this.props.book.img}
            style={{ height: "300px" }}
          />
          <MyBadge
            style={mystyle}
            text={this.props.book.price}
            color="warning"
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.category}</Card.Text>
          </Card.Body>
          {/* {this.state.selected && <CommentsList comments={this.state.comments}/>} */}
          {this.state.selected && <CommentArea comments={this.state.comments} book ={this.props.book}/>}
        </Card>
    );
  }

  
  componentDidMount = async () => {
    const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
    const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'

    const response = await fetch(apiUrl + this.props.book.asin, {
      headers: {
        "Authorization": `Bearer ${apiToken}`
      }
    })
    const userComments = await response.json()

    console.log(apiUrl + this.props.book.asin)
    console.log(userComments)
    this.setState({
      comments: userComments
    })
  }
}

export default SingleBook;
