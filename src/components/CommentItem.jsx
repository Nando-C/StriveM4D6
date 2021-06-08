// import { Component } from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import DeleteComment from './DeleteComment'
import EditComment from './EditComment'
import { useState } from 'react'


const CommentItem = (props) => {
    // const [ review, setReview] = useState({
    //     comment: '',
    //     rate: 'Select Rating',
    // })
    const [ isEditing, setIsEditing] = useState(false)

    const setEdit = () => {
        setIsEditing(!isEditing)
    }

        return (  
            <ListGroup.Item className='mx-3'>
                {isEditing ?
                    <EditComment comment={props.comment} updateComment={props.updateComment} setEdit={setEdit}/>
                :<>
                    <small>{props.comment.author}: </small> <br />
                    <em>{props.comment.comment}</em> <br /> 
                    <strong>{props.comment.rate}</strong> {props.comment.rate ===1 ? 'star' : 'stars'} <br />
                </>
                }
                <Button  variant="secondary" size='sm' onClick={setEdit} ><small>Edit</small></Button>
                <DeleteComment comment={props.comment} onDeleteComment={props.onDeleteComment} />
            </ListGroup.Item>
        );
}
 
export default CommentItem;