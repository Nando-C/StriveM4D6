import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
// import { Card, Button } from 'react-bootstrap'
// import { Modal, Button } from 'react-bootstrap'

class CommentArea extends Component {
    state = {  }
    
    render() { 
        // const [show, setShow] = useState(false);
  
        // const handleClose = () => setShow(false);
        // const handleShow = () => setShow(true);
        return (  
            <>
                <img className='m-5' src={this.props.book.img} alt='book cover'/>
                <CommentsList comments={this.props.comments} bookId={this.props.book.asin} onDeleteComment={this.props.onDeleteComment} updateComment={this.props.updateComment}/>
                <AddComment book={this.props.book} onNewComment={this.props.onNewComment}/>
                {/* {console.log(this.props.onNewComment)} */}
            </>
            // <Modal show={show} onHide={handleClose}>
            //     <Modal.Header closeButton>
            //         <Modal.Title>
            //             {this.props.image}
            //         </Modal.Title>
            //     </Modal.Header>
            //     <Modal.Body>
            //         <CommentsList comments={this.props.comments}/>
            //     </Modal.Body>
            //     <Modal.Footer>
            //         <Button variant="secondary" onClick={handleClose}>
            //         Close
            //         </Button>
            //         <Button variant="primary" onClick={handleClose}>
            //         Save Changes
            //         </Button>
            //     </Modal.Footer>
            // </Modal>
        );
    }
}
 
export default CommentArea;