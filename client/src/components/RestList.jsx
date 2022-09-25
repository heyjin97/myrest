import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import RestLists from './RestLists'
import { Grid } from '@mui/material'
import RestMap from './RestMap'
import axios from 'axios'

const Item = styled.div`
   background:#fff;
   border:1px solid #ddd;
   border-radius: 10px;
   overflow:hidden;
   height:400px;
`
const ListItem = styled.div`
  border:1px solid #ddd;
  border-radius: 10px;
  background:#fff;
  overflow:hidden;
  position:relative;
  height:auto;
  padding-top:35px;
`
const TopList = styled.div`
  top:0;
  left:0;
  width:100%;
  height:35px;
  border-bottom:1px solid #ddd;
  background:#dedede;
  position:absolute;
  padding:5px 15px;
`

const RestList = () => {
  const [rest, setRest] = useState([]);

useEffect(() => {
  axios.get('./api/myrest')
  .then(rs => setRest(...rest, rs.data))
},[]);  

  
  return (
    <>  
          <Grid container spacing={2}>
             <Grid item xs={8}> 
                 <ListItem>
                    <TopList>
                      옵션
                    </TopList>
                {
                  rest.map( c => (    
                    <RestLists 
                    key={c.id}
                    id={c.id}
                    sigun={c.sigun}
                    title={c.title}
                    tel={c.tel}
                    title_food={c.title_food}      
                    zip ={c.zip}
                    address={c.address}
                    address_old ={c.address_old}
                    lati={c.latitude}
                    longi ={c.longitude} 
                    radi ={c.radius}               
                    />
                  ))
                }
                 </ListItem>
                
             </Grid>
             <Grid item xs={4}>
                 <Item>
                   {rest.map(c =>(
                    <RestMap 
                    key={"map"+c.id}
                    lati={c.latitude}
                    longi={c.longitude}
                    />
                   ))
                   }
                 </Item>
             </Grid>  
        </Grid>  
    </>
  )
}

export default RestList