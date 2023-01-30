import React from 'react'

function ImageShow({ image }) {
  return (
    <div>
      <img key={image.id} alt={image.alt_description} src={image.urls.small} />
    </div>
  );}

export default ImageShow