import React from 'react'
import { Link } from 'react-router-dom'

export const Tag = (props) => {
  const template = <div>Tag</div>

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