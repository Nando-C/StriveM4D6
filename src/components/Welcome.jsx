import {Jumbotron} from 'react-bootstrap'

const Welcome = (props) => (
    <Jumbotron className='mt-5'>
        <h1>Welcome to OpenMind!</h1>
        <p>
            This bookstore has been profesionally curated in order to help readers open their mind and see everything from a different point of view. 
        </p>
        {/* <p>
            <Button variant="primary">Explore</Button>
        </p> */}
    </Jumbotron>
)

export default Welcome