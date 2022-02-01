import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,StatusBar, Platform,Image, FlatList,Animated } from 'react-native'
import {FONTS,COLORS,SIZES} from '../constaints/theme';
import {Logo, onBoarding_1} from '../constaints/icons'
import { CarosalViewData } from '../constaints/Data';

export default function WelcomeScreen({navigation}) {

    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX,SIZES.width)
    const renderCarosal = ({item,index})=>{
        return(
            <View style={{width:SIZES.width-20,height:200,flex:1,paddingRight:40}}>
            <Image source={item} style={{width:'100%',height:'100%',resizeMode:'contain',}}/>
            </View>

        )
    }
    return (
        <View style={{flex:1, backgroundColor:'white'}}>
            <StatusBar
            backgroundColor={'white'}
            barStyle={'dark-content'}
            />
            <SafeAreaView style={{marginTop:Platform.OS == 'android'?20:0,paddingHorizontal:20}}>
                <Text style={{...FONTS.largeTitle,color:COLORS.primary}}>GET</Text>
                <Text style={{...FONTS.largeTitle,color:COLORS.primary,marginTop:-20}}>STARTED</Text>

            </SafeAreaView>
            <View style={{flex:1,paddingTop:20,paddingHorizontal:20,justifyContent:'space-between',alignItems:'center'}}>
                <Image source={Logo} style={{width:260,height:152,resizeMode:'contain',alignSelf:'center'}}/>
                <View style={{width:'100%',alignItems:'center'}}>
                    
                    <FlatList
                    data={CarosalViewData}
                    keyExtractor={(item,index)=>`${index}-id`}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    snapToAlignment={'center'}
                    scrollEventThrottle={16}
                    decelerationRate={'fast'}
                    renderItem={renderCarosal}
                    onScroll={Animated.event(
                        [{nativeEvent:{contentOffset:{x:scrollX}}}]
                    )}
                    />
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:20,}}>
                        {
                            CarosalViewData.map((item,index)=>{
                                let opacity = position.interpolate({
                                    inputRange:[index - 1,index,index+1],
                                    outputRange:[0.3,1,0.3],
                                    extrapolate:'clamp'

                                })
                                return(
                                    <Animated.View
                                    key={index}
                                    style={{height:20,width:20,backgroundColor:COLORS.primary,borderRadius:10,opacity,margin:8}}
                                    >

                                    </Animated.View>
                                )
                            })
                        }
                        {/* <View style={{height:20,width:20,backgroundColor:COLORS.primary,borderRadius:10}}></View>
                        <View style={{height:20,width:20,backgroundColor:COLORS.secondary,borderRadius:10,marginHorizontal:10}}></View>
                        <View style={{height:20,width:20,backgroundColor:COLORS.secondary,borderRadius:10}}></View> */}
                    </View>

                </View>
                <View style={{width:'100%',alignItems:'center',marginBottom:20}}>
                    <Text style={{...FONTS.h1,color:'black'}}>{'  Find an FYP\nthat suits you'}</Text>
                    <TouchableOpacity style={[styles.signupstyle,{marginTop:20}]}
                            onPress={()=>navigation.navigate('SignUp')}
                            > 
                                            <Text style={styles.buttontextstyle} >
                                                Create Account
                                            </Text>
                        </TouchableOpacity>
                    <Text style={{...FONTS.body13,color:'black',alignSelf:'center',marginTop:20}}>Already a member? <Text style={{...FONTS.h5,color:COLORS.primary,textDecorationLine:'underline'}}
                    onPress={()=>navigation.navigate('SignIn')}
                    >Sign in</Text></Text>

                </View>


            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({

    signupstyle:{
        height:50,
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
        inputtextstyle:{
            width:"100%",
            height:58,
            // borderWidth:1,
            paddingHorizontal:10,
            borderColor:COLORS.secondary,
            backgroundColor:COLORS.white,
            color:COLORS.secondary,
            borderRadius:14,
    
        },


})
