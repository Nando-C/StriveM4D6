// import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import CommentItem from './CommentItem'

const CommentsList = (props) => {

        return ( 
            <ListGroup className='py-3'>
                <h5 className='pl-3'>Reviews</h5>
                {props.comments && props.comments.map(comment => <CommentItem key={comment._id} comment={comment} onDeleteComment={props.onDeleteComment} updateComment={props.updateComment}/>)}
            </ListGroup>
        );
}
 
export default CommentsList