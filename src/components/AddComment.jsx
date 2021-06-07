import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
    state = { 
        review: {
            comment: '',
            rate: 'Select Rating',
            elementId: this.props.book.asin
        } 
    }

    inputChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            review: {
                ...this.state.review,
                [e.target.id]: e.target.value,
            }
        })
    }

    submitReview = async (e) => {
        e.preventDefault()
        // console.log(this.state.review)
        const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
        const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: JSON.stringify(this.state.review),
                headers: {
                    "Authorization": `Bearer ${apiToken}`,
                    "Content-type": "application/json"
                }
            })
            // console.log(response)
            if (response.ok) {
                // console.log(await response.json())
                this.props.onNewComment(await response.json())
                this.setState({
                    review: {
                        comment: '',
                        rate: 'Select Rating',
                        elementId: this.props.book.asin
                    } 
                })
                alert('Review Submited')
            } else {
                alert('There was a problem, please try again')
            }
        } catch (error) {
            console.log(error)
            
        }
    }

    render() { 
        return (  
            <>
                <Form className="my-3" onSubmit={(e) => this.submitReview(e)} >
                    <Form.Group className='px-3'>
                        <Form.Control id="comment" as="textarea" rows={3} placeholder="Write a review" value={this.state.review.comment} onChange={e => this.inputChange(e)}/>
                    </Form.Group>
                    <Form.Group className='px-3'>
                        <Form.Control id="rate" size='sm' as="select" value={this.state.review.rate}  onChange={e => this.inputChange(e)}>
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
}
 
export default AddComment;