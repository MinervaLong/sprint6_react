import React from 'react'

const Book = (props) => {

    return(
        <div>
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
        </div>         
    ) 
}
 
export default Book; 