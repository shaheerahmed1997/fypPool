import React,{useState} from 'react'
import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import { TopTabBar } from '../constaints/Data'
import { COLORS,FONTS } from '../constaints/theme'

const TopTab = ({callback}) => {

    const [tabState,setTabState] = useState("Details")


    const DetailComponent = (item)=>{
        return(
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Project Title:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.title}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Client name:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.clientName}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Start date:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.startDate}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{...FONTS.body14,color:'white'}}>End date:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.endDate}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{...FONTS.body14,color:'white'}}>No of deadlines:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.noOfDeadline}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Current deadline:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.currentDeadline}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Project completion status:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.projectCompletionStatus}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Project Type:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.ProjectType}</Text>
                </View>
                    <View style={{marginTop:10}}>
                        <Text style={{...FONTS.body17,color:'white'}}>Project Description</Text>
                        <Text style={{...FONTS.body14,color:'white',marginTop:10}}>`${item.projectDescription}`</Text>
                    </View>
                    <View>
                        <Text style={{...FONTS.body17,color:'white'}}>Technology Used</Text>
                        {/* {item.technologyUsed.map((item)=>{
                            return(
                                <View>
                                    <Text style={{...FONTS.body14,color:'white',marginTop:5}}>{item}</Text>
                                </View>

                            )
                        })} */}
                    </View>
            </ScrollView>
        )
    }


    return (
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginTop:20,
            borderRadius:10,
            backgroundColor: COLORS.darkgray,
            
        }}>
        {/* <TabIndicator/> */}
    
                           {
                    TopTabBar.map((item,index)=>{
                        return(
                            <TouchableOpacity
                            key={`top-tab-bar${index}`}
                            onPress={()=>{
                                setTabState(item.title)
                                callback(item.title)
                                }}
                            style={{width:110,backgroundColor:tabState == item.title?COLORS.primary:COLORS.darkgray,height:'100%',borderRadius:10}}
                            >
                            <View
                            style={{paddingHorizontal:15,alignItems:'center',justifyContent:'center',height:40}}
                            >
                            <Text style={{...FONTS.h4,color:'white'}}>{item.title}</Text>
                            </View>


                            </TouchableOpacity>
                        )

                    })
                }
              
              
        </View>
    )
}

export default TopTab
