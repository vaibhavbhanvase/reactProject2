
import { AppBar, Button, Toolbar} from '@mui/material'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function RootLayout() {
    const navigate=useNavigate()
  return (
    <>
    <AppBar sx={{ backgroundColor: "lightcyan"}}>
        <Toolbar>
              <h1><Button onClick={()=> navigate("task1")}>Task-1</Button></h1>
              <h1><Button onClick={()=> navigate("task2")}>Task-2</Button></h1>
        </Toolbar>
      </AppBar>

      <div style={{marginTop:"100px"}}>
      <Outlet/>
      </div>
    </>
  )
}

export default RootLayout