// import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

const AddComment = (props) => {
    const [review, setReview] = useState({
        comment: '',
        rate: 'Select Rating',
        elementId: props.book.asin
    } )
    // state = { 
    //     review: {
    //         comment: '',
    //         rate: 'Select Rating',
    //         elementId: props.book.asin
    //     } 
    // }

    const inputChange = (e) => {
        // console.log(e.target.value)
        setReview(
            {
                ...review,
                [e.target.id]: e.target.value,
            }
        )
    }

    const submitReview = async (e) => {
        e.preventDefault()
        // console.log(review)
        const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
        const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(review),
                headers: {
                    "Authorization": `Bearer ${apiToken}`,
                    "Content-type": "application/json"
                }
            })
            // console.log(response)
            if (response.ok) {
                // console.log(await response.json())
                props.onNewComment(await response.json())
                setReview(
                    {
                        comment: '',
                        rate: 'Select Rating',
                        elementId: props.book.asin
                    } 
                )
                alert('Review Submited')
            } else {
                alert('There was a problem, please try again')
            }
        } catch (error) {
            console.log(error)
            
        }
    }

        return (  
            <>
                <Form className="my-3" onSubmit={(e) => submitReview(e)} >
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
                    <Button className='ml-3' variant="primary" size='sm' type="submit">
                        Add Review
                    </Button>
                </Form>
            </>
        );
}
 
export default AddComment;