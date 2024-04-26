import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError()
  return (
    <div>
      Error Page Not Found 404
      <h1>{err.status}</h1>
    </div>
  )
}

export default Error
