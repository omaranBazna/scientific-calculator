import React from 'react'
/*
*this is the component for the Buttons
*/
export default function Button(props){
    return(
        <div className="button">
            {props.sign}
        </div>
    )
}