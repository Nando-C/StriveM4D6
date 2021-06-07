import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class EditComment extends Component {
    state = {  
        review: {
            comment: '',
            rate: 'Select Rating',
            // elementId: this.props.comment._id
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

    submitUpdate = async (e) => {
        e.preventDefault() 

        const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
        const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
        // console.log(this.props.comment._id)
        try {
            const response = await fetch(apiUrl + this.props.comment._id, {
                method: 'PUT',
                body: JSON.stringify(this.state.review),
                headers: {
                    "Authorization": `Bearer ${apiToken}`,
                    "Content-type": "application/json"
                }
            })
            // console.log(response.ok)
            if (response.ok ){
                this.props.setEdit()
                this.props.updateComment(await response.json())
                alert('Comment updated successfully')
            } else {
                alert('There was an error, please try againg')
            }
        } catch (error) {
            console.log(error)
        }
    }

    
    render() { 
        return (  
            <>
            <Form className="my-3" onSubmit={(e) => this.submitUpdate(e)} >
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
                        <Button size='sm' variant="primary" type="submit">
                            <small>Update</small>
                        </Button>
                        {/* <EditComment comment={this.props.comment}/> */}
                    </Form>
            </>
        );
    }
}
 
export default EditComment;