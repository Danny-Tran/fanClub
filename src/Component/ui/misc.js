import React from 'react'
import { Link } from 'react-router-dom'

export const Tag = (props) => {
  const template = <div
    style={{
      background:props.bck,
      fontSize:props.size,
      color:props.color,
      padding:'5px 10px',
      display:'inline-block',
      fontFamily:'Righteous'
    }}
  >Tag</div>

  if (props.link) {
    return (
      <link to={props.linkto}>
        {template}
      </link>
    )
  } else {
    return template
  }
}