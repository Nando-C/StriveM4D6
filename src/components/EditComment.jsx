// import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const EditComment = (props) => {
    const [review, setReview] = useState({
        comment: '',
        rate: 'Select Rating',
    })

    const inputChange = (e) => {
        setReview(
            {
                ...review,
                [e.target.id]: e.target.value,
            }
        )
    }

    const submitUpdate = async (e) => {
        e.preventDefault() 

        const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
        const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
        try {
            const response = await fetch(apiUrl + props.comment._id, {
                method: 'PUT',
                body: JSON.stringify(review),
                headers: {
                    "Authorization": `Bearer ${apiToken}`,
                    "Content-type": "application/json"
                }
            })
            if (response.ok ){
                props.setEdit()
                props.updateComment(await response.json())
                alert('Comment updated successfully')
            } else {
                alert('There was an error, please try againg')
            }
        } catch (error) {
            console.log(error)
        }
    }

    
        return (  
            <>
            <Form className="my-3" onSubmit={(e) => submitUpdate(e)} >
                        <Form.Group className='px-3'>
                            <Form.Control id="comment" as="textarea" rows={3} placeholder="Write a review" value={review.comment} onChange={e => inputChange(e)}/>
                        </Form.Group>
                        <Form.Group className='px-3'>
                            <Form.Control id="rate" size='sm' as="select" value={review.rate}  onChange={e => inputChange(e)}>
                                <option>Select Rating</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                        <Button size='sm' variant="primary" type="submit">
                            <small>Update</small>
                        </Button>
                    </Form>
            </>
        );
}
 
export default EditComment;