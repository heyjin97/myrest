import React, { useState, useEffect } from 'react'
import { Map } from 'react-kakao-maps-sdk'

const RestMap = ({lati, longi}) => {
  return (
    <>
        <Map center={{
            lat: lati,
            lng: longi
        }}
        style={{
            width:"100%",
            height:"100%"
        }}
        level={3}
        />
    </>
  )
}

export default RestMap