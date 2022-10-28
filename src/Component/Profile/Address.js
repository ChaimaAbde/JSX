
import React from 'react'

function Address() {

  const adresse={
    rue:"chneni",
    ville:"Gabes",
    code:6041
  }
  return (
  
    <div className='pp adr'>
      <h3>{adresse.rue} {}
      {adresse.ville} {}
      {adresse.code}</h3>
    </div>
    
  )
}

export default Address