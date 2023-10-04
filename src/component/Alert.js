import React from 'react'

export default function Alert(props) {

    const capitalize =(word)=>{
        const s=word.toUpperCase();
        const str = word.toLowerCase();
        return s.charAt(0) + str.slice(1);
    }
    return (

        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}fully!</strong> {props.alert.message}
        </div>
    )
}
