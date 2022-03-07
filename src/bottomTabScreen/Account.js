import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import LocationIcon from '../svgIcons/LocationIcon';
import { COLORS, FONTS } from '../constaints/theme'

const Account = () => {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <SafeAreaView>

            </SafeAreaView>
            <View style={{flex:1,paddingHorizontal:15,paddingTop:20}} >

                <Text style={{...FONTS.h12,color:'black'}}>Home</Text>
                <Text style={{...FONTS.h7,color:'black'}}>Cristian Downey</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:13}}>
                    <LocationIcon/>
                <Text style={{...FONTS.body10,color:'black',marginLeft:10}}>Moscow, Russia</Text>
                </View>
                
                

            </View>


        </View>
    )
}

export default Account

const styles = StyleSheet.create({})
