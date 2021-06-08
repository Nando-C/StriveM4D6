// import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
import { Image, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from 'react'
// import { Modal, Button } from 'react-bootstrap'

const CommentArea = (props) => {
  const [selected, setSelected] = useState(false)
  const [comments, setComments] = useState([])

    const onNewComment = (newComment) => {
      // console.log(newComment)
      setComments(
        [...comments, newComment],
      )
    }
  
    const  updateComment = (updatedComment) => {
      const commentsRef = comments
      const positionToUpdate = commentsRef.map(comm => comm._id).indexOf(updatedComment._id)
      commentsRef[positionToUpdate] = updatedComment
      setComments(
        commentsRef
      )
    }
    const onDeleteComment = (commentId) => {
      setComments(
        comments.filter(comment => comment._id !== commentId )
      )
    }

    const mounted = useRef()

    useEffect(() => {
      const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
      const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'

      if(!mounted.current) {

        const getComments = async () => {
          if(props.book) {
              const response = await fetch(apiUrl + props.book.asin, {
                headers: {
                  "Authorization": `Bearer ${apiToken}`
                }
              })
              const userComments = await response.json()
          
              // console.log(apiUrl + props.book.asin)
              // console.log(userComments)
              setComments(
                userComments
              )
          } else {
              console.log('Component did mount : empty book!')
          }
        }
        getComments()
        mounted.current = true

      } else {
        const updatedComments = async ()=> {
          // if(props.book && (!prevProps.book || (prevProps.book.asin !== props.book.asin))) {
                const response = await fetch(apiUrl + props.book.asin, {
                    headers: {
                      "Authorization": `Bearer ${apiToken}`
                    }
                  })
                  const userComments = await response.json()
              
                  setComments(
                    userComments
                  )
                  // , ()=> console.log(comments))
            // }
        }
        updatedComments()
      }
    })
    
    // useEffect(()=> {
    //   const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
    //   const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
      
    //   const updatedComments = async ()=> {
    //     // if(props.book && (!prevProps.book || (prevProps.book.asin !== props.book.asin))) {
    //           const response = await fetch(apiUrl + props.book.asin, {
    //               headers: {
    //                 "Authorization": `Bearer ${apiToken}`
    //               }
    //             })
    //             const userComments = await response.json()
            
    //             setComments(
    //               userComments
    //             )
    //             // , ()=> console.log(comments))
    //       // }
    //   }
    //   updatedComments()
    // }, [comments])
    
        return (  
            <>
            {(props.book ) ?
                <>
                <Col md={6}>
                    <Image fluid className='p-5 w-100' src={props.book.img} alt='book cover'/>
                </Col>
                <Col md={6}>
                    <CommentsList comments={comments} bookId={props.book.asin} onDeleteComment={onDeleteComment} updateComment={updateComment}/>
                    <AddComment book={props.book} onNewComment={onNewComment}/>
                </Col>
                </>
                :<div> 
                    <h4 className='p-4'>Click on a book to load more information</h4>
                </div>
            }
            </>
        );

      
      
      // componentDidUpdate = async (prevProps, prevState, snapshot) => {
      //   // console.log('Component did update', prevProps.book, props.book)
      //   const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
      //   const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
     
      //   if(props.book && (!prevProps.book || (prevProps.book.asin !== props.book.asin))) {
      //         const response = await fetch(apiUrl + props.book.asin, {
      //             headers: {
      //               "Authorization": `Bearer ${apiToken}`
      //             }
      //           })
      //           const userComments = await response.json()
            
      //           this.setState({
      //             comments: userComments
      //           }, ()=> console.log(comments))
      //     }
      // }

      // componentDidMount = async () => {
      //   const apiToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlM2Y4MWNlYWY0ODAwMTVjOTE4NmEiLCJpYXQiOjE2MjIwMzIyNTcsImV4cCI6MTYyMzI0MTg1N30.COuaWwE7g5o-UfUez4tVCPw0zZc5llB7Jqgsp37LrSA'
      //   const apiUrl = 'https://striveschool-api.herokuapp.com/api/comments/'
    
      //   if(props.book) {
      //       const response = await fetch(apiUrl + props.book.asin, {
      //         headers: {
      //           "Authorization": `Bearer ${apiToken}`
      //         }
      //       })
      //       const userComments = await response.json()
        
      //       // console.log(apiUrl + props.book.asin)
      //       // console.log(userComments)
      //       this.setState({
      //         comments: userComments
      //       })
      //   } else {
      //       console.log('Component did mount : empty book!')
      //   }
      // }
    // )
}
 
export default CommentArea;