import React,{useState} from 'react'
import { View, Text,StatusBar,SafeAreaView,TouchableOpacity,StyleSheet,ScrollView } from 'react-native';
import { COLORS, FONTS } from '../constaints/theme';
import Cross from '../svgIcons/Cross';
import Tick from '../svgIcons/Tick';
import UploadDocumentIcon from '../svgIcons/UploadDocumentIcon';


const ProjectDetailToRequest = ({navigation,route}) => {
    let {item} = route.params
    const [fileUpload,setFileUpload] = useState(false)
  return (
        <View style={{flex:1,backgroundColor:'black'}}>
        <StatusBar
            backgroundColor='black'
            barStyle={'light-content'}
            />
            <SafeAreaView>

            </SafeAreaView>
            <ScrollView style={{flex:1,paddingHorizontal:15,paddingTop:20}} >
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
                    <Text style={{...FONTS.body14,color:'white'}}>Project Duration</Text>
                    <Text style={{...FONTS.body14,color:'white'}}>{item.Duration}</Text>
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
            <View style={{backgroundColor:COLORS.lightGray4,justifyContent:'center',alignItems:'center',width:'90%',height:203,marginVertical:20,alignSelf:'center'}}>
                <UploadDocumentIcon/>
                <Text style={{...FONTS.body11,color:'black',marginVertical:10}}>Tap to upload project purposal</Text>
                <TouchableOpacity style={[styles.signupstyle,{width:150}]}
                onPress={()=>{
                    setFileUpload(!fileUpload)
                }}
> 
                <Text style={[styles.buttontextstyle,{...FONTS.body19}]} >
                    Upload document
                </Text>
</TouchableOpacity>
                
            </View>
            <TouchableOpacity style={[styles.signupstyle,{marginVertical:20,marginBottom:30,backgroundColor:fileUpload?COLORS.primary:COLORS.secondary}]}
            disabled={fileUpload?false:true} > 
                                                            <Text style={styles.buttontextstyle} >
                                                                Submit Request
                                                            </Text>
                                        </TouchableOpacity>


                    



                


            </ScrollView>


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
        ...FONTS.body15
        }
})

export default ProjectDetailToRequest