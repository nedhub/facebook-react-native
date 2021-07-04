import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';




const Container = styled.View`
width: 100%;
height: 58px;
flex-direction: row;
align-items: center;
`


const Room = styled.TouchavleOpacity`
width: 115px;
height: 40px;
flex-direction: row;
align-items: center;
border-radius: 20px;
border-width: 1px;
border-color: #82b1ff;
padding: 0 15px;
margin-right: 12px;

`




const Textr = styled.Text`
color: #1777f2;
font-size: 12px;
padding-left: 6px;





`

const Users = () => {
    return (
        <Container>


            <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={{paddingLeft: 11}}
            >


              <Room>
                  
                  
                  
                  
                  </Room>  







            </ScrollView>





        </Container>
        
    )
}

export default Users
