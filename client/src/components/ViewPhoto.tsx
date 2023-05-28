import React from 'react'
import { useHistory } from 'react-router-dom'

const ViewPhoto = () => {
  const history = useHistory()
  return (
    <div>
      Photos:
      <button onClick={() => history.push('/photos/add')}>Back</button>
    </div>
  )
}

export default ViewPhoto
