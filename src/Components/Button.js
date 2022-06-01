import React from 'react'
/*
*this is the component for the Buttons
*/
export default function Button(props){
    return(
        <div className={["button",props.wide?"wide":"",props.high?"high":"",props.red?"red":"",props.blue?"blue":"",props.grey?"grey":""].join(' ')}   onClick={props.press}>
            {props.sign}
        </div>
    )
}