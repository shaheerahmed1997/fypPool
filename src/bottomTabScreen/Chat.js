import React from 'react'
import { StyleSheet, Text, View,SafeAreaView ,TextInput} from 'react-native';
import { COLORS, FONTS } from '../constaints/theme';
import SearchIcon from '../svgIcons/SearchIcon';

const Chat = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <SafeAreaView>

            </SafeAreaView>
            <View style={{flex:1,paddingHorizontal:15,paddingTop:20}} >

                <Text style={{...FONTS.h12,color:'black'}}>Chat</Text>
                <View style={{flexDirection:'row',alignItems:'center',width:'100%',height:42,backgroundColor:'black',justifyContent:'space-around',borderRadius:10}}>
                    <SearchIcon/>
                    <TextInput
                    placeholder='Search....'
                    placeholderTextColor={'white'}
                    style={{height:42,backgroundColor:'black',paddingHorizontal:10,width:250}}
                    />
       




                </View>

                

            </View>


        </View>
    )
}

export default Chat

const styles = StyleSheet.create({})
