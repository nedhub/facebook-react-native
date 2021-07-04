import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native';
import Avatar from './Avatar';
import {Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';






const Container = styled.View`
width: 100%;
height: 92px;

`


const Row = styled.View`
flex-direction: row;
background: #FFFFFF;
width: 100%;
padding: 0 11px;
align-items: center;

`


const Input = styled.TextInput`
height: 50px;
width: 100%;
padding: 0 8px;

`

const Divider = styled.View`
width: 100%;
height: 0.9px;
background: #f0f0f0;
`


const Menu = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
justify-content: center;
height: 42px;
`


const MenuText = styled.Text`
padding-left: 11px;
font-weight: 500;
font-size: 12px;
`



const Seperated = styled.View`
width: 1px;
height: 26px;
background: #F0F0F0
`

const BottomDivider = styled.View`
width: 100%;
height: 9px;
background: #F0F2F5





`







const ToolBar = () => {
    return (

        <>





        <Container>


            <Row>

                <Avatar source={require('../assets/first.jpg')}/>
                <Input placeholder ="What's on your mind?" />
            </Row>


            <Divider />


            <Row>


                <Menu>

                    <Ionicons name="ios-videocam" size={22} color="#F44335"/>
                    <MenuText> Live  
                    </MenuText>

                    <Seperated/>





                    <Menu>
                        <MaterialIcons

                        name="photo-size-select-actual"
                        size={20}
                        color="#4CAF50"    
                        />

                        <MenuText>Photo</MenuText>
                    </Menu>

                    <Seperated/>



                    <Menu>
                        <MaterialCommunityIcons name="video-plus" size={22} color="#E141FC"/>




                        <MenuText>Room</MenuText>

                    </Menu>



                    








                </Menu>





            </Row>



        </Container>
        <BottomDivider/>

        </>
    )
}

export default ToolBar
