import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import DeleteComment from './DeleteComment'


class CommentItem extends Component {
    state = {  }
    render() { 
        return (  
            <ListGroup.Item className='mx-3'>
                <small>{this.props.comment.author}: </small> <br />
                <em>{this.props.comment.comment}</em> <br /> 
                <strong>{this.props.comment.rate}</strong> {this.props.comment.rate ===1 ? 'star' : 'stars'} <br />
                <DeleteComment comment={this.props.comment}/>
            </ListGroup.Item>
        );
    }
}
 
export default CommentItem;