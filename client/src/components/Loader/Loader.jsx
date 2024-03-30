import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div 
    className="loader" 
    style={{ 
      display: 'grid',
      placeContent: 'center'
    }}>
      <ThreeDots
        color="#2929293e"
        width="100"
        visible={true}
      />
    </div>
  )
}

export default Loader