import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import CommentItem from './CommentItem'

class CommentsList extends Component {
    state = {  

    }
    render() { 
        return ( 
            <ListGroup className='py-3'>
                <h5 className='pl-3'>Reviews</h5>
                {this.props.comments && this.props.comments.map(comment => <CommentItem key={comment._id} comment={comment} onDeleteComment={this.props.onDeleteComment} updateComment={this.props.updateComment}/>)}
            </ListGroup>
        );
    }
}
 
export default CommentsList