import React from 'react'
import { FlatList, StyleSheet, Text, View,TouchableOpacity,SafeAreaView } from 'react-native'
import { DummyProject } from '../constaints/Data'
import { COLORS, FONTS } from '../constaints/theme'

const Home = ({navigation}) => {

    const renderList = ({item,index})=>{
        return(
            <View style={{width:'100%',backgroundColor:'black',borderRadius:10,padding:10}}>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                    <View style={{width:'65%',}} >
                        <Text style={{...FONTS.body15,color:'white'}} numberOfLines={2}>{item.title}</Text>

                    </View>
                    <View style={{height:44,width:102,backgroundColor:COLORS.darkgray,borderRadius:14,justifyContent:'center',alignItems:'center',}}>
                        <Text style={{...FONTS.h8,color:'white'}} numberOfLines={2}>{item.projectType}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center',marginVertical:10}}>
                    <Text style={{color:'white',...FONTS.body14}}>{item.startDate}</Text>
                    <Text style={{color:'white',...FONTS.body14}}>{item.endDate}</Text>
                </View>
                <View
                style={{backgroundColor:'white',width:'100%',height:1,}}></View>
                <View >
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{...FONTS.body14,color:'white'}}>Institute Name</Text>
                        <Text style={{...FONTS.body14,color:'white'}}>{item.instituteName}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{...FONTS.body14,color:'white'}}>Deadlines</Text>
                        <Text style={{...FONTS.body14,color:'white'}}>{item.noOfDeadline}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{...FONTS.body14,color:'white'}}>Project Completion</Text>
                        <Text style={{...FONTS.body14,color:'white'}}>{item.projectCompletionStatus}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{...FONTS.body14,color:'white'}}>Client Satisfaction</Text>
                        <Text style={{...FONTS.body14,color:'white'}}>{item.clientSatisfaction}</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <Text style={{...FONTS.body14,color:'white'}}>Current Deadline</Text>
                        <Text style={{...FONTS.body14,color:'white'}}>{item.currentDeadline}</Text>
                    </View>
                </View>
                <TouchableOpacity style={[styles.signupstyle,{marginTop:20}]}
                            
                            onPress={()=>navigation.navigate('ProjectDetail',{
                                item
                            })}
                                      
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

                <Text style={{...FONTS.h12,color:'black'}}>Home</Text>
                <Text style={{...FONTS.body10,color:'black'}}>Hello, Cristian</Text>
                <Text style={{...FONTS.h7,color:'black',marginTop:25}}>Project Progress Tracker</Text>
                
            <FlatList
            data={DummyProject}
            keyExtractor={(item)=>`${item.id}-index`}
            renderItem={renderList}
            />

            </View>


        </View>
    )
}

export default Home

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
