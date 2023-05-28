import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { getPhotos } from '../api/photos-api'
import { Photo } from '../types/Photo'

const Photos = ({ auth }) => {
  const history = useHistory()
  const [photos, setPhotos] = React.useState<Photo[]>([])
  const [loading, setLoading] = React.useState(true)
  useEffect(() => {
    getPhotos(auth.idToken).then((data) => {
      setLoading(false)
      setPhotos(data)
    })
  }, [auth.idToken])
  return (
    <div>
      <h1> Photos:</h1>
      <h3>Click on a photo to start editing its name</h3>
      {!!loading && <p>Loading...</p>}
      <div>
        {photos.map((photo) => {
          return (
            <>
              <div
                key={photo.photoKey}
                onClick={() => {
                  history.push(`/photos/edit/${photo.photoKey}`)
                }}
                style={{
                  cursor: 'pointer',
                  marginBottom: '3rem'
                }}
              >
                <img
                  width={300}
                  height={300}
                  src={photo.photoUrl}
                  alt={photo.photoName}
                />
              </div>{' '}
              <p> {photo.photoName}</p>
            </>
          )
        })}
      </div>
      <div>
        <button onClick={() => history.push('/photos/add')}>Add a photo</button>
      </div>
    </div>
  )
}

export default Photos
