import { Component } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import DeleteComment from './DeleteComment'
import EditComment from './EditComment'


class CommentItem extends Component {
    state = {  
        review: {
            comment: '',
            rate: 'Select Rating',
        },
        isEditing: false,
    }

    setEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing,
        })
    }

    render() { 
        return (  
            <ListGroup.Item className='mx-3'>
                {this.state.isEditing ?
                    <EditComment comment={this.props.comment} updateComment={this.props.updateComment} setEdit={this.setEdit}/>
                :<>
                    <small>{this.props.comment.author}: </small> <br />
                    <em>{this.props.comment.comment}</em> <br /> 
                    <strong>{this.props.comment.rate}</strong> {this.props.comment.rate ===1 ? 'star' : 'stars'} <br />
                </>
                }
                <Button  variant="secondary" size='sm' onClick={this.setEdit} ><small>Edit</small></Button>
                <DeleteComment comment={this.props.comment} onDeleteComment={this.props.onDeleteComment} />
            </ListGroup.Item>
        );
    }
}
 
export default CommentItem;