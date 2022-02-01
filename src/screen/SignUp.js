import React, { useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,StatusBar, Platform,Image, FlatList,Animated, TextInput } from 'react-native'
import {FONTS,COLORS,SIZES} from '../constaints/theme';
import Back from '../svgIcons/Back';
import Eye from '../svgIcons/Eye';
import Eye_Off from '../svgIcons/Eye_Off';

const SignUp = ({navigation}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [togglePassword,setTogglePassword] = useState(false)
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
            <Text style={{...FONTS.h6,color:'black',marginTop:20,fontSize:34}}>Let's start here</Text>
            <Text style={{...FONTS.body10,color:COLORS.lightGray3,}}>{`Fill in your detail to begin`}</Text>
            <View style={{height:60,width:'100%',borderRadius:14,backgroundColor:'black',paddingHorizontal:13,marginTop:45}}>
                <Text style={{...FONTS.body8,color:'white',marginTop:5,marginLeft:5}}>Email</Text>
                <TextInput
                value={email}
                style={{height:35,width:'100%',color:'white'}}
                onChangeText={(value)=>setEmail(value)}
               
                
                />
            </View>

            <View style={{height:60,width:'100%',borderRadius:14,backgroundColor:'black',paddingHorizontal:13,marginTop:20}}>
                <Text style={{...FONTS.body8,color:'white',marginTop:5,marginLeft:5}}>Password</Text>
                    <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-between'}}>
                            <TextInput
                            value={password}
                            style={{height:35,width:'80%',color:'white',}}
                            secureTextEntry={togglePassword?false:true}
                            onChangeText={(value)=>setPassword(value)}  
                            />
                            {
                                togglePassword?
                                <TouchableOpacity
                            onPress={()=>setTogglePassword(!togglePassword)}
                            >
                              <Eye/>
                            </TouchableOpacity>

                                :
                                <TouchableOpacity
                            onPress={()=>setTogglePassword(!togglePassword)}
                            >
                              <Eye_Off/>
                            </TouchableOpacity>

                            }

                       
                    </View>
            </View>
            <View style={{height:60,width:'100%',borderRadius:14,backgroundColor:'black',paddingHorizontal:13,marginTop:20}}>
                <Text style={{...FONTS.body8,color:'white',marginTop:5,marginLeft:5}}>Confirm Password</Text>
                    <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-between'}}>
                            <TextInput
                            value={confirmPassword}
                            style={{height:35,width:'80%',color:'white',}}
                            secureTextEntry={togglePassword?false:true}
                            onChangeText={(value)=>setConfirmPassword(value)}  
                            />
                            {
                                togglePassword?
                                <TouchableOpacity
                            onPress={()=>setTogglePassword(!togglePassword)}
                            >
                              <Eye/>
                            </TouchableOpacity>

                                :
                                <TouchableOpacity
                            onPress={()=>setTogglePassword(!togglePassword)}
                            >
                              <Eye_Off/>
                            </TouchableOpacity>

                            }

                       
                    </View>
            </View>


            <TouchableOpacity style={[styles.signupstyle,{marginTop:70}]}

            onPress={()=>navigation.navigate('SignUpCheckStatus')}
                      
                            > 
                                            <Text style={styles.buttontextstyle} >
                                                Next
                                            </Text>
                        </TouchableOpacity>



            </View>
        </View>
    )
}

export default SignUp

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
