import React from 'react'
import { View, Text ,StatusBar,SafeAreaView,TouchableOpacity } from 'react-native';
import Back from '../svgIcons/Back';
import {FONTS,COLORS,SIZES} from '../constaints/theme';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
const SessionsBooking = ({navigation}) => {
    return (
         <View style={{flex:1,backgroundColor:'white'}}>
            <StatusBar
            backgroundColor='white'
            barStyle={'dark-content'}
            />
            <SafeAreaView style={{marginTop:Platform.OS == 'android'?20:10}}>
                {console.log('this is array',signUpInterest)}

            </SafeAreaView>
            <View style={{flex:1,paddingHorizontal:20}}>
                        <TouchableOpacity style={{width:30,height:30,justifyContent:'center',alignItems:'center',}}
                        onPress={()=>navigation.goBack()}
                        >
                            <Back/>
                        </TouchableOpacity>
                         <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-between'}}>
                           <Text style={{...FONTS.h6,color:'black',marginTop:20,fontSize:34}}>Booking a session</Text>
                           <Text style={{...FONTS.body10,color:COLORS.lightGray3,marginTop:10}}>Fill in some details</Text>
                    </View>
                </View>
            </View>
    )
}

export default SessionsBooking
