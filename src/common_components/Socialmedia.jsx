import React from 'react'
import { Container } from 'react-bootstrap'

function Socialmedia() {
  return (
    <Container className='social p-2 text-center'>
    <h1 className='link-success mb-1'>Welcome to DBCC Family</h1>
    <div>
    <iframe
        width="800"
        height="400"
       src="https://www.youtube.com/embed/jhtnYjRCIpY?autoplay=1&mute=1"
         title="YouTube video player"
        frameborder="4"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
      ></iframe>
      </div>
  </Container>
  )
}

export default Socialmedia