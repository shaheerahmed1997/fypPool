import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,TextInput,FlatList } from 'react-native';

import { DummyProject2 } from '../constaints/Data';
import { COLORS, FONTS } from '../constaints/theme'
import CalenderIcon from '../svgIcons/CalenderIcon';
import CalenderSmallIcon from '../svgIcons/CalenderSmallIcon';
import DropDownIcon from '../svgIcons/DropDownIcon';
import MicIcon from '../svgIcons/MicIcon';
import SearchIcon from '../svgIcons/SearchIcon';

const Projects = ({navigation}) => {

    const renderList = ({item,index})=>{
        return(
            <View style={{width:'100%',backgroundColor:'black',borderRadius:10,padding:10}}>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{width:'65%',}} >
                        <Text style={{...FONTS.body15,color:'white'}} numberOfLines={2}>{item.title}</Text>
                        <Text style={{...FONTS.body14,color:COLORS.lightGray}}>1h ago</Text>

                    </View>
                    <View>
                    <View style={{height:44,width:102,backgroundColor:COLORS.darkgray,borderRadius:10,justifyContent:'center',alignItems:'center',}}>
                        <Text style={{...FONTS.h8,color:'white'}} numberOfLines={2}>{item.projectType}</Text>
                    </View>
                    <View style={{height:35,width:90,backgroundColor:COLORS.darkgray,borderRadius:10,justifyContent:'space-around',alignItems:'center',marginVertical:15,flexDirection:'row',}}>
                        <CalenderIcon/>
                        <Text style={{...FONTS.h8,color:'white'}} numberOfLines={2}>{item.Duration}</Text>
                    </View>

                    </View>

                </View>
                
                <View
                style={{backgroundColor:'white',width:'100%',height:1,}}></View>
                <View >
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{...FONTS.body14,color:'white'}}>Project Title</Text>
                        <Text style={{...FONTS.body14,color:'white'}}>{item.projectType}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{...FONTS.body14,color:'white'}}>Client Name</Text>
                        <Text style={{...FONTS.body14,color:'white'}}>{item.clientName}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{...FONTS.body14,color:'white'}}>Project type</Text>
                        <Text style={{...FONTS.body14,color:'white'}}>{item.projectType}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{...FONTS.body14,color:'white'}}>Duration</Text>
                        <Text style={{...FONTS.body14,color:'white'}}>{item.Duration}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{...FONTS.body14,color:'white'}}>Technologies Used</Text>
                        <Text style={{...FONTS.body14,color:'white'}}>{item.technologiesUsed[0]}</Text>
                    </View>
                </View>
                <TouchableOpacity style={[styles.signupstyle,{marginTop:20}]}
                onPress={()=>{
                    navigation.navigate('ProjectDetailToRequest',{
                        item
                    })
                }}
                            
                                      
                                            > 
                                                            <Text style={styles.buttontextstyle} >
                                                                Tap to see details
                                                            </Text>
                                        </TouchableOpacity>


            </View>
        )

    }
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <SafeAreaView>

            </SafeAreaView>
            <View style={{flex:1,paddingHorizontal:15,paddingTop:20}} >
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{...FONTS.h12,color:'black'}}>Projects</Text>
                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',height:24,width:110,backgroundColor:'#C4C4C4',borderRadius:5}}>
                    <Text style={{...FONTS.body7,color:'black'}}>All projects</Text>
                    <DropDownIcon/>


                </TouchableOpacity>

                </View>
                <View style={{flexDirection:'row',alignItems:'center',width:'100%',height:42,backgroundColor:'black',justifyContent:'space-around',borderRadius:10}}>
                    <SearchIcon/>
                    <TextInput
                    placeholder='Search a project'
                    placeholderTextColor={'white'}
                    style={{height:42,backgroundColor:'black',paddingHorizontal:10,width:250}}
                    />
                    <MicIcon/>




                </View>
                <View style={{marginTop:30}}>
                <FlatList
            data={DummyProject2}
            keyExtractor={(item)=>`${item.id}-index`}
            renderItem={renderList}
            />
            </View>
            </View>


        </View>
    )
}

export default Projects

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
        ...FONTS.body15
        }
})
