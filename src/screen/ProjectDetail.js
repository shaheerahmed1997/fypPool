import React, { useState } from 'react'
import { View, Text,SafeAreaView,FlatList,StatusBar,TouchableOpacity, Touchable,ScrollView } from 'react-native'
import TopTab from '../componants/TopTab';
import { DummyProjectDeadines, DummyProjectSessions } from '../constaints/Data';
import { COLORS, FONTS } from '../constaints/theme';
import AddIcon from '../svgIcons/AddIcon';
import CalenderSmallIcon from '../svgIcons/CalenderSmallIcon';
import Cross from '../svgIcons/Cross';
import DropDownIcon from '../svgIcons/DropDownIcon';
import ListIcon from '../svgIcons/ListIcon';
import ListTickIcon from '../svgIcons/ListTickIcon';
import PointListIcon from '../svgIcons/PointListIcon';
import Tick from '../svgIcons/Tick';

const ProjectDetail = ({navigation,route}) => {
    let {item} = route.params

    let month = {
        1:'jan',
        2:'feb',
        3:'mar',
        4:'apr',
        5:'may',
        6:'june',
        7:'july',
        8:'aug',
        9:'sept',
        10:'oct',
        11:'nov',
        12:'dec',
    }

    const [currentTab,setCurrentTab] = useState('Details')
    const DeadLineComponent = ()=>{
        return(
            
            <View
            style={{marginTop:20}}
            >
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end',width:'100%',marginVertical:10}}>
                <AddIcon color={'white'}/>
                <Text style={{...FONTS.body2,color:'white',marginHorizontal:10}}>Add List</Text>

            </View>
            {
                DummyProjectDeadines.map((item,index)=>{
                    return(
                        <View key={`${index}-deadline`} style={{marginVertical:5}}>
                            <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                                <View style={{flexDirection:'row',width:'50%',alignItems:'center'}}>
                                    <ListIcon />
                                    <View style={{marginLeft:10}}>
                                         <ListTickIcon color={'white'}/>
                                    </View>
                                    <Text style={{...FONTS.body11,marginLeft:10,color:'white'}}>{item.title}</Text>
                                </View>
                                <View style={{flexDirection:'row',width:'50%',alignItems:'center',justifyContent:'flex-end'}}>
                                    {
                                        item.clinetReview?
                                        <Text style={{...FONTS.body14,color:COLORS.primary,textDecorationLine:'underline'}}>Client Review</Text>
                                        :
                                        null
                                    }
                                    <View style={{marginHorizontal:10}}>
                                    <AddIcon color={'white'}/>
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:COLORS.darkgray,height:15,width:58,paddingHorizontal:5}}>
                                        <CalenderSmallIcon />
                                        <Text style={{color:'white',...FONTS.body21,marginLeft:5}}>{item.submissionDate}</Text>

                                    </View>
                                </View>

                            </View>
                            {
                                item.task.map((item,index)=>{
                                    return(
                                        <View key={`${index}-items`} style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',paddingHorizontal:20,marginVertical:5}}>
                                            <View style={{flexDirection:'row',width:'50%',alignItems:'center',}}>
                                                <TouchableOpacity
                                                style={{width:15,height:15,borderRadius:2,borderWidth:1,borderColor:COLORS.lightGray4,backgroundColor:item.completionStatus?COLORS.sharpGreen:'black'}}
                                                onPress={()=>{
                                                
                                                }}
                                                >
                                                 </TouchableOpacity>
                                                 <Text style={{...FONTS.body14,color:item.completionStatus?COLORS.secondary:'white',marginLeft:10,textDecorationLine:item.completionStatus?'line-through':'none'}}>{item.taskTitle}</Text>

                                            </View>
                                            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',borderRadius:5,backgroundColor:COLORS.darkgray,height:15,width:58,paddingHorizontal:5}}>
                                                <CalenderSmallIcon />
                                                <Text style={{color:'white',...FONTS.body21,marginLeft:5}}>{item.date}</Text>
                                            </View>

                                        </View>
                                    )

                                })
                            }
                        </View>
                    )
                })
            }

            </View>
        )

    }

    const DetailSessionComponent = () => {
        return(
            <View style={{marginTop:20}}>
                {DummyProjectSessions.map((item,index)=>{
                    return(
                        <View style={{backgroundColor:COLORS.primary,borderRadius:14,padding:10}}>
                            <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',marginVertical:10}}>
                                <View style={{flexDirection:'row',width:'50%',alignItems:'center',}}>
                                    <Text style={{...FONTS.body11,color:'white'}}>{item.date}</Text>
                                    <View style={{backgroundColor:'white',height:40,width:2,marginHorizontal:5}}></View>
                                    <View>
                                        <Text style={{...FONTS.body11,textTransform:'capitalize',color:'white'}}>
                                              {`${item.type} session`}
                                        </Text>
                                        <Text style={{...FONTS.body7,textTransform:'capitalize',color:'white'}} >{item.startTime}<Text> {item.time2}</Text><Text> - </Text><Text>{item.endTime}</Text><Text> {item.time2}</Text></Text>
                                 
                                    </View>

                                </View>
                                    <View style={{width:100,height:45,backgroundColor:COLORS.darkgray,flexDirection:'row',alignItems:'center',paddding:5,justifyContent:'space-around',borderRadius:10}}>
                                        <Text style={{...FONTS.body16,color:'white'}}>Details</Text>
                                        <DropDownIcon/>
                                    </View>

                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginVertical:3}}>
                                <PointListIcon/>
                                <Text style={{...FONTS.body1,color:'white',marginLeft:10}}>Type: <Text>{item.type}</Text></Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginVertical:3}}>
                                <PointListIcon/>
                                <Text style={{...FONTS.body1,color:'white',marginLeft:10}}>Categorie: <Text>{item.categorie}</Text></Text>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginVertical:3}}>
                                <PointListIcon/>
                                <Text style={{...FONTS.body1,color:'white',marginLeft:10,marginVertical:3}}>Details:</Text>
                            </View>
                            <Text  style={{...FONTS.body1,color:'white',marginLeft:20}}>{item.details}</Text>
                            <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginVertical:3}}>
                                <PointListIcon/>
                                <Text style={{...FONTS.body1,color:'white',marginLeft:10}}>Meeting Link: <Text>{item.link}</Text></Text>
                            </View>


                        </View>
                    )
                })}
            </View>
        )

    }
    const DetailComponent = (item)=>{  
        return(
            <View
style={{marginTop:20}}
    
            >
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Project Title:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.title}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Client name:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.clientName}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Start date:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.startDate}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                    <Text style={{...FONTS.body14,color:'white'}}>End date:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.endDate}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                    <Text style={{...FONTS.body14,color:'white'}}>No of deadlines:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.noOfDeadline}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Current deadline:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.currentDeadline}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Project completion status:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.projectCompletionStatus}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:5}}>
                    <Text style={{...FONTS.body14,color:'white'}}>Project Type:</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.projectType}</Text>
                </View>
                    <View style={{marginTop:10}}>
                        <Text style={{...FONTS.body17,color:'white',marginTop:20}}>Project Description</Text>
                        <Text style={{...FONTS.body14,color:'white',marginTop:10}}>{item.projectDescription}</Text>
                    </View>
                    <View style={{marginTop:20}}>
                        <Text style={{...FONTS.body17,color:'white'}}>Technology Used</Text>
                        {item.technologiesUsed.map((item,index)=>{
                            return(
                                <View key={`${index}-item`}>
                                    <Text style={{...FONTS.body14,color:'white',marginTop:5}}>{item}</Text>
                                </View>

                            )
                        })}
                    </View>
            </View>
        )
    }
    const renderTabComponent = (item)=>{
        if(currentTab == 'Details')
        {
            return DetailComponent(item)
        }
        else if(currentTab == 'Deadlines')
        {
            return DeadLineComponent
        }
        else if(currentTab == 'Sessions')
        {
            return DetailSessionComponent()
        }
    }
    return (
        <View style={{flex:1,backgroundColor:'black'}}>
        <StatusBar
            backgroundColor='black'
            barStyle={'light-content'}
            />
            <SafeAreaView>

            </SafeAreaView>
            <View style={{flex:1,paddingHorizontal:15,paddingTop:20}} >
                <View
                style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between'}}
                >
                    <TouchableOpacity
                    style={{width:44,height:44,borderRadius:22,backgroundColor:COLORS.lightGray5,alignItems:'center',justifyContent:'center',}}
                    onPress={()=>navigation.goBack()}
                    >
                        <Cross color={'white'}/>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:COLORS.lightGray5,width:96,height:44,paddingHorizontal:10,borderRadius:15}}>
                        <Text style={{...FONTS.h10,color:'white'}}>Verified</Text>
                            <Tick color={COLORS.sharpGreen}/>

            

                    </View>
                
                </View>
                <Text style={{alignSelf:'center',...FONTS.h11,color:'white',textTransform:'capitalize',marginTop:20}}>{item.title}</Text>
                <View
                style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-around',marginTop:20}}
                >
                <TouchableOpacity style={{alignItems:'center',justifyContent:'center',backgroundColor:COLORS.primary,width:110,height:45,borderRadius:10}}>
                        <Text style={{...FONTS.body16,color:'white'}}>Contact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',backgroundColor:COLORS.primary,width:110,height:45,borderRadius:10}}>
                        <Text style={{...FONTS.body16,color:'white'}}>Book a session</Text>
                    </TouchableOpacity>
                
                </View>
                {/* {Top tab} */}
                <TopTab callback = {(data)=>{
                    setCurrentTab(data)
                    }} />
                    <ScrollView >

                    {/* {DetailComponent(item)} */}
                    {/* {DeadLineComponent(item)} */}
                    {/* {DetailSessionComponent(item)} */}
                    {
                            currentTab == 'Details'?
                            DetailComponent(item)
                            :
                                currentTab == 'Deadlines'?
                                    DeadLineComponent()
                                    :
                                    DetailSessionComponent()
                    }
                    </ScrollView>
                    



                


            </View>


        </View>
    )
}

export default ProjectDetail
