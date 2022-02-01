import React, { useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,StatusBar, Platform,Image, FlatList,Animated, TextInput } from 'react-native'
import {FONTS,COLORS,SIZES} from '../constaints/theme';
import Back from '../svgIcons/Back';
import Eye from '../svgIcons/Eye';
import Eye_Off from '../svgIcons/Eye_Off';

const SignUpCheckStatus = ({navigation}) => {

    const [signUpStatus,setSignUpStatus] = useState('student')

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
                 <Text style={{...FONTS.h6,color:'black',marginTop:20,fontSize:34}}>Sign Up</Text>
            
            <View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:30}}>
                    <TouchableOpacity style={{width:150,height:150,borderRadius:20,paddingHorizontal:10,backgroundColor:'black',justifyContent:'center',
                    borderColor:COLORS.sharpGreen,
                    borderWidth:signUpStatus == 'student'?4:0
                    
                    }}
                    onPress={()=>setSignUpStatus('student')}
                    >
                        <Text style={{...FONTS.h3,color:'white'}} >As Student</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:150,height:150,borderRadius:20,paddingHorizontal:10,backgroundColor:'black',justifyContent:'center',
                    borderColor:COLORS.sharpGreen,
                    borderWidth:signUpStatus == 'faculty'?4:0
                    }}
                    onPress={()=>setSignUpStatus('faculty')}
                    >
                        <Text style={{...FONTS.h3,color:'white'}} >As faculty member</Text>
                    </TouchableOpacity>

                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                    <TouchableOpacity style={{width:150,height:150,borderRadius:20,paddingHorizontal:10,backgroundColor:'black',justifyContent:'center',     
                    borderColor:COLORS.sharpGreen,
                    borderWidth:signUpStatus == 'client'?4:0
                    }}
                    onPress={()=>setSignUpStatus('client')}
                    >
                        <Text style={{...FONTS.h3,color:'white'}} >As Client</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:150,height:150,borderRadius:20,paddingHorizontal:10,backgroundColor:'black',justifyContent:'center',
                    borderColor:COLORS.sharpGreen,
                    borderWidth:signUpStatus == 'industry'?4:0
                    }}
                    onPress={()=>setSignUpStatus('industry')}
                    >
                        <Text style={{...FONTS.h3,color:'white'}} >As Software Company</Text>
                    </TouchableOpacity>

                </View>

            </View>


            <TouchableOpacity style={[styles.signupstyle,{marginTop:70}]}

            onPress={()=>navigation.navigate('SignUpPersonalInfo')}
                      
                            > 
                                            <Text style={styles.buttontextstyle} >
                                                Next
                                            </Text>
                        </TouchableOpacity>



            </View>
        </View>
    )
}

export default SignUpCheckStatus

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
        }
})
