import React from 'react'
import RestList from './components/RestList'
import { Container, Typography } from '@mui/material'

const App = () => {
  return (
    <div>
      <Container maxWidth="lg">
           <Typography variant="h2" component="h1" 
                 style={{
                    marginTop:"40px", 
                    marginBottom:"30px", 
                    textAlign:"center", 
                    fontWeight: 'bold'
                 }}>나의 레스토랑 리스트</Typography>
           <RestList />
      </Container>    
    </div>
  )
}

export default App
