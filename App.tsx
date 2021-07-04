import React from 'react'
import { StatusBar, ScrollView } from 'react-native'

import styled from 'styled-components/native'

import Appbar from "./components/appBar.js"

import ToolBar from './components/ToolBar.js'
import Users from './components/Users'



const Container = styled.SafeAreaView`
flex: 1;

`



const App = () => {

  return ( 

    <>

    <StatusBar

    backgroundColor="#FFFFFF"
    barStyle="dark-content"
    
    />



    
  
  
  <Container>


    <ScrollView>

      <Appbar />
      <ToolBar />
      <Users/>





    </ScrollView>






  </Container>

  </>
  )
}



export default App