import React from 'react'
import { Link } from 'react-router-dom'
import { DataSnapshot } from '@firebase/database';

export const Tag = (props) => {
  const template = <div
    style={{
      background:props.bck,
      fontSize:props.size,
      color:props.color,
      padding:'5px 10px',
      display:'inline-block',
      fontFamily:'Righteous',
      ...props.add
    }}
  >
    {props.children}
  </div>

  if (props.link) {
    return (
      <Link to={props.linkto}>
        {template}
      </Link>
    )
  } else {
    return template
  }
}

export const firebaseLooper = (snapshot) => {
  const data = [];
  snapshot.forEach((childSnapshot) =>{
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    })
  })
  return data
}

export const reverseArray = (actualArray) => {
  let reverseArray = [];

  for(let i = actualArray.length-1; i>=0; i--){
    reverseArray.push(actualArray[i])
  }
  return reverseArray
}

// Validate function that will check for email address enter by user
export const validate = (element) => {
  let error = [true,'']
// add checking condition, validating user input
  if(element.validation.required){
    const valid = element.value.trim() !== '';
    const message = `${!valid ? 'This field is required' : ''}`
    error = !valid ? [valid,message]: error
  }
  return error
}