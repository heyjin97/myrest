import React, { useState, useEffect } from 'react'
import { Roadview } from 'react-kakao-maps-sdk'
import styled from 'styled-components'
import { LocationOnTwoTone } from '@mui/icons-material';


const Ablock = styled.div`
  margin:15px 20px 10px;
  display:flex;
  padding:15px;
  border-bottom:1px dashed #eee;
  &:hover{
      background:#fafcdf;
  }
`
const ImgItem = styled.div`
  flex: 0 0 30%;
`
const TypeBox = styled.div`
  flex: 0 0 60%;
  padding-left:20px;
`
const AreaBox = styled.div`
   flex: 0 0 10%;
   align-self: center;
   padding-right:40px;
`

const RestLists = ({id,
                    sigun,
                    title,
                    tel,
                    title_food,
                    zip,
                    address,
                    address_old,
                    lati,
                    longi,
                    radi
                 }) => {

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [rad, setRad] = useState('');

  useEffect(()=>{
    setLat(lati);
    setLon(longi);
    setRad(radi);
  }, [])

  return (
    <Ablock>
        <ImgItem>
          <Roadview 
            position={{
              lat: lat,
              lng: lon,
              radius: rad
            }}
            style={{
              width:"100%",
              height:"156px",
              borderRadius:"15px",
              border:"2px solid #333"
            }}
          />
        </ImgItem>
        <TypeBox>
             <h2>{title}</h2>
             <p>{title_food}</p>
             <p>{sigun}</p>
        </TypeBox>
        <AreaBox>
             <LocationOnTwoTone sx={{ fontSize: 40 }} />
        </AreaBox>
   </Ablock>
  )
}

export default RestLists