import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
import { Image, Col } from 'react-bootstrap'
// import { Modal, Button } from 'react-bootstrap'

class CommentArea extends Component {
    state = {  
        selected: false,
        comments: [],
        
    }
    
    render() { 
        return (  
            <>
            {(this.props.book ) ?
                <>
                <Col md={6}>
                    <Image fluid className='p-5 w-100' src={this.props.book.img} alt='book cover'/>
                </Col>
                <Col md={6}>
                    <CommentsList comments={this.state.comments} bookId={this.props.book.asin} onDeleteComment={this.onDeleteComment} updateComment={this.updateComment}/>
                    <AddComment book={this.props.book} onNewComment={this.onNewComment}/>
                </Col>
                </>
                :<div> 
                    <h4 className='p-4'>Click on a book to load more information</h4>
                </div>
            }
            </>
        );
    }

    onNewComment = (newComment) => {
        // console.log(newComment)
        this.setState({
          comments: [...this.state.comments, newComment],
        })
      }
    
      updateComment = (updatedComment) => {
        const commentsRef = this.state.comments
        const positionToUpdate = commentsRef.map(comm => comm._id).indexOf(updatedComment._id)
        commentsRef[positionToUpdate] = updatedComment
        this.setState({
          comments: commentsRef
        })
      }
      onDeleteComment = (commentId) => {
        this.setState({
          comments: this.state.comments.filter(comment => comment._id !== commentId )
        })
      }

      componentDidUpdate = async (prevProps, prevState, snapshot) => {
        // console.log('Component did update', prevProps.book, this.props.book)
        const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
        const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
     
        if(this.props.book && (!prevProps.book || (prevProps.book.asin !== this.props.book.asin))) {
              const response = await fetch(apiUrl + this.props.book.asin, {
                  headers: {
                    "Authorization": `Bearer ${apiToken}`
                  }
                })
                const userComments = await response.json()
            
                this.setState({
                  comments: userComments
                }, ()=> console.log(this.state.comments))
          }
      }

      componentDidMount = async () => {
        const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
        const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
    
        if(this.props.book) {
            const response = await fetch(apiUrl + this.props.book.asin, {
              headers: {
                "Authorization": `Bearer ${apiToken}`
              }
            })
            const userComments = await response.json()
        
            // console.log(apiUrl + this.props.book.asin)
            // console.log(userComments)
            this.setState({
              comments: userComments
            })
        } else {
            console.log('Component did mount : empty book!')
        }
      }
}
 
export default CommentArea;