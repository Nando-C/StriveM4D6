// import { Component } from 'react'
import { Button } from 'react-bootstrap'

const DeleteComment = (props) => {

    const deleteComment = async () => {
        const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
        const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
        // console.log(props.comment._id)
        try {
            const response = await fetch(apiUrl + props.comment._id, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${apiToken}`
                }
            })
            // console.log(response.ok)
            if (response.ok ){
                props.onDeleteComment(props.comment._id)
                alert('Comment deleted successfully')
            } else {
                alert('There was an error, please try againg')
            }
        } catch (error) {
            console.log(error)
        }
    }

        return (  
            <>
                <Button size='sm' variant="danger" onClick={(e) => deleteComment()}>
                    <small>Delete</small>
                </Button>
            </>
        );
}
 
export default DeleteComment;