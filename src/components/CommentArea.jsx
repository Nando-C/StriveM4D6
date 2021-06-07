import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
// import { Card, Button } from 'react-bootstrap'
// import { Modal, Button } from 'react-bootstrap'

class CommentArea extends Component {
    state = {  }
    
    render() { 
        return (  
            <>
                <img className='m-5' src={this.props.book.img} alt='book cover'/>
                <CommentsList comments={this.props.comments} bookId={this.props.book.asin} onDeleteComment={this.props.onDeleteComment} updateComment={this.props.updateComment}/>
                <AddComment book={this.props.book} onNewComment={this.props.onNewComment}/>
            </>
        );
    }
}
 
export default CommentArea;