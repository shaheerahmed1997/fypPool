import React, { useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,StatusBar, Platform,Image, FlatList,Animated, TextInput } from 'react-native'
import {FONTS,COLORS,SIZES} from '../constaints/theme';
import Back from '../svgIcons/Back';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const ForgotPassword = ({navigation}) => {
    const [ verificationCode,setVerificationCode] = useState('')


    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <StatusBar
            backgroundColor='white'
            barStyle={'dark-content'}
            />
            <SafeAreaView style={{marginTop:Platform.OS == 'android'?20:10}}>

            </SafeAreaView>
            <View style={{flex:1,paddingHorizontal:20}}>
             <TouchableOpacity style={{width:30,height:30,justifyContent:'center',alignItems:'center',}}
             onPress={()=>navigation.goBack()}
             >
                 <Back/>
            </TouchableOpacity>
            <Text style={{...FONTS.h6,color:'black',marginTop:20,fontSize:34}}>Forgot Password</Text>
            <Text style={{...FONTS.body10,color:COLORS.lightGray3,}}>{`Verification code has been sent to \nyour email`}</Text>

            <OTPInputView
    style={{width: '80%', height: 200,alignSelf:'center',}}
    placeholderTextColor={'black'}
    pinCount={5}
     code={verificationCode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
     onCodeChanged = {code => setVerificationCode(code)}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
/>


   

            <TouchableOpacity style={[styles.signupstyle,{marginTop:25}]}
                      onPress={()=>navigation.navigate('ForgotPassword2')}
                            > 
                                            <Text style={styles.buttontextstyle} >
                                                Next
                                            </Text>
                        </TouchableOpacity>

                        <Text style={{color:'black',...FONTS.body2,textAlign:'center',marginTop:20}}>Didn't get verification code?
                            
                            <Text style={{...FONTS.h5 ,color:COLORS.primary}}
                            onPress={()=>console.log('press')}
                            > Resend email</Text>

                        
                            </Text>



            </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    signupstyle:{
        height:60,
        width:"100%",
        backgroundColor:COLORS.primary,
        borderRadius:14,
        justifyContent:"center",
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 2,
    
    },
    buttontextstyle:{
        color:COLORS.white,
        ...FONTS.h2
        },
        underlineStyleBase: {
            width: 30,
            height: 45,
            borderWidth: 0,
            borderBottomWidth: 2,
            color:'black'
          },
        
          underlineStyleHighLighted: {
            borderColor: COLORS.primary,
          },
})
