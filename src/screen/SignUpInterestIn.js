import React, { useState } from 'react'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,StatusBar, Platform, FlatList,Modal,TouchableWithoutFeedback, TextInput, Touchable } from 'react-native'
import { InterestInData } from '../constaints/Data';
import {FONTS,COLORS,SIZES} from '../constaints/theme';
import AddIcon from '../svgIcons/AddIcon';
import Back from '../svgIcons/Back';
import Cross from '../svgIcons/Cross';

const SignUpInterestIn = ({navigation}) => {

    const [signUpInterest,setSignUpInterest] = useState(['web development'])
    const [openModal,setOpenModal] = useState(false)
    const [newTitle,setNewTitle] = useState('')
    const renderItem = ({item,index})=>{
        return(
            <TouchableOpacity
            style={{
                height:100,
                width:100,
                borderColor:COLORS.sharpGreen,
                borderWidth:signUpInterest.includes(`${item.title}`)?2:0,
                borderRadius:15,
                backgroundColor:'black',
                justifyContent:'center',
                alignItems:'center',
                marginVertical:5,
                paddingHorizontal:3                


            }}
            onPress={()=>{

                if(signUpInterest.includes(`${item.title}`))
                {
                    setSignUpInterest(signUpInterest.filter(m=>{
                        return m != item.title
                    }))

                }
                else{
                    setSignUpInterest([...signUpInterest,item.title])

                }
            }}
            >
            <Text style={{color:'white',textTransform:'capitalize'}}  >{item.title}</Text>

            </TouchableOpacity>
        )
    }

    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <StatusBar
            backgroundColor='white'
            barStyle={'dark-content'}
            />
            <SafeAreaView style={{marginTop:Platform.OS == 'android'?20:10}}>
                {console.log('this is array',signUpInterest)}

            </SafeAreaView>
            <View style={{flex:1,paddingHorizontal:20}}>
             <TouchableOpacity style={{width:30,height:30,justifyContent:'center',alignItems:'center',}}
             onPress={()=>navigation.goBack()}
             >
                 <Back/>
            </TouchableOpacity>
            <View style={{flexDirection:'row',alignItems:'center',width:'100%',justifyContent:'space-between'}}>
            <Text style={{...FONTS.h6,color:'black',marginTop:20,fontSize:34}}>Interest In</Text>

            <TouchableOpacity
            style={{marginTop:10}}
            onPress={()=>setOpenModal(true)}
            >
                <AddIcon color={COLORS.primary}/>

            </TouchableOpacity>

            </View>
                
            
            <View>
            <FlatList
                keyExtractor={(item)=>`${item.id}-index`}
                data={InterestInData}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                columnWrapperStyle={{justifyContent:'space-between',}}
                />


            </View>


            <TouchableOpacity style={[styles.signupstyle,{marginTop:70}]}
                onPress={()=>navigation.navigate('BottomTab')} 
                > 
                                            <Text style={styles.buttontextstyle} >
                                                Next
                                            </Text>
                        </TouchableOpacity>



            </View>
    <Modal
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(false)
        }}
        animationType={'slide'}
        transparent={true}>
        {Platform.OS === 'android' ? (
          <StatusBar backgroundColor="rgba(0, 0, 0, 0.22)" />
        ) : null}
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.22)',
            justifyContent: 'flex-end',
          }}>
          <SafeAreaView
            style={{
              height: '40%',
              backgroundColor: COLORS.white,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              paddingBottom: 10,
              paddingHorizontal:10
            }}>



                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
                        <TouchableOpacity
                            style={{width:40,height:40,justifyContent:'center',alignItems:'center',}}
                            onPress={() => {
                                setOpenModal(false)
                                {/* console.log('this is abcd') */}
                            }}>
                                <Back/>
                            </TouchableOpacity>

                        <Text style={{color:'black',...FONTS.largeTitle,marginLeft:10}}>Add New Title</Text>

                        </View>

                        <View style={{height:60,width:'100%',borderRadius:14,backgroundColor:'black',paddingHorizontal:13,marginTop:10}}>
                                <Text style={{...FONTS.body8,color:'white',marginTop:5,marginLeft:5}}>Title</Text>
                                <TextInput
                                value={newTitle}
                                style={{height:35,width:'100%',color:'white'}}
                                onChangeText={(value)=>setNewTitle(value)}
                            
                                
                                />
                         </View>
                         <TouchableOpacity style={[styles.signupstyle,{marginTop:20}]}
                         onPress={()=>{
                             InterestInData.push({
                                 id:InterestInData.length + 1,
                                 title:newTitle
                             })
                        setOpenModal(false)
                         setNewTitle('')
                         }}
                      
                      > 
                                      <Text style={styles.buttontextstyle} >
                                          Add Item
                                      </Text>
                  </TouchableOpacity>

                    </View>
                    

                </SafeAreaView>
            </View>
        </Modal>

        </View>
    )
}

export default SignUpInterestIn

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
