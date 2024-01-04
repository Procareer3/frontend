import {useParams} from 'react-router-dom'

const Student = () => {
    const paramObj = useParams()
    return ( 
        <div>
            <h1>
                Welcome {paramObj.name.toUpperCase()} to the student page!
            </h1>
            <p> Your ID is {paramObj.id} </p>
        </div>
     );
}
 
export default Student;