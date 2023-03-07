import React from 'react'
import Button from 'react-bootstrap/Button';

const ButtonComponent = (props) => {
  return (
      <div>
          <a href={`https://opensea.io/collection/${props.link.toLowerCase().replaceAll(" ", "-")}`} target="_blank">
            <Button style={{backgroundColor: `${props.color}`, border: "none"}}>Purchase NFT</Button>
          </a>
      </div>
  )
}

export default ButtonComponent